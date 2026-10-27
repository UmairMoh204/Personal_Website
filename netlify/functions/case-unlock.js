const lock = require('./lock-lib');

function methodOf(event) {
    return String(
        event.httpMethod ||
        event.method ||
        (event.requestContext && event.requestContext.http && event.requestContext.http.method) ||
        (event.requestContext && event.requestContext.httpMethod) ||
        ''
    ).toUpperCase();
}

function parseBody(event) {
    let body = event.body;
    if (body && typeof body === 'object' && !Buffer.isBuffer(body)) {
        return {
            password: String(body.password || ''),
            next: String(body.next || '')
        };
    }
    if (event.isBase64Encoded) {
        body = Buffer.from(String(body || ''), 'base64').toString('utf8');
    } else {
        body = String(body || '');
    }
    const query = event.queryStringParameters || {};
    const trimmed = body.trim();
    if (trimmed.charAt(0) === '{') {
        try {
            const data = JSON.parse(trimmed);
            return {
                password: String((data && data.password) || ''),
                next: String((data && data.next) || query.next || '')
            };
        } catch (err) {}
    }
    const params = new URLSearchParams(body);
    return {
        password: params.get('password') || '',
        next: params.get('next') || query.next || ''
    };
}

function json(status, data, extraHeaders) {
    return {
        statusCode: status,
        headers: Object.assign({
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'private, no-store'
        }, extraHeaders || {}),
        body: JSON.stringify(data)
    };
}

exports.handler = async function (event) {
    const method = methodOf(event);
    if (method === 'GET' || method === 'HEAD') {
        return {
            statusCode: 302,
            headers: {
                Location: '/projects/unlock',
                'Cache-Control': 'private, no-store'
            }
        };
    }
    if (method && method !== 'POST') {
        return json(200, { ok: false, error: 'method' });
    }

    const form = parseBody(event);
    const next = lock.allowedNext(form.next);
    if (!lock.passwordOk(form.password)) {
        return json(200, { ok: false, error: 'password' });
    }
    if (!next) {
        return json(200, { ok: false, error: 'dest' });
    }

    return json(200, { ok: true, next: next }, {
        'Set-Cookie': lock.cookieHeader(lock.signToken(next), event)
    });
};

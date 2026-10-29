const lock = require('./lock-lib');

function projectFromEvent(event) {
    const query = event.queryStringParameters || {};
    if (query.project === 'amazon' || query.project === 'saintpaul') return query.project;
    const raw = (event.path || event.rawUrl || '').toString();
    if (raw.indexOf('saintpaul') !== -1) return 'saintpaul';
    if (raw.indexOf('amazon') !== -1) return 'amazon';
    return '';
}

exports.handler = async function (event) {
    const project = projectFromEvent(event);
    const next = project ? '/projects/' + project : '';
    const token = lock.getCookie(event.headers || {}, lock.COOKIE);
    const local = lock.isLocalHost(event);

    if (!local && (!next || !lock.verifyToken(token, next))) {
        return {
            statusCode: 302,
            headers: {
                Location: '/projects/unlock#' + (project || 'amazon'),
                'Cache-Control': 'private, no-store'
            }
        };
    }

    const html = lock.readCaseHtml(project);
    if (!html) {
        return { statusCode: 500, body: 'Case study is unavailable.' };
    }

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'private, no-store'
        },
        body: html
    };
};

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const PASSWORD_HASH = '353b6fbe7420352e6e149bb89379602225ea4f1fe3e1db5a1b5d5231ba567dc1';
const SECRET = process.env.CASE_LOCK_SECRET || 'case-lock-353b6fbe7420352e6e149bb89379602225ea4f1fe3e1db5a1b5d5231ba567dc1';
const COOKIE = 'cs_gate';
const MAX_AGE_MS = 30 * 60 * 1000;

function allowedNext(raw) {
    if (!raw) return '';
    let next = String(raw);
    try {
        if (/^https?:/i.test(next)) next = new URL(next).pathname;
    } catch (err) {}
    if (next.charAt(0) !== '/') next = '/' + next;
    if (next.length > 1 && next.slice(-1) === '/') next = next.slice(0, -1);
    if (next === '/projects/amazon' || next === '/projects/saintpaul') return next;
    return '';
}

function slugFor(next) {
    if (next === '/projects/saintpaul') return 'saintpaul';
    if (next === '/projects/amazon') return 'amazon';
    return '';
}

function sha256hex(text) {
    return crypto.createHash('sha256').update(String(text), 'utf8').digest('hex');
}

function safeEqual(a, b) {
    const left = Buffer.from(String(a));
    const right = Buffer.from(String(b));
    if (left.length !== right.length) return false;
    return crypto.timingSafeEqual(left, right);
}

function passwordOk(password) {
    return safeEqual(sha256hex(String(password || '').trim()), PASSWORD_HASH);
}

function b64url(text) {
    return Buffer.from(String(text), 'utf8')
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/g, '');
}

function fromB64url(text) {
    let str = String(text || '').replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) str += '=';
    return Buffer.from(str, 'base64').toString('utf8');
}

function signToken(next) {
    const payload = b64url(JSON.stringify({ p: next, e: Date.now() + MAX_AGE_MS }));
    const sig = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
    return payload + '.' + sig;
}

function verifyToken(token, next) {
    if (!token || !next) return false;
    const parts = String(token).split('.');
    if (parts.length !== 2) return false;
    const payload = parts[0];
    const sig = parts[1];
    const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
    if (!safeEqual(expected, sig)) return false;
    try {
        const data = JSON.parse(fromB64url(payload));
        return data && data.p === next && Number(data.e) > Date.now();
    } catch (err) {
        return false;
    }
}

function getCookie(headers, name) {
    const raw = headers.cookie || headers.Cookie || '';
    const chunks = String(raw).split(';');
    for (let i = 0; i < chunks.length; i += 1) {
        const part = chunks[i].trim();
        const eq = part.indexOf('=');
        if (eq === -1) continue;
        if (part.slice(0, eq) !== name) continue;
        const value = part.slice(eq + 1);
        try {
            return decodeURIComponent(value);
        } catch (err) {
            return value;
        }
    }
    return '';
}

function cookieHeader(token, event) {
    const parts = [
        COOKIE + '=' + token,
        'HttpOnly',
        'SameSite=Lax',
        'Path=/',
        'Max-Age=' + Math.floor(MAX_AGE_MS / 1000)
    ];
    const proto = (event.headers && (event.headers['x-forwarded-proto'] || event.headers['X-Forwarded-Proto'])) || 'https';
    if (String(proto).split(',')[0].trim() !== 'http') parts.push('Secure');
    return parts.join('; ');
}

function readCaseHtml(project) {
    const fileName = path.join('projects', project, 'index.html');
    const candidates = [
        path.join(__dirname, '..', '..', fileName),
        path.join(process.cwd(), fileName),
        path.join(__dirname, fileName)
    ];
    for (let i = 0; i < candidates.length; i += 1) {
        try {
            if (fs.existsSync(candidates[i])) return fs.readFileSync(candidates[i], 'utf8');
        } catch (err) {}
    }
    return '';
}

module.exports = {
    COOKIE,
    allowedNext,
    slugFor,
    passwordOk,
    signToken,
    verifyToken,
    getCookie,
    cookieHeader,
    readCaseHtml
};


/**
 *
 */
export function buildQueryString(keyValuePairs, encodeValues = false) {
    return Object.keys(keyValuePairs).map((key) => {
        return `${key}=${encodeValues ? encodeURIComponent(keyValuePairs[key]) : keyValuePairs[key]}`;
    }).join('&');
}


/**
 *
 */
export function buildQueryUrl(url, keyValuePairs, encodeValues = false) {
    const queryString = buildQueryString(keyValuePairs, encodeValues);
    return url + (queryString ? `?${queryString}` : '');
}


/**
 *
 */
export function getURLHashbangAttributes() {
    const url = window.location.href;
    const vars = {};

    if (url.indexOf('#') === -1) {
        return null;
    }

    const hashes = url.slice(url.indexOf('#') + 1).split('&');

    for (let i = 0; i < hashes.length; i++) {
        const hash = hashes[i].split('=');

        if (hash.length > 1) {
            vars[hash[0]] = hash[1];
        } else {
            vars[hash[0]] = null;
        }
    }

    return vars;
}

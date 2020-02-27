'use strict';

/**
 * Checks if the given string is URL
 * @param {string} string
 * @returns {boolean}
 */
function isURL(pattern) {
    try {
        const decoded = decodeURIComponent(pattern);
        const url = new URL(decoded);
        console.log(url.toString());
        console.log(decoded);
        return url.toString() === decoded;
    } catch (error) {
        return false;
    }
}

module.exports = isURL;

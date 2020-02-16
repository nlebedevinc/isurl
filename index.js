function isURL(string) {
    try {
        const decoded = decodeURIComponent(pattern);
        const url = new URL(decoded);
        return url.toString() === decoded;
    } catch (error) {
        return false;
    }
}

module.exports = isURL;

const isURL = require('../index');

describe('isurl', () => {
    it('should return false if given string is not URL string', () => {
        const test = 'sample string';
        const result = isURL(test);
        expect(result).toBeFalsy();
    });

    it('should return true for URL string', () => {
        const test = 'http://example.com/';
        const result = isURL(test);
        expect(result).toBeTruthy();
    });
});

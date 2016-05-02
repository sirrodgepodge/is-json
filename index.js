module.exports = function isJSON(str) {
    if (typeof str !== 'string') return false;

    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }

    return true;
}

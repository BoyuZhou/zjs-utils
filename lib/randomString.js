/**
 * 生成随机字符串
 * @param size
 * @param chars
 * @returns {string}
 */
module.exports = function randomString(size, chars) {
    size = size || 6;
    chars = chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const max = chars.length;
    let ret = '';
    for (let i = 0; i < size; i++) {
        ret += chars.charAt(Math.floor(Math.random() * max));
    }
    return ret;
};
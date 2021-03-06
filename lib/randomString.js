'use strict';

/**
 * 生成随机字符串
 * @param size
 * @param chars
 * @returns {string}
 */
module.exports = function randomString(size, chars) {
    size = size || 6;
    chars = chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var max = chars.length;
    var ret = '';
    for (var i = 0; i < size; i++) {
        ret += chars.charAt(Math.floor(Math.random() * max));
    }
    return ret;
};
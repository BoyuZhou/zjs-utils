let __type = Object.prototype.toString;

function isFunc (obj) {
    return __type.call(obj) === "[object Function]"
}

function isObj (obj) {
    return __type.call(obj) === "[object Object]"
}

function isArray (obj) {
    return __type.call(obj) === "[object Array]"
}

function isString (obj) {
    return __type.call(obj) === "[object String]"
}

function isNumber (obj) {
    return __type.call(obj) === "[object Number]"
}

function isBoolean (obj) {
    return __type.call(obj) === "[object Boolean]"
}
//ie6-8,null 和 undefined 会返回[object Object]
function isNull (obj) {
    return obj == null;
}

module.exports = {
    isFunc,
    isObj,
    isArray,
    isString,
    isNumber,
    isBoolean,
    isNull
}
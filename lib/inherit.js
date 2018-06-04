"use strict";

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 复制一个对象的属性到另一个对象
 * @param obj
 * @param props
 * @returns {*}
 */
function extend(obj, props) {
    for (var i in props) {
        if (hasOwnProperty.call(props, i)) {
            obj[i] = props[i];
        }
    }
    return obj;
}

/**
 * 继承类
 * @param SubClass
 * @param SupClass
 * @returns {Bridge}
 */
function inherit(SubClass, SupClass) {
    function Bridge() {}

    var orig = SubClass.prototype;
    Bridge.prototype = SupClass.prototype;
    var fn = SubClass.prototype = new Bridge();

    // 避免原型链拉长导致方法查找的性能开销
    extend(fn, orig);
    fn.constructor = SubClass;
    return fn;
}

module.exports = inherit;
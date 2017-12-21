'use strict';

// eslint-disable-next-line
function data() { /*
                                 _oo8oo_
                                o8888888o
                                88" . "88
                                (| -_- |)
                                0\  =  /0
                              ___/'==='\___
                            .' \\|     |// '.
                           / \\|||  :  |||// \
                          / _||||| -:- |||||_ \
                         |   | \\\  -  /// |   |
                         | \_|  ''\---/''  |_/ |
                         \  .-\__  '-'  __/-.  /
                       ___'. .'  /--.--\  '. .'___
                    ."" '<  '.___\_<|>_/___.'  >' "".
                   | | :  `- \`.:`\ _ /`:.`/ -`  : | |
                   \  \ `-.   \_ __\ /__ _/   .-` /  /
               =====`-.____`.___ \_____/ ___.`____.-`=====
                                 `=---=`
              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                         佛祖保佑         永无bug
*/ }

var BUGFREE = data.toString().split('\n').slice(1, -1).join('\n');


/**
 * 佛祖保佑，永无Bug
 * 图像来源于 https://github.com/ottomao/bugfreejs
 *
 * @param {Boolean} doNotOutput 设置为true时不自动打印，仅返回字符串
 * @return {String}
 */
function printBugFree(doNotOutput) {
    if(doNotOutput){
        return BUGFREE
    }

    console.log(BUGFREE)
}


module.exports = printBugFree;
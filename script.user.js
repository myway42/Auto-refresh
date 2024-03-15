// ==UserScript==
// @name         Auto refresh
// @name:zh-CN   自动刷新
// @description  Automatically refresh current page with required number of times.
// @description:zh-CN  自动刷新当前页面所需的次数。
// @namespace    myway42.auto-refresh
// @version      0.0.2
// @author       myway42
// @homepage     https://github.com/myway42/Auto-refresh
// @license      MIT
// @match        *://*/*
// @icon         https://cdn-icons-png.flaticon.com/512/2546/2546705.png
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
(function() {
    'use strict';
    let t = GM_getValue("refreshTime");
    if (!t) t = +prompt("Enter refresh times", "refresh times");
    if (!(typeof t === 'number' && t > 0)) return;
    t--;
    GM_setValue("refreshTime", t);
    window.location.reload();
})();

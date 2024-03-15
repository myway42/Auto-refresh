// ==UserScript==
// @name         Auto refresh
// @namespace    myway42.auto-refresh
// @version      0.0.1
// @description  Automatic refresh required number of times
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

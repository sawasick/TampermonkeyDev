// ==UserScript==
// @name         TampermonkeyDev
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  tampermonkeyスクリプトを開発してる時に対象のコードを追加する
// @author       sawasick
// @match        http*://*/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  // VSCodeのLiveServerでローカルホストのポート5500を起動する

  const targetFileName = "main.js";

  $("body").append(`<script src="http://127.0.0.1:5500/${targetFileName}"></script>`);
})();
// ==UserScript==
// @name         TampermonkeyDev
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  tampermonkeyスクリプトを開発してる時に対象のコードを追加する
// @author       sawasick
// @match        http*://*/*
// @grant        none
// ==/UserScript==

/*
ver 1.1
jQueryを使わない実装に変更
---
*/

(function () {
  "use strict";
  // VSCodeのLiveServerでローカルホストのポート5500を起動する

  const targetFileName = "main.js";

  const $newElement = document.createElement("script");
  $newElement.setAttribute("src", `http://127.0.0.1:5500/${targetFileName}`);
  document.body.appendChild($newElement);
})();

// ==UserScript==
// @name        Remove annoying video billboard from Netflix
// @match       https://www.netflix.com/browse
// @version     1
// @grant       none
// @author      Valentin Heidelberger
// @homepageURL valh.io
// @run-at      document-start
// ==/UserScript==

function removeBillboard() {
    var b = document.getElementsByClassName("billboard-row")
    b[0].remove()
}

removeBillboard()

// ==UserScript==
// @name        Modify YouTube logo link to subs
// @match       https://www.youtube.com/*
// @version     1
// @grant       none
// @author      Valentin Heidelberger
// @homepageURL valh.io
// ==/UserScript==

function modifyYTLogoLink(){
    var logo = document.querySelector('[title="YouTube Home"]');

    logo.setAttribute("href", "/feed/subscriptions");
}

window.addEventListener('spfdone', modifyYTLogoLink, false);
window.addEventListener('DOMContentLoaded', modifyYTLogoLink, false);
window.addEventListener('yt-navigate-finish', modifyYTLogoLink, false);

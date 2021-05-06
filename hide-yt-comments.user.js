// ==UserScript==
// @name        Hide YT comments
// @match       https://www.youtube.com/*
// @version     3
// @grant       none
// @author      Valentin Heidelberger
// @homepageURL valh.io
// ==/UserScript==

var hideText = "Hide";
var showText = "Show";

function hideComments(){
    var c = document.querySelectorAll("ytd-comments");

    if (c.length > 0 ) {
      c[0].style.setProperty("visibility", "hidden");
    }
}

function showComments(){
    var c = document.querySelectorAll("ytd-comments");

    if (c.length > 0 ) {
      c[0].style.setProperty("visibility", "visible");
    }
}

function addButtons(){
    hideComments();
    function getSpan(text, className) {
        var _tn = document.createTextNode(text);
        var span = document.createElement("span");
        span.className = className;
        span.appendChild(_tn);
        return span;
    };

    function createShowButton() {
        var obj = document.querySelector('#end>#buttons');
    //  window.alert("obj");
        if (obj !== null) {
            // check if the button has already been created
            var btnRow = document.getElementById('showCommentsDiv');
            if (btnRow === null) {
        //      window.alert("btnRow");
                var showCommentsDiv = document.createElement("div");
                showCommentsDiv.id = "showCommentsDiv";
                showCommentsDiv.className = "style-scope";

                var showCommentsBtn = document.createElement("div");
                showCommentsDiv.className = "style-scope showCommentsBtn";

                showCommentsDiv.style = "background-color: black; border: solid 2px black; border-radius: 2px; color: white; padding: 0px 15px; font-size: 14px; cursor:pointer; height:33px;margin-right: 7px;margin-top: 7px;line-height: 33px;font-weight: 500; display:inline-block;";

                showCommentsDiv.appendChild(getSpan(showText, ""));
                showCommentsDiv.onclick = showComments;

                obj.parentNode.insertBefore(showCommentsDiv, obj);
                showCommentsDiv.appendChild(showCommentsBtn);
            }
        }
    };

    function createHideButton() {
        var obj = document.querySelector('#end>#buttons');
    //    window.alert("obj");
        if (obj !== null) {
            // check if the button has already been created
            var btnRow = document.getElementById('hideCommentsDiv');
            if (btnRow === null) {
        //      window.alert("btnRow");
                var hideCommentsDiv = document.createElement("div");
                hideCommentsDiv.id = "hideCommentsDiv";
                hideCommentsDiv.className = "style-scope";

                var hideCommentsBtn = document.createElement("div");
                hideCommentsBtn.className = "style-scope hideCommentsBtn";

                hideCommentsBtn.style = "background-color: black; border: solid 2px black; border-radius: 2px; color: white; padding: 0px 15px; font-size: 14px; cursor:pointer; height:33px;margin-right: 7px;margin-top: 7px;line-height: 33px;font-weight: 500; display:inline-block;";

                hideCommentsBtn.appendChild(getSpan(hideText, ""));
                hideCommentsBtn.onclick = hideComments;

                obj.parentNode.insertBefore(hideCommentsDiv, obj);
                hideCommentsDiv.appendChild(hideCommentsBtn);
            }
        }
    };
    //window.alert("interval");
    //try multiple times to insert the button, because it might take some time for the sub button to load
    var intervalCheck = setInterval(function() {
        createHideButton();
        createShowButton();
    }, 250);
}

window.addEventListener('spfdone', addButtons, false);
window.addEventListener('DOMContentLoaded', addButtons, false);
window.addEventListener('yt-navigate-finish', addButtons, false);

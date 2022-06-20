let i = -1; //loop through terminal text
let lineNumber = 0; //what line the terminal is on
let terminalText = '';
const userAgent = navigator.userAgent;
const totalTerminalLines = 4;
const terminalTextID = "#terminal_text"; //id for the p tag to contain terminal text

$(document).ready(function () {
    const docHeight = $(document).height();
    $(terminalTextID).height(docHeight);
    getBrowserInfo();
    $("body").append("<div id='terminal_overlay'><p id='terminal_text'>&gt; </p><span class='terminal_cursor'>&#32; </span></div>");
    typeTerminalText();
});

//function gets browser info from navigator.userAgent
function getBrowserInfo() {
    let browser = '';
    let browserVersion = '';
    const chromeReg = /chrome|chromium|crios/i;
    const safariReg = /safari/i;
    const edgeReg = /edg/i;
    const firefoxReg = /firefox|fxios/i;
    const operaReg = /opr\//i;
    if (userAgent.match(chromeReg)) {
        browser = "Google Chrome";
        browserVersion = getBrowserVersion(chromeReg);
    } else if (userAgent.match(safariReg)) {
        browser = "Safari Apple";
        browserVersion = getBrowserVersion(safariReg);
    } else if (userAgent.match(edgeReg)) {
        browser = "Microsoft Edge";
        browserVersion = getBrowserVersion(edgeReg);
    } else if (userAgent.match(firefoxReg)) {
        browser = "Mozilla Firefox";
        browserVersion = getBrowserVersion(firefoxReg);
    } else if (userAgent.match(operaReg)) {
        browser = "Opera";
        browserVersion = getBrowserVersion(operaReg);
    } else {
        browser = "What Browser Is This?";
        browserVersion = "Version What?"
    }
    terminalText = browser + ' [Version ' + browserVersion + ']';

}

//function finds version of used browser
function getBrowserVersion(browserReg) {
    return (userAgent.split((userAgent.match(browserReg) + '/'))[1]).split(' ')[0];
}

//function types out text in terminal
function typeTerminalText() {
    if (lineNumber == 1) {
        terminalText = 'Website Created by Frederik Kjaergaard. All rights reserved.';
    } else if (lineNumber == 2 || lineNumber == 3) {
        terminalText = ' ';
    } else if (lineNumber == 4) {
        terminalText = 'start www.frederikkjaergaard.net';
    }

    if (i < terminalText.length) {
        setTimeout(function () {
            $(terminalTextID).get(0).innerHTML += terminalText.charAt(i) + "<span class='terminal_cursor'>&#32;</span>";
        }, 5);
        $(".terminal_cursor").remove();
        i++;
        setTimeout(typeTerminalText, 50);
    } else {
        setTimeout(function() {
            if (lineNumber < totalTerminalLines) {
                $(terminalTextID).append("<br>&gt; ");
                i = -1;
                lineNumber++;
                setTimeout(typeTerminalText(), 0); //setTimeout to wait for function to write everyhting
            }
        }, 1000);

        
    }
}
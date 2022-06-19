let i = -1;
let j = 0;
const terminalTextID = "#terminal_text";
let terminalText = '';
const userAgent = navigator.userAgent;

$(document).ready(function () {
    const docHeight = $(document).height();
    $(terminalTextID).height(docHeight);
    createTerminalText();
    $("body").append("<div id='terminal_overlay'><p id='terminal_text'>&gt; </p><span class='terminal_cursor'>&#32; </span></div>");
    typeText();
});

function createTerminalText() {
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

function getBrowserVersion(browserReg) {
    return (userAgent.split((userAgent.match(browserReg) + '/'))[1]).split(' ')[0];
}

function typeText() {
    if (i < terminalText.length) {
        setTimeout(function () {
            $(terminalTextID).get(0).innerHTML += terminalText.charAt(i) + "<span class='terminal_cursor'>&#32;</span>";
        }, 5);
        $(".terminal_cursor").remove();
        i++;
        setTimeout(typeText, 50);
    } else {
        setTimeout(function(){$(terminalTextID).append("<br>&gt; ")}, 400);
        setTimeout(function() {
            if (j < 2) {
                i = -1;
                console.log(j);
                j++;
                setTimeout(typeText(), 400);
            }
        }, 400);

        
    }
}
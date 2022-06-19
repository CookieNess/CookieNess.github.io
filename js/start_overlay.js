let i = -1;
const terminalTextID = "#terminal_text";
let terminalText = '';

$(document).ready(function () {
    const docHeight = $(document).height();
    $("body").append("<div id='terminal_overlay'><p id='terminal_text'>&gt;</p><span class='terminal_cursor'>&#32; </span></div>");
    $(terminalTextID).height(docHeight);
    createTerminalText();
    typeText();
    //$("#terminal_text").append("<p>Test</p>")
    //console.log(navigator.userAgent)
});

function createTerminalText() {
    let userAgent = navigator.userAgent;
    let browser = '';
    if (userAgent.match(/chrome|chromium|crios/i)) {
        browser = "Google Chrome";
        browserVersion = userAgent.match(/chrome|chromium|crios/i);
    } else if (userAgent.match(/safari/i)) {
        browser = "Safari Apple";
    } else if (userAgent.match(/edg/i)) {
        browser = "Microsoft Edge";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browser = "Mozilla Firefox";
    } else if (userAgent.match(/opr\//i)) {
        browser = "opera";
    } else {
        browser = "No browser detection";
    }
}

function typeText() {
    if (i < text.length) {
        setTimeout(function () {
            $(terminalTextID).get(0).innerHTML += text.charAt(i) + "<span class='terminal_cursor'>&#32;</span>";
        }, 5);
        $(".terminal_cursor").remove();
        i++;
        setTimeout(typeText, 50);
    }
}
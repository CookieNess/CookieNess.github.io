var i = 0;
var txt = 'Hello World';
var speed = 50;

$(document).ready(function() {
    var docHeight = $(document).height();

   $("body").append("<div id='overlay'><p id='text'>&gt;</p><span class='blink_cursor'>&#32; </span></div>");
   $("#overlay").height(docHeight);
      typeText();
    //console.log(navigator.userAgent)
});

function typeText() {
    if (i < txt.length) {
        $("#text").get(0).innerHTML += txt.charAt(i) + "<span class='blink_cursor'>&#32;</span>";
        $(".blink_cursor").remove();
        i++;
        setTimeout(typeText, speed);
    }
}
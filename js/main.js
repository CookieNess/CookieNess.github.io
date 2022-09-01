const skillArray = [
    {skill: "Java", level: 2},
    {skill: "SQL", level: 1},
    {skill: "Python", level: 2},
    {skill: "Dart", level: 0},
    {skill: "C#", level: 1},
    {skill: "HTML/CSS", level: 1},
    {skill: "JavaScript", level: 1},
]

let skillArrayElemID = [];
let skillArrayElemText = [];
let hasResized = false;

$(document).ready(function() {
    // TODO: Put all JS together in main function
    createSkillGrid($("#skillNameContainer"));
    $(window).on("load", function() { // Makes sure grid is loaded
        callFuncSkill($("#skillContainer"), skillArray);
        let timer;
        $(window).resize(function() { // Makes text regenerate when resizing window
            hasResized = true;
            clearTimeout(timer);
            $("#skillContainer").empty();
            timer = setTimeout(function() {
                hasResized = false;
                callFuncSkill($("#skillContainer"), skillArray);
            }, 100);
        });
    });
});

function createSkillGrid(container) {
    let firstArea = 2;
    let secondArea = 1;
    let thirdArea = 3;
    let fourthArea = 2;
    for (let i = 0; i < skillArray.length; i++) {
        var skillNameTag = $("<p>");
        skillNameTag.append("&gt; " + skillArray[i]['skill']);
        skillNameTag.addClass("skill_name");
        skillNameTag.css("grid-area", ""+ firstArea +" / "+ secondArea +" / "+ thirdArea +" / "+ fourthArea +"");
        container.append(skillNameTag);
        firstArea++;
        thirdArea++;
    }
}

function callFuncSkill(container, skillArray) {
    let skillLineNumber = 0;
    for (const key in skillArray) {
       skillLineNumber++;
       addSkillLevel(container, skillArray[key]['level'], skillLineNumber);
    }
    for (let i = 1; i < skillArrayElemID.length; i++) {
        $("#skillTextWidth" + i).empty();
        typeText(skillArrayElemID[i], skillArrayElemText[i], -1)
    }
}

function typeText(textID, text, i) { // General function to create typing animation
    if (i < text.length) {
        if (hasResized) {
            return;
        } else {
            setTimeout(function () {
                $(textID).get(0).innerHTML += text.charAt(i) + "<span class='terminal_cursor'>&#32;</span>";
            }, 5);
            $(".terminal_cursor").remove();
            i++;
            setTimeout(typeText, 40, textID, text, i);
        }
    }
}

function addSkillLevel(container, level, skillLineNumber) {
    let counter = 0;
    let text = "helloworld";
    container.append("<p><span id='skillTextWidth" + skillLineNumber + "'></span></p>");
    let widthOfContainer = 0;
    switch (level) {
        case 0:
            widthOfContainer = $(container).width() - 
                (($(container).width() / 3 + ($(container).width() / 3) + ($(container).width() / 3) / 2));
            break;
        case 1:
            widthOfContainer = $(container).width() - 
                (($(container).width() / 3 + ($(container).width() / 3) / 2));
            break;
        case 2:
            widthOfContainer = $(container).width() - 
                (($(container).width() / 3) / 2);
            break;
    }

    for (let i = 0; i < text.length; i++) {
        $("#skillTextWidth" + skillLineNumber).get(0).innerHTML += text.charAt(i);
        widthOfSpan = $("#skillTextWidth" + skillLineNumber).width();
        if (counter > 1000) {
            console.error("Counter overflow");
            break;
        }
        if (widthOfSpan >= widthOfContainer) {
            skillArrayElemID[skillLineNumber] = "#skillTextWidth" + skillLineNumber;
            skillArrayElemText[skillLineNumber] = $("#skillTextWidth" + skillLineNumber).text();
            break;
        } else if (i+1 >= text.length) {
            i = -1;
        }
        counter++;
    }
}

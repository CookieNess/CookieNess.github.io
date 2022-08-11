$(document).ready(function() {
    // TODO: Put all JS together in main function
    const skillArray = [
        {skill: "Java", level: 2},
        {skill: "Python", level: 2},
        {skill: "SQL", level: 1},
        {skill: "C#", level: 1},
        {skill: "HTML/CSS", level: 1},
        {skill: "JavaScript", level: 1},
        {skill: "Dart", level: 0}
    ]
    $(window).on("load", function() { // Makes sure grid is loaded
        let skillLineNumber = 0;
         for (const key in skillArray) {
            skillLineNumber++;
            addSkillLevel($("#skillContainer"), skillArray[key]['level'], skillLineNumber);
        }
    });
});

function addSkillLevel(container, level, skillLineNumber) {
    let counter = 0;
    let text = "helloworld";
    container.append("<p><span id='width" + skillLineNumber + "'></span></p>");
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
    console.log(($(container).width() / 3));
    console.log("Container: " + widthOfContainer);
    for (let i = 0; i < text.length; i++) {
        $("#width" + skillLineNumber).get(0).innerHTML += text.charAt(i);
        widthOfSpan = $("#width" + skillLineNumber).width();
        if (counter > 1000) {
            console.error("Counter overflow");
            break;
        }
        if (widthOfSpan >= widthOfContainer) {
            break;
        } else if (i+1 >= text.length) {
            i = -1;
        }
        counter++;
    }
}



$(document).ready(function() {
    const jobsList = '#jobsList';
    const jobTitle = '#jobTitle';
    const jobDuration = '#jobDuration'
    const listItemOne = '#listItemOne';
    const listItemTwo = '#listItemTwo';
    const listItemThree = '#listItemThree';
    addJobsList(jobsList);
    changeJobDesc(jobsList, jobTitle, jobDuration, listItemOne, listItemTwo, listItemThree);
});

function addJobsList(jobsList) {
    console.log($(jobsList).innerHTML);
    const jobNames = ["Sneholt & Nilsen", "Reinhardt Dans"];
    jobNames.forEach(name => {
        $(jobsList).append("<div>" + name + "</div>");
    });
}

function changeJobDesc(jobsList, jobTitle, jobDuration, listItemOne, listItemTwo, listItemThree) {
    $(jobsList).children('div').click(function() {
        $(this).parent().find('.job_active').removeClass('job_active');
        $(this).addClass('job_active');
        emptyJobDesc(jobTitle, jobDuration, listItemOne, listItemTwo, listItemThree);
        switch($(this).text()) {
            case "Sneholt & Nilsen":
                $(jobTitle).append(
                    `it_support.at(
                        "<a href="https://sneholt-nilsen.dk/">Sneholt & Nilsen</a>"
                        );`
                    );
                $(jobDuration).append(
                    'Jan. 2020 &rarr; Jul. 2021'
                );
                $(listItemOne).append('Setup of basic website using WordPress and CSS');
                $(listItemTwo).append('Setup of email-system, after converting from local server to cloud');
                $(listItemThree).append("General Help with IT (setup of PC's, fixing internet problems, etc.)");
                break;
            case "Have & Livsstil":
                $(jobTitle).append(
                    `it_support.at(
                        "<a href="https://haveoglivsstil.dk/">Have & Livsstil</a>"
                        );`
                    );
                $(jobDuration).append(
                    'Jan. 2019 &rarr; Apr. 2020'
                );
                $(listItemOne).append('Setup of basic website with web-shop using WordPress and CSS');
                $(listItemTwo).append('General maintenance of the website');
                $(listItemThree).append("Other various IT tasks (Setup of PC's, mild database maintenance, etc.)");
                break;
            case "Reinhardt Dans":
                $(jobTitle).append(
                    `website_developer.at(
                        "<a href="https://reinhardtdans.dk/">Reinhardt Dans</a>"
                        );`
                    );
                $(jobDuration).append(
                    'May 2021 &rarr; Jan. 2022'
                );
                $(listItemOne).append('Setup of full website using WordPress, CSS and JS');
                $(listItemTwo).append('Customize website to fit customer need');
                $(listItemThree).append("Maintenance of website");
                break;
        }
    });
}

function emptyJobDesc(jobTitle, jobDuration, listItemOne, listItemTwo, listItemThree) {
    $(jobTitle).empty();
    $(jobDuration).empty();
    $(listItemOne).contents().remove();
    $(listItemTwo).contents().remove();
    $(listItemThree).contents().remove();
}
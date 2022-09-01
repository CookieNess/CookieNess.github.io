$(document).ready(function() {
    jobHeaderID = "#jobHeader";
    jobTimeID = "#jobTime";
    jobDescID = "#jobDesc";
    techID = "#techHeader";
    techListOneID = "#techList1";
    techListTwoID = "#techList2";
    experienceDesc = "#experienceDesc";
    haveliv = "#haveliv";
    sneholt = "#sneholt";
    reinhardt = "#reinhardt";
    addStartJobDesc(jobHeaderID, jobTimeID, jobDescID, techID, techListOneID, techListTwoID);
    $("#experienceNameColumn").click(function(event) {
        if(event.target.id == "haveliv") {
            $("#experienceNameColumn").find(".job_selected").removeClass("job_selected");
            $("#experienceNameColumn").find(haveliv).addClass("job_selected");
            emptyJobDesc(jobHeaderID, jobTimeID, jobDescID, techID, techListOneID, techListTwoID);
            $(jobHeaderID).append("IT Support _ <a href='https://haveoglivsstil.dk/'>Have & Livsstil ApS</a>");
            $(jobTimeID).append("Jan. 2019 _ Apr. 2020");
            desc = `<ul>
                        <li>&nbsp; Setup of basic website, including webshop</li>
                        <li>&nbsp; General maintenance of the website</li>
                        <li>&nbsp; Other various IT tasks 
                            <ul>
                                <li>&nbsp; Setting automated responds to emails</li>
                                <li>&nbsp; Setup of PC's</li>
                                <li>&nbsp; Mild database maintenance</li>
                            </ul>
                        </li>
                    </ul>
                    `
            $(jobDescID).append(desc);
            $(techID).append("<span class='highlight'>Technologies used</span>: ");
            $(techListOneID).append(`<ul>
                                        <li>&nbsp; Wordpress</li>
                                        <li>&nbsp; CSS</li>
                                    </ul>`);
            $(techListTwoID).append(`<ul>
                                    <li>&nbsp; PHP</li>
                                </ul>`);
        } else if(event.target.id == "sneholt") {
            $("#experienceNameColumn").find(".job_selected").removeClass("job_selected");
            $("#experienceNameColumn").find(sneholt).addClass("job_selected");
            emptyJobDesc(jobHeaderID, jobTimeID, jobDescID, techID, techListOneID, techListTwoID);
            $(jobHeaderID).append("IT Support _ <a href='https://sneholt-nilsen.dk/'>Sneholt & Nilsen A/S</a>");
            $(jobTimeID).append("Jan. 2020 _ Jul. 2021");
            desc = `<ul>
                        <li>&nbsp; Setup of basic website</li>
                        <li>&nbsp; Setup of email-system</li>
                        <li>&nbsp; General help with IT 
                            <ul>
                                <li>&nbsp; Setup of PC's</li>
                                <li>&nbsp; Fix internet problems, etc.</li>
                            </ul>
                        </li>
                    </ul>
                    `
            $(jobDescID).append(desc);
            $(techID).append("<span class='highlight'>Technologies used</span>: ");
            $(techListOneID).append(`<ul>
                                        <li>&nbsp; Wordpress</li>
                                        <li>&nbsp; CSS</li>
                                    </ul>`);
            $(techListTwoID).append(`<ul>
                                    <li>&nbsp; JavaScript</li>
                                </ul>`);
        } else if(event.target.id == "reinhardt") {
            $("#experienceNameColumn").find(".job_selected").removeClass("job_selected");
            $("#experienceNameColumn").find(reinhardt).addClass("job_selected");
            emptyJobDesc(jobHeaderID, jobTimeID, jobDescID, techID, techListOneID, techListTwoID);
            $(jobHeaderID).append("Website Developer _ <a href='https://reinhardtdans.dk/'>Reinhardt Dans ApS</a>");
            $(jobTimeID).append("May. 2021 _ Jan. 2022");
            desc = `<ul>
                        <li>&nbsp; Setup of full website</li>
                        <li>&nbsp; Customize website to fit customer need</li>
                        <li>&nbsp; Maintenance of website</li>
                    </ul>
                    `
            $(jobDescID).append(desc);
            $(techID).append("<span class='highlight'>Technologies used</span>: ");
            $(techListOneID).append(`<ul>
                                        <li>&nbsp; Wordpress</li>
                                        <li>&nbsp; CSS</li>
                                    </ul>`);
            $(techListTwoID).append(`<ul>
                                    <li>&nbsp; JavaScript</li>
                                    <li>&nbsp; PHP</li>
                                </ul>`);
        }
    });
});

function addStartJobDesc(jobHeaderID, jobTimeID, jobDescID, techID, techListOneID, techListTwoID) {
    $(jobHeaderID).append("IT Support _ <a href='https://haveoglivsstil.dk/'>Have & Livsstil ApS</a>");
    $(jobTimeID).append("Jan. 2019 _ Apr. 2020");
    desc = `<ul>
                <li>&nbsp; Setup of basic website, including webshop</li>
                <li>&nbsp; General maintenance of the website</li>
                <li>&nbsp; Other various IT tasks 
                    <ul>
                        <li>&nbsp; Setting automated responds to emails</li>
                        <li>&nbsp; Setup of PC's</li>
                        <li>&nbsp; Mild database maintenance</li>
                    </ul>
                </li>
            </ul>
            `
    $(jobDescID).append(desc);
    $(techID).append("<span class='highlight'>Technologies used</span>: ");
    $(techListOneID).append(`<ul>
                                <li>&nbsp; Wordpress</li>
                                <li>&nbsp; CSS</li>
                            </ul>`);
    $(techListTwoID).append(`<ul>
                            <li>&nbsp; PHP</li>
                        </ul>`);
}

function emptyJobDesc(jobHeaderID, jobTimeID, jobDescID, techID, techListOneID, techListTwoID) {
    $(jobHeaderID).empty();
    $(jobTimeID).empty();
    $(jobDescID).empty();
    $(techID).empty();
    $(techListOneID).empty();
    $(techListTwoID).empty();
}
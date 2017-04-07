/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Ishwarya Valluri",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "123456789",
        "email": "example@email.com",
        "twitter": "@Ishwarya",
        "github": "IshwaryaValluri",
        "location": "Sunnyvale, CA"
    },
    "welcomeMessage": "Hi, welcome to my online resume",
    "skills": ["JavaScript", "html", "css", "jQuery"],
    "biopic": "images/profile.jpg"
};

var work = {
    "jobs": [{
        "employer": "Wipro Technologies",
        "title": "Software Engineer",
        "location": "Hyderabad, India",
        "dates": "2008 - 2012",
        "description": "Over 5+ years of IT experience in testing Web-based and Client-Server applications on different environments. Developed and executed test plans and test cases."
    }]
};

var education = {
    "schools": [{
        "name": "CBIT",
        "location": "Hyderabad, India",
        "degree": "Bachelor of engineering",
        "dates": "2004 - 2007",
        "majors": ["Computer science"]
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "Feb 2017",
        "url": "www.udacity.com"
    }]
};

var projects = {
    "projects": [{
            "title": "Health Care Information System(ESIC)",
            "dates": "2011 - 2012",
            "description": "Employee State Insurance Corporation(ESIC) is one of the largest Insurance Corporations in India, which provides healthcare facility to all Insured patients. As part of ESIC plans to automate all departments and implement an Integrated Health Information System at ESIC Hospitals for medical services offered to patients.",
            "images": []
        },
        {
            "title": "Microsoft Localization",
            "dates": "2010 - 2011",
            "description": "Office 2010 will be released into market in 37 Languages along with English. Testing of Localized Office applications with English as Reference and reporting the defects in Product Studio.",
            "images": []
        },
        {
            "title": "Customer Relationship Management (CRM)",
            "dates": "2008 - 2009",
            "description": " CRM is a multi-lingual Customer Relationship Management software package developed by Microsoft. It is a server-client application, which, like Microsoft SharePoint, is primarily an IIS-based web application which also supports extensive web services interfaces. Clients access Dynamics CRM either by using Microsoft Internet Explorer 6 or later web browser or by a thick client plug-in to Microsoft Outlook.",
            "images": ["images/crm.jpg", "images/crm2.jpg"]
        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var idStrings = ["#topContacts", "#footerContacts"];
    for (var i = 0, id; i < idStrings.length; i++) {
        id = idStrings[i];
        $(id).append(formattedMobile);
        $(id).append(formattedEmail);
        $(id).append(formattedTwitter);
        $(id).append(formattedGit);
        $(id).append(formattedLocation);

    }
    $("#header").append(formattedMessage);
    $("#header").append(formattedPic);
    $("#header").append(HTMLskillsStart);

    for (var j = 0; j < bio.skills.length; j++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[j]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();

work.display = function() {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        // concat employer and title
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedworkLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var i = 0; i < projects.projects.length; i++) {
            // create new div for projects
            $("#projects").append(HTMLprojectStart);
            var formattedproTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedproTitle);
            var formattedproDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedproDates);
            var formattedproDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedproDescription);
            if (projects.projects[i].images.length > 0) {
                for (var k = 0; k < projects.projects[i].images.length; k++) {
                    var formattedproImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[k]);
                    $(".project-entry:last").append(formattedproImages);
                }
            }
        }
    }
};
projects.display();

education.display = function() {
    // create new div for education
    $("#education").append(HTMLschoolStart);
    for (i = 0; i < education.schools.length; i++) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        //concat school name and degree
        $(".education-entry:last").append(formattedName + formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedMajor);
    }

    $("#education").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
        $("#education").append(HTMLschoolStart);
        var formattedonTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        var formattedonSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        //concat online class title and school
        $(".education-entry:last").append(formattedonTitle + formattedonSchool);
        var formattedonDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
        $(".education-entry:last").append(formattedonDates);
        var formattedonUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
        $(".education-entry:last").append(formattedonUrl);
    }
};
education.display();
// create new div for Map
$("#mapDiv").append(googleMap);
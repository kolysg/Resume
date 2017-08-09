//This resumeBuilder includes resume-sections of bio, work, projects and education. At the end, this also includes googlemap links of locations lived and worked.
//bio
var bio = {
    "name": "Koly Sengupta",
    "role": "Front End Developer/Designer",
    "contacts": {
        "email": "koly.sg@gmail.com",
        "mobile": "979-000-7575",
        "twitter": "KolySG",
        "github": "kolysg",
        "location": "San Francisco, California"

    },
    "biopic": "images/koly.jpg",
    //"pic": "https://scontent-ord1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/11390120_10207208987806072_75049282207992131_n.jpg?oh=d2f2e7b4e70a341e6a14c3cad9943ab0&oe=568D812F",
    "welcomeMessage": "Thanks for visitng my page. If you like my work and think I can be a good fit, please contact me in the address provided.",
    //"skills": ["Inquisitive", "Persistent", "Agile", "Pixel-perfectionist"]
    "skills": ["Javascript", "Python", "Ruby", "AJAX", "HTML5", "CSS3", "Adobe CreativeSuit", "CorelDraw", "GIS"]

};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedPhone);
    $("#footerContacts").append(formattedPhone);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

    var formattedTwit = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwit);
    $("#footerContacts").append(formattedTwit);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").append(formattedPic);

    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);



    //SkillSet for-in method
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};
bio.display();


//Work Experience
var work = {
    "jobs": [{
        "title": "Web Developer",
        "employer": "Yellow Labs Inc.",
        "dates": "October 2016 - March 2017",
        "location": "San Francisco, CA",
        "description": "Review Jira tickets to resolve any UI issues of the application. Zapier Integration: Create 'Action' and 'Target' for other applications to successfully post data inside our server using Zapier. The backend coding is done in vanilla javascript (ajax requests) that Zapier platform allows. Login page improvement in AngularJS, adding new features that help users on the front-end side. Deploy any updates on the production server (Heroku) and Git. Update single threaded website style's using HTML, CSS & Jquery, Create marketing materials (email newsletters) in Zoho CRM. Create documentation inside Atlassian."
    },
    {
        "title": "UX/UI Designer",
        "employer": "Kendig Keast Collaborative (EnCodePlus LLC)",
        "dates": "February 2014 - November 2014",
        "location": "SugarLand, TX",
        "description": "Provided technical support in planning, development, and maintenance of the company’s unique online code publishing site- ‘encodePlus.com’. Managed data in FTP server and provided QA/QC support for the front-end codebase.Built Design Mockups, Prototypes & Wireframes in  Photoshop, Illustrator, and InDesign collaborating with the developers. Collaborated with the city staff members for the successful online integration of municipal codes into the system; provided code-editing, codification, and quality control/quality assurance support. Received training on Project Management with Salesforce, incorporating ESRI GIS map in the web platform and web based Land Use Calculators in the software system. Collaborated with the marketing team by creating, reviewing, publishing marketing and branding products (booklets, web pages, posters etc.), and publishing emails to the large audience using Mandrill & MailChimp system." 
    }, {
        "title": "Planning Intern",
        "employer": "City of Bryan",
        "dates": "August 2012 - December 2012",
        "location": "Bryan, TX",
        "description": "Developed the City’s first GIS database for the city’s Tax Increment Reinvestment Zones (TIRZ). Recorded minutes, prepared presentations, organized offical documents for regular ‘Planning Commission’ and ‘Historic Landmark Commission’ meetings. Attended Site Review meetings, assisted in occasional site visits."
    }, {
        "title": "Associate Architect",
        "employer": "Alpha Real Estate",
        "dates": "January 2010 - September 2011",
        "location": "Chittagong, Bangladesh",
        "description": "Developed architectural designs for two residential apartment projects in Dhaka, Bangladesh. Attended regular site visits, client meetings, managed site developers. Prepared and managed official drawings and documents."
    }]
};

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedEmploymentDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedEmploymentDates);
        var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedJobLocation);
        var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedJobDescription);
    }
};
work.display();

//Education
var education = {
    "schools": [{
        "name": "Texas A&M University",
        "location": "College Station, TX, US",
        "degree": "Master's",
        "major": ["Urban & Regional Planning"],
        "dates": "2013"
    }, {
        "name": "Bangladesh University of Engineering and Technology",
        "location": "Dhaka, Bangladesh",
        "degree": "Bachelor's",
        "major": ["Architecture"],
        "dates": "2008"
    }],
    "onlineCourses": [
        {
            "title": "Structured Study in JS",
            "school": "Hack Reactor",
            "dates": "2017 - 2017",
            "url": "https://www.hackreactor.com"
        },

        {
            "title": "Front End Development Nanodegree",
            "school": "Udacity",
            "dates": "2015 - 2017",
            "url": "https://www.udacity.com"
        },

        {
            "title": "Human Computer Interaction",
            "school": "Coursera",
            "dates": "2016 - 2016",
            "url": "https://www.coursera.com"
        },

        {
            "title": "Introduction to Computer Science",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com"
        },

        {
            "title": "Introduction to programming in Python (Part 1)",
            "school": "Coursera - Rice University",
            "dates": 2014,
            "url": "https://www.coursera.org/course/interactivepython1"
        },

        {
            "title": "Programming Foundations with Python",
            "school": "Udacity",
            "dates": 2014,
            "url": "https://www.udacity.com"
        },

        {
            "title": "How to use Git and Github",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com"
        }
    ]
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchool = formattedName + formattedDegree;
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedschoolLocation);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolMajor);
    }

    //online courses
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedonlineCourse = formattedonlineTitle + formattedonlineSchool;
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedonlineCourse);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineUrl);
    }
};
education.display();

//Projects
var projects = {

    "projects": [{
            "title": "Online Portfolio",
            "date": "August - Sept 2015",
            "description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework.The page is fully responsive and works on mobile, tablet, and desktop browsers.",
            "images": ["images/Capture_portfolio.jpg"],
            "alt": "image of portfolio",
            "URL": "https://github.com/kolysg/FEND_Udacity/tree/master/Portfolio"

        },

        /*{
        	"title" : "Online Resume",
        	"date" :"Sept - Oct 2015",
        	"description" :"Developed this personal resume page using Javascript and Jquery.",
        	"images" : [""],
        	"alt": "image of resume",
        	"URL":"https://github.com/kolysg/FEND_Udacity/tree/master/Online%20Resume"
        },*/

        {
            "title": "Pong Game in Python",
            "date": "Sept - Oct 2014",
            "description": "Developed a Pong game using key events in Python.",
            "images": ["images/Pong_game.PNG"],
            "alt": "image of Pong Game",
            "URL": "http://www.codeskulptor.org/#user40_6Q0bID6XeV_0.py"
        },

        {
            "title": "Stop Watch in Python",
            "date": "Sept - Oct 2014",
            "description": "Developed a Stop Watch exploring different event handlers in Python.",
            "images": ["images/Stop_watch.PNG"],
            "alt": "image of Stop Watch",
            "URL": "https://github.com/kolysg/Python/blob/master/Stopwatch.py"
        }
    ]
};

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        $(".project-entry:last").append(formattedProjectDate);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images).replace('%datum%', projects.projects[project].alt).replace("%url%", projects.projects[project].URL);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
        //var formattedProjectURL = HTMLprojectURL.replace("%data%", projects.projects[project].URL);
        //$(".project-entry:last").append(formattedProjectURL);
    }
};
projects.display();


//Locationizer
//function locationizer(work){
//	var locationArray = [];
//	for (job in work.jobs){
//		var newLocation = work.jobs[job].location;
//		locationArray.push(newLocation);
//	}
//	return locationArray;	
//}

//Internationalize
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

$("#header").prepend(internationalizeButton);
$("#mapDiv").append(googleMap);
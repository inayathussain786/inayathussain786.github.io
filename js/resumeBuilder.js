var bio = {
	"name" : "Syed Inayat Hussain",
	"role" : "Full Stack Web Developer",
	"contacts" : {
		"mobile" : "919804568727",
		"email" : "sih.25011993@gmail.com",
		"github" : "https://github.com/inayathussain786",
		"location" : "India"
	},
	"welcomeMsg" : "Welcome to Udacity",
	"skills" : ["HTML","CSS","JavaScript","JQuery","Python","Bootstrap"],
	"biopic" : "images/inu.jpg"
};

var education = {
	"schools" : [
		{
			"name" : "BRS",
			"location" : "Asansol",
			"degree" : "AISSE",
			"majors" : ["GENERAL"],
			"dates" : "2009",
			"url" : "http://www.abcd.com"
		},
		{
			"name" : "BRS",
			"location" : "Asansol",
			"degree" : "AISSCE",
			"majors" : ["SCIENCE"],
			"dates" : "2011",
			"url" : "http://www.abcd.com"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Crash Course",
			"school" : "Udacity",
			"dates" : 2017,
			"url" : "http://www.udacity.com"
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer": "Udacity",
			"title": "Course Developer",
			"location": "Mountain View, CA",
			"dates": "Feb 2014 - Current",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "LearnBIG",
			"title": "Software Engineer",
			"location": "Seattle, WA",
			"dates": "May 2013 - Jan 2014",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "LEAD Academy Charter High School",
			"title": "Science Teacher",
			"location": "Nashville, TN",
			"dates": "Jul 2012 - May 2013",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "Stratford High School",
			"title": "Science Teacher",
			"location": "Nashville, TN",
			"dates": "Jun 2009 - Jun 2012",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "Who moved my cheese???",
			"images" : [
				"https://github.com/inayathussain786/movies-website",
				"https://github.com/inayathussain786/blog-website"
			]
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);

var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

$("#header").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

$("#header").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").append(formattedLocation);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);

$("#header").append(formattedbioPic);

function displayBio() {
	if(bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);

		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);

		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);

		$("#skills").append(formattedSkill);
	}
}

function displayEducation() {
	for(var school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);

		$(".education-entry:last").append(formattedSchoolDate);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

		$(".education-entry:last").append(formattedSchoolMajor);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

		$(".education-entry:last").append(formattedSchoolLocation);
	}
	for(var course in education.onlineCourses) {

		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

		var formattedTitleSchool = formattedTitle + formattedSchool;

		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);

		$(".education-entry:last").append(formattedDate);

		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(formattedOnlineUrl);
	}
}

function displayWork() {
	for(var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedDescription);
	}
}

projects.display = function() {
	for(var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for(var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

displayBio();
displayEducation();
displayWork();
projects.display();

$("#mapDiv").append(googleMap);
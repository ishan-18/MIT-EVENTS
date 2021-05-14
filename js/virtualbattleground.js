// [valo, cod, chess]
let ALLRULES = [
	[
		"TEAMS OF 5 PLAYERS",
		"WINNERS STAY",
		"REFRAIN FROM USING FOUL LANGUAGE. DEFAULTERS WILL BE DISQUALIFIED",
		"IF A PLAYER GOES AKF FOR MORE THAN 10 MINUTES, THEN THE TEAM WILL BE DISQUALIFIED",
		"STATE LEVEL CERTIFICATES WILL BE GIVEN TO WINNERS AND FIRST RUNNERS UP",
		"PARTITION CERTIFICATES WILL ALSO BE GIVEN",
	],
	[
		"SOLO AND SQUAD OF 4",
		"BATTLE ROYAL, NOT MULITPLAYER 5V5",
		"20 SQUADS WILL PARTICIPATE IN A MATCH",
		"REFRAIN FROM USING FOUL LANGUAGE. DEFAULTERS WILL BE DISQUALIFIED",
		"IF A PLAYER GOES AKF FOR MORE THAN 10 MINUTES, THEN THE TEAM WILL BE DISQUALIFIED",
		"STATE LEVEL CERTIFICATES WILL BE GIVEN TO WINNERS AND FIRST RUNNERS UP",
		"PARTITION CERTIFICATES WILL ALSO BE GIVEN",
	],
	[
		"PLATFORM FOR THE GAME WILL BE - LICHESS",
		"IF PLAYER IS OFFLINE FOR MORE THAN 180 SECONDS THEN THE PLAYER",
		"TIME LIMIT OF ONE MATCH WILL BE 10 MINUTES. IF MATCH DOES NOT END BY THEN, THE PLAYER WITH GREATER POINTS WILL BE DECLARED AS THE WINNER",
		"STRICTLY REFRAIN FROM USING FOUL LANGUAGE/OFFENSIVE WORDS DURING THE MATCH",
		"E-CERTIFICATES OF STATE LEVEL WILL BE GIVEN TO THE WINNERS",
		"PARTICIPATION CERTIFICATES WILL BE GIVEN AS WELL",
	],
];

function openRulesModal(gameNumber) {
	let rules = ALLRULES[gameNumber];
	let all_rules = "";

	rules.forEach((rule) => {
		all_rules += `<li>${rule}</li>`;
	});

	document.getElementById("rules").innerHTML = all_rules;
	document.getElementById("my-modal").style.display = "block";

	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	(scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
		// if any scroll is attempted, set this to the previous value
		(window.onscroll = function () {
			window.scrollTo(scrollLeft, scrollTop);
		});
}

function closeRulesModal() {
	window.onscroll = function () {};
	document.getElementById("my-modal").style.display = "none";
}

function openRegistrationForm() {
	open("https://forms.gle/aWwPgj5rdZ52BzDx6");
}

let people = [
	{
		name: "Niranjan Zunjur",
		branch: "TYME",
		designation: "Sports Secetary",
	},
	{
		name: "Deepak Shivtare",
		branch: "TYIF",
		designation: "Joint Sports Secretary  ",
	},
	{
		name: "Pratiksha Alhat",
		branch: "TYCE",
		designation: "Ladies Sports Secretary  ",
	},
	{
		name: "Maithili Jagdale",
		branch: "TYIF",
		designation: "Member",
	},
	{
		name: "Viraj Memane",
		branch: "TYEJ",
		designation: "Member",
	},
	{
		name: "Pranita Mohite",
		branch: "TYEJ",
		designation: "Member",
	},
	{
		name: "Sandhya sonkamble",
		branch: "TYIF",
		designation: "Member",
	},
	{
		name: "Yash Bansude",
		branch: "TYME",
		designation: "Member",
	},
	{
		name: "Harsh Bokil",
		branch: "TYME",
		designation: "Member",
	},
	{
		name: "Aakash Yeola",
		branch: "SYCO",
		designation: "Member",
	},
	{
		name: "Gayatri Relekar",
		branch: "SYEJ",
		designation: "Member",
	},
	{
		name: "Suhani Chaudhari",
		branch: "SYCO",
		designation: "Member",
	},
	{
		name: "Sakshi Kamble",
		branch: "SYME",
		designation: "Member",
	},
	{
		name: "Aditya Solanki",
		branch: "SYCO",
		designation: "Member",
	},
	{
		name: "Harshvardhan Khairnar",
		branch: "SYCO",
		designation: "Member",
	},
	{
		name: "Pranav Chaudhari",
		branch: "SYME",
		designation: "Member",
	},
	{
		name: "Aniruddha Dangat",
		branch: "SYCE",
		designation: "Member",
	},
	{
		name: "Sakshi Chaudhari",
		branch: "FYIF",
		designation: "Member",
	},
];

allPeople = "";
people.forEach((person) => {
	allPeople += `
	<div class="person">
		<h6>${person.name}</h6>
		<p>${person.branch} - ${person.designation}</p>
	</div>
	`;
});
console.log("Adding ppl");
document.getElementById("spg").innerHTML = allPeople;

document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".sidenav");
	var instances = M.Sidenav.init(elems);
});

M.autoInit();

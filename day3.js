M.AutoInit();

const contentInfo = [
	{
		gameName: "VALORANT",
		characterImgPath: "/assets/All/Sova.png",
		absText: '"ONE MORE WIN AND WE\'RE GOING OUT FOR DRINKS, LADS."',
		description:
			"Valorant is a team-based tactical shooter and first-person shooter set in the near future. Players play as one of a set of agents, characters designed based on several countries and cultures around the world.",
		image1Path: "/assets/All/valoLogo.jpg",
		image2Path: "/assets/All/absbg2.jpg",
		registrationInfo: [
			{
				category: "Squad",
				amount: 250,
			},
		],
		winnerAmount: 3000,
		runnerUpAmount: 1500,
		rules: [
			"TEAMS OF 5 PLAYERS",
			"WINNERS STAY",
			"REFRAIN FROM USING FOUL LANGUAGE. DEFAULTERS WILL BE DISQUALIFIED",
			"IF A PLAYER GOES AKF FOR MORE THAN 10 MINUTES, THEN THE TEAM WILL BE DISQUALIFIED",
			"STATE LEVEL CERTIFICATES WILL BE GIVEN TO WINNERS AND FIRST RUNNERS UP",
			"PARTITION CERTIFICATES WILL ALSO BE GIVEN",
		],
	},
	{
		gameName: "COD-Mobile",
		fontSize: 110,
		characterImgPath: "/assets/All/CODcharacter.png",
		absText: '"ONE MORE WIN AND WE\'RE GOING OUT FOR DRINKS, LADS."',
		description:
			"Call of Duty: Mobile is a free-to-play shooter video game. With modes like battle royale, multiplayer, classic. The game also includes battle royale modes featuring up to 100 players. A player can choose to play alone, on a two-man team, or in a four-man squad.",
		image1Path: "/assets/All/CODlogo.jpeg",
		image2Path: "/assets/All/CODImg2.jpg",
		registrationInfo: [
			{
				category: "Squad",
				amount: 200,
			},
			{
				category: "Solo",
				amount: 50,
			},
		],
		winnerAmount: 3000,
		runnerUpAmount: 1500,
		rules: [
			"SOLO AND SQUAD OF 4",
			"BATTLE ROYAL, NOT MULITPLAYER 5V5",
			"20 SQUADS WILL PARTICIPATE IN A MATCH",
			"REFRAIN FROM USING FOUL LANGUAGE. DEFAULTERS WILL BE DISQUALIFIED",
			"IF A PLAYER GOES AKF FOR MORE THAN 10 MINUTES, THEN THE TEAM WILL BE DISQUALIFIED",
			"STATE LEVEL CERTIFICATES WILL BE GIVEN TO WINNERS AND FIRST RUNNERS UP",
			"PARTITION CERTIFICATES WILL ALSO BE GIVEN",
		],
	},
	{
		gameName: "CHESS",
		characterImgPath: "/assets/All/chessCharacter.png",
		absText: '"CHESS IS EVERYTHING: ART SCIENCE SPORT"',
		description:
			"Chess is a recreational and competitive board game played between two players. It is sometimes called Western or international chess to distinguish it from related games such as xiangqi.",
		image1Path: "/assets/All/chessimg1.jpg",
		image2Path: "/assets/All/chessimg2.jpg",
		winnerAmount: 1500,
		runnerUpAmount: 1000,
		registrationInfo: [
			{
				category: "Solo",
				amount: 30,
			},
		],
		rules: [
			"PLATFORM FOR THE GAME WILL BE - LICHESS",
			"IF PLAYER IS OFFLINE FOR MORE THAN 180 SECONDS THEN THE PLAYER",
			"TIME LIMIT OF ONE MATCH WILL BE 10 MINUTES. IF MATCH DOES NOT END BY THEN, THE PLAYER WITH GREATER POINTS WILL BE DECLARED AS THE WINNER",
			"STRICTLY REFRAIN FROM USING FOUL LANGUAGE/OFFENSIVE WORDS DURING THE MATCH",
			"E-CERTIFICATES OF STATE LEVEL WILL BE GIVEN TO THE WINNERS",
			"PARTICIPATION CERTIFICATES WILL BE GIVEN AS WELL",
		],
	},
];
let curr = 0;

function getRegistrationInfo(regInfo) {
	let allInfo = "";
	regInfo.forEach((info) => {
		allInfo += `
		<span class="category">${info.category} - </span>
		<span class="amount">&#x20B9;${info.amount}</span><br>`;
	});
	return allInfo;
}

function getRules(rules) {
	let allRules = "";
	rules.forEach((rule) => {
		allRules += `<li>${rule}</li>`;
	});
	return allRules;
}

function show(direction) {
	if (direction === "next") {
		curr += 1;
		if (curr === 3) curr = 0;
	} else {
		curr -= 1;
		if (curr === -1) curr = 2;
	}

	let newContent = "";
	const content = contentInfo[curr];
	console.log(content);

	let fontSize = 150;
	if (content.fontSize) {
		fontSize = 110;
	}

	newContent = `
  <div class="row contain">
  <span class="game-name hide-on-med-and-down" style="font-size='${fontSize}px'">${
		content.gameName
	}</span>
  <img src=${content.characterImgPath} class="character" />
  <div class="col s5 light-bg"></div>
  <div class="col s7 dark-bg"></div>
</div>

<div class="m-head hide-on-large-only">${content.gameName}</div>

<div class="row info container">
  <div class="counter">
    <div class="count">
      <div class="current">0${curr + 1}</div>
      <div class="total">/03</div>
    </div>
    <p>Bored of only studying online?  Why not show your gaming prowess, compete & win? Participate in 3 exciting & popular online games to completely refresh your mood...Just use your skills, concentration & internet connection...the prizes are all yours to grab !! Have fun !!</p>
  </div>

  <div class="col s12 m3 content col1">
    <img src=${content.image1Path} />
  </div>
  <div class="col s12 m5 content col2">
    <h5>${content.gameName}</h5>
    <p>
      ${content.description}
    </p>
  </div>
  <div
    class="col s12 m4 content col3"
    style="background-image: url(${content.image2Path})"
  >
    <div class="overlay">
		<div class="entry-info">
				<div class="register">
					Registration Fee
				</div>
				${getRegistrationInfo(content.registrationInfo)}
			</div>
			<!-- <div class="prize-info">EXITING CASH PRIZES</div> -->
			<a
				class="waves-effect waves-light btn modal-trigger"
				href="#rule-modal"
				onclick="openModal()"
				>RULES</a
			>
			<a class="waves-effect btn" href="https://forms.gle/aWwPgj5rdZ52BzDx6">Register</a>
		</div>
</div>

<script>openModal()</script>
  `;
	changeContent(content.rules);
	const allContent = document.getElementById("all-content");
	// allContent.innerHTML = "";
	window.scrollTo(0, 0);
	setTimeout(() => {
		allContent.innerHTML = newContent;
	}, 300);
}

function changeContent(rules) {
	let gameRules = document.getElementById("game-rules");
	gameRules.innerHTML = getRules(rules);
}

function openModal() {
	M.AutoInit();
}

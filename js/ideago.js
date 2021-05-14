const finalDate = new Date("May 20, 2021 10:00:00");
const teamdata = {
  "Prof Mrs H.S.Ohal": "Faculty, Department of Computer Engineering",
  "Prof Mrs M.S.Aware": "Faculty, Department of Computer Engineering",
  "Prof Mrs N.G.Dongre": "Faculty, Department of Computer Engineering",
  "Prof Mrs N.S.Dutte":
    "Faculty, Department of Electronics and Telecommunication Engineering",
  "Prof Mrs A.R.Sanap":
    "Faculty, Department of Electronics and Telecommunication Engineering",
  "Prof Mrs V.C.Rathod": "Faculty, Department of IT Engineering",
  "Prof Mrs Y.J.Gaikwad": "Faculty, Department of IT Engineering",
  "Prof Mrs S.B.Kashid": "Faculty, Department of Civil Engineering",
  "Prof Mrs R.A.Patil": "Faculty, Department of Civil Engineering",
  "Prof Mrs S.N.Patil": "Faculty, Department of Mechanical Engineering",
  "Prof Mrs K.V.Karandikar": "Faculty, Department of Mechanical Engineering",
};
const dayNode = document.getElementById("Days");
const hournode = document.getElementById("Hours");
const minNode = document.getElementById("Mins");
const secNode = document.getElementById("Secs");
const topicWrapper = document.getElementById("topic-wrapper");
const resmenubar = document.getElementById("res-menu-bar");
const teamcontainer = document.getElementById("team-container");
var interval = setInterval(() => {
  const final_time = finalDate.getTime();
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = final_time - now;
  // Time calculations for days, hours, minutes and seconds
  if (distance > 0) {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hournode.innerHTML = hours;
    dayNode.innerHTML = days;
    minNode.innerHTML = minutes;
    secNode.innerHTML = seconds;
  } else {
    clearInterval(interval);
  }
}, 1000);

//The topics loader

document.getElementById("menu-icon").addEventListener("click", () => {
  resmenubar.style.display = "flex";
});
document.getElementById("res-close").addEventListener("click", () => {
  resmenubar.style.display = "none";
});
document.getElementById("register-button").addEventListener("click", () => {
  document.getElementById("register-a").click();
});

for (key in teamdata) {
  const rootnode = document.createElement("div");
  rootnode.className = "team-card";
  const titlenode = document.createElement("h3");
  titlenode.innerHTML = key;
  const descnode = document.createElement("p");
  descnode.innerHTML = teamdata[key];
  rootnode.appendChild(titlenode);
  rootnode.appendChild(descnode);
  teamcontainer.appendChild(rootnode);
}

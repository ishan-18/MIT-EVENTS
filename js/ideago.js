const finalDate = new Date("May 20, 2021 10:00:00");
const ideago_events = [
  {
    image: "/assets/smartcity.jpg",
    alt: "Smart City",
    title: "Sustainability and Smart City Environment",
    events: [
      "Biogas Generation from biodegradable",
      "Paperless office work",
      "E-Vehicle charging using renewable energy",
      "Rain Water Circulation",
      "Generation and Managment of Renewable Energy",
      "Online traffic vigilance or monitoring",
      "Smart parking solution",
    ],
  },
  {
    image: "/assets/smart-agriculture.jpg",
    alt: "Agriculture",
    title: "Agriculture and Rural Development",
    events: [
      "Mobile apps for sharing or pulling frame port of agriculture products.",
      "E commerce of farming products",
      "Groundwater investigation",
      "Organic Farming",
      "Reduce rate of evaporation in farmers ",
      "Adulteration",
    ],
  },
  {
    image: "/assets/drone.png",
    alt: "Robot",
    title: "Robotics and Drone",
    events: [
      "AI based robots for elderly care",
      "Search and resuce operations in natural calamities",
      "Non invasive checking of passengers and luggage",
      "Primary medical investigation using robotics",
      "Automation in industry hazardous area",
      "Robot arrested surgery",
    ],
  },
  {
    image: "/assets/health.jpg",
    alt: "Health",
    title: "Health Care",
    events: [
      "Virtual Reality(VR) for Yoga and Meditation",
      "Non invasive Non Glucometer",
      "AI based diagnosis of various diseases",
      "Smart in-house mobility for differently able people",
    ],
  },
  {
    image: "/assets/online-education.jpg",
    alt: "Online Education",
    title: "Online Education System",
    events: [
      "Technologies for Online Submission/assessment/examinations",
      "Proctored exam tools to avoid malpractices",
    ],
  },
];

const dayNode = document.getElementById("Days");
const hournode = document.getElementById("Hours");
const minNode = document.getElementById("Mins");
const secNode = document.getElementById("Secs");
const topicWrapper = document.getElementById("topic-wrapper");
const resmenubar = document.getElementById("res-menu-bar");
var interval = setInterval(() => {
  const final_time = finalDate.getTime();
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = final_time - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  hournode.innerHTML = hours || 0;
  dayNode.innerHTML = days || 0;
  minNode.innerHTML = minutes || 0;
  secNode.innerHTML = seconds || 0;

  if (distance < 0) {
    clearInterval(interval);
  }
}, 1000);

//The topics loader
ideago_events.forEach((value) => {
  const root = document.createElement("div");
  root.className = "topic-card";
  const imageNode = document.createElement("img");
  imageNode.src = value.image;
  imageNode.alt = value.alt;
  imageNode.decoding = "async";
  const titleNode = document.createElement("h3");
  titleNode.innerHTML = value.title;
  const ruleNode = document.createElement("div");
  value.events.forEach((value_) => {
    let liNode = document.createElement("li");
    liNode.innerHTML = `<p>${value_}</p>`;
    ruleNode.appendChild(liNode);
  });
  root.appendChild(imageNode);
  root.appendChild(titleNode);
  root.appendChild(ruleNode);
  topicWrapper.appendChild(root);
});

document.getElementById("menu-icon").addEventListener("click", () => {
  resmenubar.style.display = "flex";
});
document.getElementById("res-close").addEventListener("click", () => {
  resmenubar.style.display = "none";
});
document.getElementById("register-button").addEventListener("click", () => {
  document.getElementById("register-a").click();
});

const ideago_events = [
  {
    image: "./Assets/smartcity.jpg",
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
    image: "./Assets/smart-agriculture.jpg",
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
    image: "./Assets/drone.jpg",
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
    image: "./Assets/health.jpg",
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
    image: "./Assets/online-education.jpg",
    alt: "Online Education",
    title: "Online Education System",
    events: [
      "Technologies for Online Submission/assessment/examinations",
      "Proctored exam tools to avoid malpractices",
    ],
  },
];
Object.freeze(ideago_events);
const topic_container_root_node = document.getElementById(
  "topic-root-container"
);
function add_to_topic_container(data) {
  const node = document.createElement("div"); //This is the root node of single card
  node.className = "topic-container";
  let image_node = document.createElement("img"); //The big image on left side
  image_node.src = data.image || "";
  image_node.alt = data.alt || "";
  image_node.decoding = "async";
  node.appendChild(image_node);

  const node2 = document.createElement("div"); //The root node for card right side
  const divinner = document.createElement("div"); //The root node for the title
  const h2 = document.createElement("h2"); //The title node
  h2.innerText = data.title || "Not found";

  divinner.appendChild(h2);
  node2.appendChild(divinner);

  const ul = document.createElement("ul"); //The list holder where the list contains the event names
  data?.events.forEach((value) => {
    let li = document.createElement("li");
    li.innerText = value;
    ul.appendChild(li);
  });
  node2.appendChild(ul);
  node.appendChild(node2);
  topic_container_root_node.appendChild(node);
}

const introtext = [
  "Missing",
  " those",
  " Hackathons.",
  '<br /><img src="./Assets/down-arrow.svg" class="down-arrow" />',
  "Missing",
  "the",
  "fun",
  "of",
  "working",
  "with",
  "the",
  "team",
  "to",
  "show",
  "your",
  "creative",
  "ideas.",
  "<br />Don't",
  "worry",
  "we",
  "are",
  "back",
  "with",
  "the",
  "fun.",
  '<img src="./Assets/happy.svg" class="happy-face" /><br />',
  "Mark",
  "the",
  "date",
  "on",
  "calendar",
  "and",
  "start",
  "preparing.",
  "<sup>20 May 2021</sup>",
];
const final_date = new Date("May 20, 2021 00:00:00");

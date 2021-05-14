const team_node = document.getElementById("team-title-node");
const team_synonyms = ["Dream Team", "committee", "working people"];
var counter = 0;
var synonym_len = team_synonyms.length;
setInterval(() => {
  if (counter == synonym_len) {
    counter = 0;
  }
  team_node.innerHTML = team_synonyms[counter];
  counter++;
}, 3000);

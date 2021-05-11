ideago_events.forEach((value) => {
  add_to_topic_container(value);
});
const hr_node = document.getElementById("hour-node");
const day_node = document.getElementById("day-node");
const min_node = document.getElementById("min-node");
const sec_node = document.getElementById("sec-node");
var interval = setInterval(() => {
  const final_time = final_date.getTime();
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = final_time - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  hr_node.innerHTML = hours || 0;
  day_node.innerHTML = days || 0;
  min_node.innerHTML = minutes || 0;
  sec_node.innerHTML = seconds || 0;

  if (distance < 0) {
    clearInterval(interval);
  }
}, 1000);

const res_menu_button = document.getElementById("res-menu-button");
const menu_bar = document.getElementById("menu-bar");
res_menu_button.addEventListener("click", () => {
  if (menu_bar.style.display === "none") {
    menu_bar.style.display = "flex";
  } else {
    menu_bar.style.display = "none";
  }
});

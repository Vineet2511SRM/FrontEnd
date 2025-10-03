// Third JS file - Digital Clock ⏰

function updateClock() {
  let now = new Date();

  // Get hours, minutes, seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format with leading zeros
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Display time
  document.getElementById("time").textContent =
    hours + ":" + minutes + ":" + seconds;

  // Display date
  let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  document.getElementById("date").textContent =
    now.toLocaleDateString("en-US", options);
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // Run once immediately
console.log("Clock initialized and updating every second");


// This is used to find out the current year which is going on
const nextYear = new Date().getFullYear() + 1;

// newYear takes the value of "1 Jan curentYear+1" as currentYear gets updated every year
const newYear = "1 Jan " + `${nextYear}`;

// These are the variables to access html elements using their class names
const daysEL = document.querySelector(".days-text");
const hoursEL = document.querySelector(".hours-text");
const minutesEL = document.querySelector(".minutes-text");
const secondsEL = document.querySelector(".seconds-text");
const upcomingYear = document.querySelector(".year");

// This is function countdown which calculate the days, hours, minutes, seconds until the next New Year
function countDown() {
  //Saves the value of current Date
  const currentDate = new Date();

  //Saves the value of New Year
  const newYearDate = new Date(newYear);

  //Calculates the total seconds as the subtraction of these values will yield a value in milliseconds
  const totalSeconds = (newYearDate - currentDate) / 1000;

  // Calculates the No. of days until New Year
  const days = Math.floor(totalSeconds / (60 * 60 * 24));

  // Calculates the No. of hours until New Year
  const hours = Math.floor((totalSeconds / 3600) % 24);

  // Calculates the No. of minutes until New Year
  const minutes = Math.floor((totalSeconds / 60) % 60);

  // Calculates the No. of seconds until New Year
  const seconds = Math.floor(totalSeconds % 60);

  //They all transform all the html elements with new values
  daysEL.innerHTML = days;
  hoursEL.innerHTML = hours;
  minutesEL.innerHTML = minutes;
  secondsEL.innerHTML = seconds;
}

//Print the next New Year
upcomingYear.innerHTML = nextYear;

//setInterval is used to call the countDown function after every 1000ms ie 1sec to update the html values
setInterval(countDown, 1000);

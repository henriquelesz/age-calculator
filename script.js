const inputs = document.querySelectorAll("input");

const yearInput = document.querySelector("#year");
const monthInput = document.querySelector("#month");
const dayInput = document.querySelector("#day");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

function checkAge() {
  const yearOutput = document.querySelector("#yearOut");
  const monthOutput = document.querySelector("#monthOut");
  const dayOutput = document.querySelector("#dayOut");

  const inputYear = parseInt(yearInput.value, 10);
  const inputMonth = parseInt(monthInput.value, 10);
  const inputDay = parseInt(dayInput.value, 10);

  if (
    inputMonth < currentMonth ||
    (inputMonth === currentMonth && inputDay <= currentDay)
  ) {
    yearOutput.textContent = currentYear - inputYear;
    monthOutput.textContent = currentMonth - inputMonth;

    if (inputDay <= currentDay) {
      dayOutput.textContent = currentDay - inputDay;
    } else {
      monthOutput.textContent = currentMonth - inputMonth - 1;
      const daysInLastMonth = new Date(
        currentYear,
        currentMonth - 1,
        0
      ).getDate();
      dayOutput.textContent = daysInLastMonth + (currentDay - inputDay);
    }
  } else {
    yearOutput.textContent = currentYear - inputYear - 1;
    monthOutput.textContent = 12 - (inputMonth - currentMonth);

    if (inputDay <= currentDay) {
      dayOutput.textContent = currentDay - inputDay;
    } else {
      monthOutput.textContent = 11;
      const daysInLastMonth = new Date(
        currentYear,
        currentMonth - 1,
        0
      ).getDate();
      dayOutput.textContent = daysInLastMonth + (currentDay - inputDay);
    }
  }
}

inputs.forEach((item) => {
  item.addEventListener("input", checkAge);
});

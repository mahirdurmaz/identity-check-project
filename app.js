// Selecting the elements
const input = document.querySelector("input");
const button = document.querySelector("button");

// Defining arrays
let oddIndex = [];
let evenIndex = [];

// Arrays for storing values in nums
let oddsInNums = [];
let evensInNums = [];

// Arrays for the sum of nums
let sumOfOdds = 0;
let sumOfEvens = 0;

let tenthDigit = 0;
let elevenDigit = 0;

// This is where the magic happens :)
button.addEventListener("click", () => {
  document.querySelector("section").innerHTML = "";

  for (let i = 0; i <= 8; i += 2) {
    oddIndex.push(input.value[i]);
  }

  oddIndex.forEach((str) => {
    oddsInNums.push(Number(str));
  });

  for (let i = 0; i < oddsInNums.length; i++) {
    sumOfOdds += oddsInNums[i];
  }

  ///////////////////////////////////////////

  for (let i = 1; i <= 7; i += 2) {
    evenIndex.push(input.value[i]);
  }
  evenIndex.forEach((str) => {
    evensInNums.push(Number(str));
  });

  for (let i = 0; i < evensInNums.length; i++) {
    sumOfEvens += evensInNums[i];
  }

  ///////////////////////////////////////////

  tenthDigit += (sumOfOdds * 7 - sumOfEvens) % 10;
  elevenDigit += (sumOfOdds + sumOfEvens + tenthDigit) % 10;

  if (
    input.value.length == 11 &&
    input.value[0] !== 0 &&
    tenthDigit == input.value[9] &&
    elevenDigit == input.value[10]
  ) {
    document.querySelector("section").innerHTML +=
      '<i class="fa-regular fa-circle-check true"></i><p class="true">ID is valid</p>';
  } else {
    document.querySelector("section").innerHTML +=
      '<i class="fa-regular fa-circle-xmark wrong"></i><p class="wrong">ID isn\'t valid</p>';
  }
  // Emptying the arrays for the next loop iteration

  oddIndex = [];
  evenIndex = [];

  oddsInNums = [];
  evensInNums = [];

  sumOfOdds = 0;
  sumOfEvens = 0;

  tenthDigit = 0;
  elevenDigit = 0;
});

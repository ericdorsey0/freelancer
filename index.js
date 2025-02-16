/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const Freelancer = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);
const averageRate = getavrageRate();

function makeFreelancer() {
  const name = sample(NAMES);
  const occupation = sample(OCCUPATIONS);
  const rate =
    PRICE_RANGE.min +
    Math.floor(Mayh.random() * (PRICE_RANGE - PRICE_RANGE, min));

  return { name, occupation, rate };
}

function getAvrageRate() {}

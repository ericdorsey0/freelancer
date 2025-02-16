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

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);
const averageRate = getAverageRate();

function makeFreelancer() {
  const name = sample(NAMES);
  const occupation = sample(OCCUPATIONS);
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));

  return { name, occupation, rate };
}

function getAverageRate() {
  const total = freelancers.reduce(
    (total, freelancer) => total + freelancer.rate,
    0
  );
  return total / freelancers.length;
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function FreelancerRow({ name, occupation, rate }) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>$${rate}</td>
  `;
  return $tr;
}

function FreelancerRows() {
  const $tbody = document.createElement("tbody");
  const $freelancers = freelancers.map(FreelancerRow);
  $tbody.replaceChildren(...$freelancers);
  return $tbody;
}

function AverageRate() {
  const $p = document.createElement("p");

  $p.textContent = `The average rate is $${averageRate.toFixed(2)}.`;
  return $p;
}

function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>OCCUPATTION</th>
          <th>RATE</th>
        </tr>
      </thead>
      <tbody id="FreelancerRows"></tbody>
    </table>
  `;
  $app.querySelector("AverageRate").replaceWith(AverageRate());
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}

render();

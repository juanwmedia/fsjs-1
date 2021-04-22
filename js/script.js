/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// Array of objects (collection) containing the quotes for display
const quotes = [
  {
    quote: "Waste no more time arguing what a good man should be. Be One.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    year: "150 BC",
    theme: "philosophy",
  },
  {
    quote:
      "We are more often frightened than hurt; and we suffer more in imagination than in reality",
    source: "Seneca",
  },
  {
    quote:
      "He who fears death will never do anything worth of a man who is alive",
    source: "Seneca",
    theme: "philosophy",
  },
  {
    quote:
      "I judge you unfortunate because you have never lived through misfortune. You have passed through life without an opponent—no one can ever know what you are capable of, not even you.",
    source: "Seneca",
  },
  {
    quote:
      "How long are you going to wait before you demand the best for yourself?",
    source: "Epictetus",
    theme: "philosophy",
  },
];

// Function that selects a random quote from the quotes array
function getRandomQuote() {
  const length = quotes.length;
  const random = Math.floor(Math.random() * length);
  return quotes[random];
}

// Function who generates a random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  return { r: r, g: g, b: b };
}

// Function that changes the page background color
function changeBackgroundColor() {
  const color = getRandomColor();
  document.body.style.backgroundColor = `rgba(${color.r}, ${color.g}, ${color.b}, .7)`;
}

// Function that uses the random quote selected to build an HTML string hydrated with the quote object properties
function buildQuote() {
  const selected = getRandomQuote();
  let html = "";
  if (selected.theme) {
    html += `<p class="theme">${selected.theme.toUpperCase()}</p>`;
  }
  html += `
        <p class="quote">${selected.quote}</p>
        <p class="source">${selected.source}
  `;
  if (selected.citation) {
    html += `<span class="citation">${selected.citation}</span>`;
  }
  if (selected.year) {
    html += `<span class="year">${selected.year}</span>`;
  }
  html += "</p>";
  return html;
}

// Function who starts all the process of selecting, inserting, changing banckground, etc...
function printQuote() {
  changeBackgroundColor();
  const html = buildQuote();
  document.getElementById("quote-box").innerHTML = html;
}

// Starts an interval for auto-refreshing quotes
setInterval(printQuote, 10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

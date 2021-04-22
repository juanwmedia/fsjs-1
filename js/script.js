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
  },
];

// Function that selects a random quote from the quotes array
function getRandomQuote() {
  const length = quotes.length;
  const random = Math.floor(Math.random() * length);
  return quotes[random];
}

// Function that uses the random quote selected to build an HTML string hydrated with the quote object properties
function printQuote() {
  const selected = getRandomQuote();
  let html = `
        <p class="quote">${selected.quote}</p>
        <p class="source">${selected.source}
  `;
  if (selected.citation) {
    html += `<span class="citation">${selected.citation}</span>`
  }
  if (selected.year) {
    html += `<span class="year">${selected.year}</span>`
  }
  html+= '</p>'
  document.getElementById('quote-box').innerHTML = html
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

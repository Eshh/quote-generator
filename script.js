let apiQuotes = [];
let randomItem = {};
const loader = document.getElementById("loader");

// Get quotes API function
async function getQuotes() {
  toggleLoader(true);
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    apiQuotes = await (await fetch(apiUrl)).json();
    getRandomQuote();
  } catch (error) {
    // Catch error
    alert(error);
  }
  setTimeout(() => {
    toggleLoader(false);
  }, 1000);
}

function getRandomQuote() {
  toggleLoader(true);
  randomItem = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  const quoteElem = document.getElementById("quote");
  quoteElem.textContent = randomItem.text;
  document.getElementById("author").textContent =
    randomItem.author || "Unknown";
  // Check if quote length is long , then append long text css class
  randomItem.text.length > 120
    ? quoteElem.classList.add("long-quote")
    : quoteElem.classList.remove("long-quote");
  setTimeout(() => {
    toggleLoader(false);
  }, 1000);
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${
    randomItem.text
  } - ${randomItem.author || "Unknown"}`;
  window.open(twitterUrl, "_blank");
}

function toggleLoader(state) {
  document.getElementById("quote-container").hidden = state;
  loader.hidden = !state;
}

// On Load
document.getElementById("new").addEventListener("click", getRandomQuote);
document.getElementById("twitter").addEventListener("click", tweetQuote);
getQuotes();

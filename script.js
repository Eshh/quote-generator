let apiQuotes = [];

// Get quotes API function
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    apiQuotes = await (await fetch(apiUrl)).json();
    getRandomQuote();
  } catch (error) {
    // Catch error
    alert(error);
  }
}

function getRandomQuote() {
  randomItem = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  document.getElementById("quote").innerHTML = randomItem.text;
  document.getElementById("author").innerHTML = randomItem.author;
}

// On Load
getQuotes();

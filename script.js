const params = new URLSearchParams(window.location.search);
const query = params.get("q");

document.getElementById("searchBox").value = query || "";

const welcomeMsg = document.getElementById("welcomeMsg");
const resultsDiv = document.getElementById("results");

if (query) {
  welcomeMsg.innerHTML = `✨ Welcome to AZ CIPHER! Searching for <b>"${query}"</b><br>Here are your curated findings 🌌`;

  resultsDiv.innerHTML = `
    <div class="result-box">
      <a href="https://www.google.com/search?q=${query}" target="_blank">
        🌐 Explore full search results on Google
      </a>
    </div>

    <div class="result-box">
      <a href="https://www.youtube.com/results?search_query=${query}" target="_blank">
        🎬 Watch related media on YouTube
      </a>
    </div>

    <div class="result-box">
      <a href="https://en.wikipedia.org/wiki/${query}" target="_blank">
        📖 Read comprehensive articles on Wikipedia
      </a>
    </div>
  `;
}
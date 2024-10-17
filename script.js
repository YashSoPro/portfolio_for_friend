const footballNewsAPI = "https://football-news-aggregator-live.p.rapidapi.com/news/fourfourtwo/bundesliga";
const nekosAPI = "https://nekos.life/api/v2/img";

const animeTitles = [
    "Naruto",
    "One Piece",
    "Attack on Titan",
    "Death Note",
    "My Hero Academia",
    "Demon Slayer",
    "Fullmetal Alchemist",
    "Sword Art Online",
    "Fairy Tail",
    "Bleach",
];

// Function to fetch and display anime images
async function fetchAnimeImages() {
    const animeGallery = document.getElementById("anime-gallery");
    animeGallery.innerHTML = ''; // Clear existing images

    for (const title of animeTitles) {
        const response = await fetch(nekosAPI);
        const data = await response.json();
        const imgElement = document.createElement("img");
        imgElement.src = data.url; // Use image URL from Nekos API
        imgElement.alt = title;
        imgElement.style.width = "200px"; // Set a width for the images
        imgElement.style.margin = "10px"; // Add some margin between images

        const titleElement = document.createElement("h3");
        titleElement.textContent = title;

        const container = document.createElement("div");
        container.appendChild(titleElement);
        container.appendChild(imgElement);
        animeGallery.appendChild(container);
    }
}

// Function to fetch and display football news
async function fetchFootballNews() {
    const footballContent = document.getElementById("football-content");
    footballContent.innerHTML = ''; // Clear existing news

    const response = await fetch(footballNewsAPI, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "football-news-aggregator-live.p.rapidapi.com",
            "x-rapidapi-key": "fba7c539c6mshfc3a999bb77a83dp124d46jsncd98fbb751b4", // Your API key
        },
    });

    const newsData = await response.json();

    newsData.data.forEach((news) => {
        const newsItem = document.createElement("div");
        newsItem.innerHTML = `<h4>${news.title}</h4><p>${news.description}</p><a href="${news.link}" target="_blank">Read more</a>`;
        footballContent.appendChild(newsItem);
    });
}

// Initial calls to fetch data
fetchAnimeImages();
fetchFootballNews();

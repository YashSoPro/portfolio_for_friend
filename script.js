const animeList = ["Blue Lock", "One Piece", "Bleach", "Hunter x Hunter (HxH)", "Black Clover", "Hell's Paradise", "Dandadan", "7 Deadly Sins", "Fairy Tail"];
const animeAPI = 'https://api.jikan.moe/v4/anime/';
const footballAPI = 'https://football-news-aggregator-live.p.rapidapi.com/news/fourfourtwo/bundesliga';
const apiKey = 'fba7c539c6mshfc3a999bb77a83dp124d46jsncd98fbb751b4';

function fetchAnimeImages() {
    animeList.forEach(async (anime) => {
        try {
            const response = await fetch(`${animeAPI}${anime}`);
            const data = await response.json();
            const imageUrl = data.data.images.jpg.large_image_url; // Adjust based on the actual API response structure

            const li = document.createElement('li');
            li.innerHTML = `<img src="${imageUrl}" alt="${anime}"><span>${anime}</span>`;
            document.getElementById('anime-list').appendChild(li);
        } catch (error) {
            console.error('Error fetching anime images:', error);
        }
    });
}

function fetchFootballNews() {
    fetch(footballAPI, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'football-news-aggregator-live.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const footballContent = document.getElementById('football-content');
        data.forEach(news => {
            const article = document.createElement('article');
            article.innerHTML = `
                <h3>${news.title}</h3>
                <p>${news.description}</p>
                <a href="${news.url}" target="_blank">Read more</a>
            `;
            footballContent.appendChild(article);
        });
    })
    .catch(error => {
        console.error('Error fetching football news:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAnimeImages();
    fetchFootballNews();
});

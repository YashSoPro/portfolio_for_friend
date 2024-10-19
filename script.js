async function fetchAnimeData() {
    const animeGallery = document.getElementById("anime-gallery");
    animeGallery.innerHTML = ''; // Clear existing images

    try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=10');
        if (!response.ok) throw new Error('Failed to fetch anime data');
        const data = await response.json();

        data.data.forEach(anime => {
            const container = document.createElement("div");
            container.innerHTML = `
                <h3>${anime.title}</h3>
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}" style="width: 200px; margin: 10px;">
                <p>Rating: ${anime.score}/10</p>
            `;
            animeGallery.appendChild(container);
        });
    } catch (error) {
        console.error('Error fetching anime data:', error);
        animeGallery.innerHTML = '<p>Failed to load anime data. Please try again later.</p>';
    }
}

function displayMockFootballNews() {
    const footballContent = document.getElementById("football-content");
    footballContent.innerHTML = ''; // Clear existing news
    
    const mockNews = [
        { title: "Bundesliga Recap", description: "Exciting matches from the weekend.", link: "#" },
        { title: "Transfer Rumors", description: "Latest transfer gossip from German clubs.", link: "#" },
        { title: "Player Spotlight", description: "Rising stars in the Bundesliga.", link: "#" }
    ];

    mockNews.forEach((news) => {
        const newsItem = document.createElement("div");
        newsItem.innerHTML = `
            <h4>${news.title}</h4>
            <p>${news.description}</p>
            <a href="${news.link}" target="_blank">Read more</a>
        `;
        footballContent.appendChild(newsItem);
    });
}

// Initial calls to fetch data
fetchAnimeData();
displayMockFootballNews();

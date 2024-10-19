async function fetchAnimeData() {
    const animeGallery = document.getElementById("anime-gallery");
    animeGallery.innerHTML = ''; // Clear existing images

    try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=50'); // Fetch more items to ensure all desired anime are included
        if (!response.ok) throw new Error('Failed to fetch anime data');
        const data = await response.json();

        // Define the anime titles you want to showcase
        const desiredAnimeTitles = [
            'Blue Lock', 'One Piece', 'Bleach', 'Hunter x Hunter', 
            'Black Clover', 'Hell\'s Paradise', 'Dandadan', 'The Seven Deadly Sins', 'Fairy Tail'
        ];

        // Filter and display only the anime with matching titles
        const filteredAnime = data.data.filter(anime => desiredAnimeTitles.includes(anime.title));

        // Display filtered anime
        filteredAnime.forEach(anime => {
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

// Initial call to fetch data
fetchAnimeData();

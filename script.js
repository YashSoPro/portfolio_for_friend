async function fetchAnimeData() {
    const animeGallery = document.getElementById("anime-gallery");
    animeGallery.innerHTML = ''; // Clear existing images

    try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=50'); // Fetch more anime data
        if (!response.ok) throw new Error('Failed to fetch anime data');
        const data = await response.json();

        // Define the anime titles you want to showcase
        const desiredAnimeTitles = [
            'Blue Lock', 'One Piece', 'Bleach', 'Hunter x Hunter', 
            'Black Clover', 'Hell\'s Paradise', 'Dandadan', 'The Seven Deadly Sins', 'Fairy Tail'
        ];

        // Filter only the anime you want to show
        const filteredAnime = data.data.filter(anime => desiredAnimeTitles.includes(anime.title));

        if (filteredAnime.length === 0) {
            animeGallery.innerHTML = '<p>No matching anime found.</p>'; // If none of the desired anime are found
        } else {
            filteredAnime.forEach(anime => {
                const container = document.createElement("div");
                container.innerHTML = `
                    <h3>${anime.title}</h3>
                    <img src="${anime.images.jpg.image_url}" alt="${anime.title}" style="width: 200px; margin: 10px;">
                    <p>Rating: ${anime.score}/10</p>
                `;
                animeGallery.appendChild(container);
            });
        }
    } catch (error) {
        console.error('Error fetching anime data:', error);
        animeGallery.innerHTML = ''; // No error message displayed, just leaves the area empty
    }
}

// Call the function to load anime data
fetchAnimeData();

async function fetchSelectedAnime() {
    const animeGallery = document.getElementById("anime-gallery");
    animeGallery.innerHTML = ''; // Clear existing images

    // List of anime titles you want to display
    const selectedAnimeTitles = [
        "Blue Lock",
        "One Piece",
        "Bleach",
        "Hunter x Hunter",
        "Black Clover",
        "Hell's Paradise",
        "Dandadan",
        "The Seven Deadly Sins",
        "Fairy Tail"
    ];

    try {
        // Fetch top anime (or search for a specific anime if required)
        const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=50');
        if (!response.ok) throw new Error('Failed to fetch anime data');
        const data = await response.json();

        // Filter the anime based on the titles you want to display
        const filteredAnime = data.data.filter(anime => 
            selectedAnimeTitles.includes(anime.title)
        );

        // Display the filtered anime
        filteredAnime.forEach(anime => {
            const container = document.createElement("div");
            container.innerHTML = `
                <h3>${anime.title}</h3>
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}" style="width: 200px; margin: 10px;">
                <p>Rating: ${anime.score}/10</p>
            `;
            animeGallery.appendChild(container);
        });

        // If no anime found in the response
        if (filteredAnime.length === 0) {
            animeGallery.innerHTML = '<p>No matching anime found. Please check the titles or try again later.</p>';
        }

    } catch (error) {
        console.error('Error fetching anime data:', error);
        animeGallery.innerHTML = '<p>Failed to load anime data. Please try again later.</p>';
    }
}

// Call the function to display the selected anime
fetchSelectedAnime();

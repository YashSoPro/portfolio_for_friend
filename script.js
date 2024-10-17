$(document).ready(function() {
    // Fetching anime recommendation (dummy data for demonstration)
    const animeRecommendations = ["Attack on Titan", "My Hero Academia", "Demon Slayer", "Jujutsu Kaisen"];
    const randomAnime = animeRecommendations[Math.floor(Math.random() * animeRecommendations.length)];
    $('#anime-recommendation').text(randomAnime);

    // Fetching football news (dummy data for demonstration)
    const footballNews = [
        "Team A wins the championship!",
        "Player X transfers to Team Y.",
        "Upcoming match: Team Z vs Team W."
    ];
    const randomNews = footballNews[Math.floor(Math.random() * footballNews.length)];
    $('#football-news-content').text(randomNews);

    // Random character of the day (dummy character for demonstration)
    const characters = ["Naruto Uzumaki", "Luffy D. Monkey", "Ichigo Kurosaki", "Goku"];
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    $('#character').text(randomCharacter);

    // Quote of the day (dummy data for demonstration)
    const quotes = [
        "Believe in yourself!",
        "Dream big, work hard!",
        "Every day is a new beginning."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $('#quote').text(randomQuote);

    // Poll functionality (dummy implementation)
    $('.poll-option').on('click', function() {
        const selectedOption = $(this).text();
        $('#poll-results').text(`You voted for: ${selectedOption}`);
    });
});

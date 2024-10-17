document.addEventListener('DOMContentLoaded', function() {
    const animeList = [
        { name: 'Blue Lock', comment: 'Because regular football wasn\'t intense enough' },
        { name: 'One Piece', comment: 'Still shorter than my school syllabus' },
        { name: 'Bleach', comment: 'Not the one my mom uses on my anime t-shirts' },
        { name: 'Hunter x Hunter', comment: 'The "x" is silent, like my grades' },
        { name: 'Black Clover', comment: 'Yelling is a valid form of magic, right?' },
        { name: 'Hell\'s Paradise', comment: 'Reminds me of my last math exam' },
        { name: 'Dandadan', comment: 'Aliens, ghosts, and high school drama? Sign me up!' },
        { name: 'Seven Deadly Sins', comment: 'Not to be confused with my daily routine' },
        { name: 'Fairy Tail', comment: 'Where friendship is the real magic (and plot armor)' }
    ];

    // Anime List
    const animeListElement = document.getElementById('anime-list');
    animeList.forEach(anime => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${anime.name}:</strong> ${anime.comment}`;
        animeListElement.appendChild(listItem);
    });

    // Anime Gallery
    const animeGallery = document.getElementById('anime-gallery');
    animeList.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
            <img src="https://via.placeholder.com/150x200.png?text=${anime.name}" alt="${anime.name}">
            <p>${anime.name}</p>
        `;
        animeGallery.appendChild(card);
    });

    // Football Content
    const footballContent = document.getElementById('football-content');
    const footballCard = document.createElement('div');
    footballCard.className = 'football-card';
    footballCard.innerHTML = `
        <img src="https://via.placeholder.com/200x150.png?text=Football" alt="Football">
        <p>Me trying to play football IRL: *Insert 'This is Fine' meme*</p>
    `;
    footballContent.appendChild(footballCard);

    // School Content
    const schoolContent = document.getElementById('school-content');
    const schoolInfo = [
        { title: 'Favorite Subject', content: 'Lunch Break Studies' },
        { title: 'Club Activity', content: 'Professional Napper (Anime Club President)' },
        { title: 'Life Goal', content: 'To find the One Piece before my teachers find my missing homework' }
    ];
    schoolInfo.forEach(info => {
        const infoCard = document.createElement('div');
        infoCard.className = 'school-card';
        infoCard.innerHTML = `
            <h3>${info.title}</h3>
            <p>${info.content}</p>
        `;
        schoolContent.appendChild(infoCard);
    });

    // Quiz Game
    const quizContainer = document.getElementById('quiz-container');
    const quizQuestions = [
        { question: "Which anime protagonist runs like a total weirdo?", answer: "Naruto" },
        { question: "In 'One Punch Man', how many punches does it usually take Saitama to defeat an enemy?", answer: "One" },
        { question: "Complete the phrase: 'Omae wa mou...'", answer: "Shindeiru" }
    ];
    let currentQuestion = 0;

    function displayQuestion() {
        if (currentQuestion < quizQuestions.length) {
            quizContainer.innerHTML = `
                <h3>${quizQuestions[currentQuestion].question}</h3>
                <input type="text" id="quiz-answer">
                <button onclick="checkAnswer()">Submit (and pray)</button>
            `;
        } else {
            quizContainer.innerHTML = "<h3>Quiz Complete! You're a certified weeb now! 🎉</h3>";
        }
    }

    window.checkAnswer = function() {
        const userAnswer = document.getElementById('quiz-answer').value;
        if (userAnswer.toLowerCase() === quizQuestions[currentQuestion].answer.toLowerCase()) {
            alert("Correct! You're not a normie after all!");
        } else {
            alert("Wrong! Time to turn in your weeb card.");
        }
        currentQuestion++;
        displayQuestion();
    };

    displayQuestion();

    // Anime Character of the Day
    const characterOfTheDay = document.getElementById('anime-character-of-the-day');
    const characters = ['Luffy (One Piece)', 'Naruto (Naruto)', 'Goku (Dragon Ball)', 'Saitama (One Punch Man)', 'Eren Yeager (Attack on Titan)'];
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    characterOfTheDay.innerHTML = `<h3>Today's Spirit Animal: ${randomCharacter}</h3>`;

    // Interactive Timeline
    const timeline = document.getElementById('timeline');
    const events = [
        { year: 2010, event: 'Discovered anime (goodbye, social life)' },
        { year: 2015, event: 'Joined school anime club (found my people)' },
        { year: 2020, event: 'Became anime club president (unlimited power!)' }
    ];
    events.forEach(e => {
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        eventElement.innerHTML = `<strong>${e.year}:</strong> ${e.event}`;
        timeline.appendChild(eventElement);
    });

    // Countdown Timer
    const countdownTimer = document.getElementById('countdown-timer');
    const targetDate = new Date('2024-07-15').getTime(); // Example: Summer vacation

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdownTimer.innerHTML = `<h3>Countdown to Freedom (Summer Vacation): ${days} days</h3>`;
    }

    setInterval(updateCountdown, 1000);

    // Favorite Quotes
    const favoriteQuotes = document.getElementById('favorite-quotes');
    const quotes = [
        "I'll leave tomorrow's problems to tomorrow's me. - Saitama (One Punch Man)",
        "People die if they are killed. - Shirou Emiya (Fate/stay night)",
        "The only ones who should kill are those who are prepared to be killed. - Lelouch (Code Geass)"
    ];
    let currentQuote = 0;

    function rotateQuotes() {
        favoriteQuotes.innerHTML = `<p>"${quotes[currentQuote]}" - Me, probably during a math test</p>`;
        currentQuote = (currentQuote + 1) % quotes.length;
    }

    setInterval(rotateQuotes, 10000);
    rotateQuotes();

    // Skill Meter
    const skillMeter = document.getElementById('skill-meter');
    const skills = [
        { name: 'Anime Knowledge', level: 95 },
        { name: 'Football Skills', level: 80 },
        { name: 'Studying', level: 42 },
        { name: 'Procrastination', level: 100 }
    ];
    skills.forEach(skill => {
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';
        skillBar.innerHTML = `
            <span>${skill.name}</span>
            <div class="skill-level" style="width: ${skill.level}%"></div>
        `;
        skillMeter.appendChild(skillBar);
    });

    // Guest Book (Note: This is a frontend-only implementation)
    const guestbookForm = document.getElementById('guestbook-form');
    const guestbookEntries = document.getElementById('guestbook-entries');

    guestbookForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('guest-name').value;
        const message = document.getElementById('guest-message').value;
        const entry = document.createElement('div');
        entry.innerHTML = `<strong>${name}:</strong> ${message} <em>(Posted while probably binge-watching anime)</em>`;
        guestbookEntries.appendChild(entry);
        guestbookForm.reset();
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? 'Toggle Normie Mode 🌞' : 'Toggle Anime Mode 🌙';
    });

    // Language Toggle (Note: This is a simplified implementation)
    const languageSelect = document.getElementById('language-select');
    const translations = {
        en: {
            welcome: "Welcome to Rohan's Dank Corner of the Internet",
            about: "About This Noob",
            anime: "Anime Addiction",
            football: "⚽ Fever",
            school: "School Survival Guide"
        },
        hi: {
            welcome: "Rohan ke Meme Adde mein Aapka Swagat Hai",
            about: "Is Noob ke Baare Mein",
            anime: "Anime ki Lat",
            football: "⚽ ka Bukhar",
            school: "School Survival Guide (Send Help)"
        }
    };

    languageSelect.addEventListener('change', function() {
        const lang = this.value;
        document.querySelector('h1').textContent = translations[lang].welcome;
        document.querySelectorAll('nav a').forEach((link, index) => {
            link.textContent = translations[lang][Object.keys(translations.en)[index]];
        });
    });

    // Social Media Links
    const socialLinks = document.getElementById('social-links');
    const socialMedia = [
        { name: 'Twitter', url: 'https://twitter.com' },
        { name: 'Instagram', url: 'https://instagram.com' },
        { name: 'MyAnimeList', url: 'https://myanimelist.net' }
    ];
    socialMedia.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.textContent = social.name;
        link.target = '_blank';
        socialLinks.appendChild(link);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

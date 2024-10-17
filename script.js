document.addEventListener('DOMContentLoaded', function() {
    // Anime.js Animation
    anime({
        targets: '.name',
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.title',
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: 500,
        easing: 'easeOutExpo'
    });

    // Mo.js Animation Example
    const burst = new mojs.Burst({
        radius: {0: 50},
        count: 15,
        angle: 30,
        children: {
            shape: 'circle',
            radius: 4,
            fill: '#ffeb3b',
            stroke: 'rgba(255, 255, 255, 0.6)',
            strokeWidth: 2,
            delay: mojs.stagger(15, {start: 0}),
        }
    });

    burst.replay();
});

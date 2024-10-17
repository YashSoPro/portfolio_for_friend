// Sample animation with anime.js
anime({
    targets: 'h1',
    translateY: [-50, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1000
});

// Sample animation with mo.js
const circle = new mojs.Shape({
    shape: 'circle',
    radius: 50,
    fill: 'red',
    isShowEnd: true,
    duration: 3000,
    easing: 'cubic.out',
});
circle.play();

window.sr = ScrollReveal();
sr.reveal('.wonder-content',{
    duration:3000
});
sr.reveal('.left',{
    duration:1000,
    origin: 'right',
    viewOffset: { top: 0, right: 100, bottom: 0, left: 0 },
});
sr.reveal('.right',{
    duration:3000,
    origin: 'right',
    easing: 'cubic-bezier(0.6, 0.6, 0.4, 1)',
});

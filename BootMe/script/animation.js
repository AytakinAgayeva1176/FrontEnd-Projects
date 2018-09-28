window.sr = ScrollReveal();
sr.reveal('.mainContent',{
    duration:3000
});
sr.reveal('.animate',{
    duration:3000
});
sr.reveal('.team-1',{
    duration:3000,
    origin: 'left',
    viewOffset: { top: 0, right: 0, bottom: 0, left: 20 },
    viewFactor: 0.7
});
sr.reveal('.team-2',{
    duration:3000,
    origin: 'right',
    easing: 'cubic-bezier(0.6, 0.6, 0.4, 1)',
});
sr.reveal('.action-1',{
    duration:3000,
    origin: 'left',
    viewFactor: 0.4
});
sr.reveal('.action-2',{
    duration:3000,
    origin: 'left',
    delay:500,
    viewFactor: 0.4
});
sr.reveal('.action-3',{
    duration:3000,
    origin: 'left',
    delay:1000,
    viewFactor: 0.4
});
sr.reveal('.action-4',{
    duration:3000,
    origin: 'left',
    delay:1500,
    viewFactor: 0.4
});
sr.reveal('.doing',{
    duration:3000,
    delay:500,
});
sr.reveal('.port-anem',{
    duration:2000
},50);
sr.reveal('.anim-contact',{
    duration:3000,
    delay:600
});
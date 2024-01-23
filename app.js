let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let restart = document.querySelector('.restart')

let tweeen = gsap.to(".box1",{
y: -200,
duration: 5,
backgroundColor: "teal",
});


play.addEventListener( 'Click', ()=> tween.play());
pause.addEventListener( 'Click', ()=> tween.pause());
restart.addEventListener( 'Click', ()=> tween.restart());




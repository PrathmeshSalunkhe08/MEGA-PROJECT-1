gsap.from('.line h1,h2',{
    y:150,
    opacity:0,
    duration:0.5,
    stagger:0.3,
    delay:0.4
})
let h5timer=document.querySelector('#line1-part1 h5');
let grow=0;
setInterval(() => {

    if(grow<100){
       
        // console.log(grow);
        h5timer.textContent = grow++;

       
    }
    else{
        // grow=100;
        h5timer.textContent = grow;
        // console.log(grow);
    }
   
    
}, 33);

var tl=gsap.timeline();
tl.to('#loader',{
    opacity:0,
    duration:0.3,
    delay:4.1

})
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 900)
})

gsap.ticker.lagSmoothing(0)

const body = document.body;
let lastScroll = 0

lenis.on('scroll',(instance)=>{
    let currentScroll = instance.scroll;
    if (currentScroll <= 0){
        body.classList.remove('scroll-up')
    } 
    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')){
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }
    if (currentScroll < lastScroll && body.classList.contains('scroll-down')){
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }

    lastScroll = currentScroll;

})

let sections = gsap.utils.toArray('.section')
console.log(sections);
sections.forEach(section => {
    gsap.to(section,{
        yPercent:100,
        ease:'none',
        scrollTrigger:{
            trigger:section,
            start:'bottom bottom',
            end:'bottom top',
            scrub:true
        }
    })
});

// gsap.to("#page2 .cards",{
//     xPercent:-120,
//     ease:"none",
//     scrollTrigger:{
//         trigger:'#page2',
//         scroller:'body',
//         start:"top 0%",
//         end:'top -100%',
//         pin:true,
//         scrub:1
//     }
// })

gsap.registerPlugin(Draggable, InertiaPlugin)

const cardsContainer = document.querySelector('.cards')
const cards = gsap.utils.toArray('.card')
const snapPoints = cards.map((card, i) => -(card.clientWidth + 50)* i)
const mySnap = gsap.utils.snap(snapPoints)

window.addEventListener("load", () =>{
  Draggable.create(cardsContainer, {
    type: "x",
    bounds:{
      maxX: 0,
      minX: window.innerWidth - cardsContainer.scrollWidth - 50
    },
    ondrag: function () {
      direction = this.deltaX
    },
    inertia: true,
    snap:{
      x: function(v){
        return mySnap(v)
      }
    }
  })
})
// const buttons = buttonContainer.querySelectorAll('button'); // Or use appropriate selector

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Determine snap increment (e.g., one card width)
//     const snapIncrement = cardWidth + gap;

//     if (draggable.isDragging()) {
//       // Stop dragging if currently in progress
//       draggable.disable();
//     }

//     // Calculate target snap position based on button click
//     let targetSnapIndex;
//     if (button.classList.contains('prev')) { // Assuming class for "prev" button
//       targetSnapIndex = Math.max(0, draggable.vars.x - snapIncrement); // Snap to previous (capped at minX)
//     } else if (button.classList.contains('next')) { // Assuming class for "next" button
//       targetSnapIndex = Math.min(snapPoints.length - 1, draggable.vars.x + snapIncrement); // Snap to next (capped at maxX)
//     }

//     // Snap to the target position
//     if (typeof targetSnapIndex !== 'undefined') {
//       draggable.tweenTo(snapPoints[targetSnapIndex]);
//     }
//   });
// });

// const cardsContainer = document.querySelector('.cards');
// const cards = gsap.utils.toArray('.card');
// console.log(cards);

// const cardWidth = cards[0].clientWidth;  // Assuming all cards have same width
// const gap = cardsContainer.offsetWidth - cards.length * cardWidth;
// const snapPoints = cards.map((card, i) => -(cardWidth + gap) * i);
// const mySnap = gsap.utils.snap(snapPoints);

// window.addEventListener("load", () => {
//   Draggable.create(cardsContainer, {
//     type: "x",
//     bounds: {
//       maxX: 0,
//       minX: (window.innerWidth - cardsContainer.scrollWidth) -50
//     },
//     onDrag: function() {
//         direction = this.deltaX      
//     },
//     inertia: true,
//     snap: {
//         x: function(v) {
//           const closestSnapPoint = snapPoints.reduce((prev, curr) => {
//             const prevDistance = Math.abs(prev - v);
//             const currDistance = Math.abs(curr - v);
//             return currDistance < prevDistance ? curr : prev;
//           });
//           return closestSnapPoint;
//         }
//       }
//   });
// });


gsap.to('#page3 .video-div',{
  width: '100%',
  height: '100%',
  ease: "expoScale(0.5,7,none)",
  duration:2,
  scrollTrigger:{
    trigger:"#page3 .video-div",
    scroller:"body",
    start:"top bottom",
    end:"bottom bottom",
    scrub:true
  }
})

gsap.from('#page3 .overlay',{
  opacity:0,
  ease:'easeInOut',
  duration:3,
  delay:1,
  scrollTrigger:{
    trigger:'#page3',
    scroller:'body',
    start:"top top",
    end:"top top",
    scrub:true,
  }
})

gsap.to('#shows .scroll-heading',{
  xPercent:-705,
  scrollTrigger:{
    trigger:'#shows',
    scroller:'body',
    start:"top 0",
    end:"top -100%",
    scrub:true,
    pin:"#shows"
  }
})
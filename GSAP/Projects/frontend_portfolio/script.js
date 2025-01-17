var tl = gsap.timeline()

tl.from("#nav h3",{
    y:-100,
    delay:     0.3,
    duration: 0.8,
   stagger:0.4,
   opacity:0,

})

tl.from("#main h1",{
    x:-500,
    duration:0.8,
    opacity:0,
    stagger:0.4,
    
})

tl.from("img",{
    x:100,
    rotate:30,
    opacity:0,
    duration:0.8,
    
    
    stagger:0.8
    
})
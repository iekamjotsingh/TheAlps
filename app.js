const mountainRange = document.querySelector('.home-mountains img')
const title = document.querySelector('h1')

gsap.to(mountainRange,{
    y:-100,
    scrollTrigger:{
        trigger:'home-mountains',
        scrub:true
    }
})

gsap.to(title,{
    y:500,
    scrollTrigger:{
        trigger:"home-mountains",
        scrub:true
    }
})

ScrollTrigger.create({
    trigger:".animate-it-bitch",
    pin:true,
    // markers:true,
    end:"bottom 30%"
})
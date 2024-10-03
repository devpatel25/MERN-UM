// const tl2=gsap.timeline();

const tl1=gsap.timeline({
    onComplete: () => {
        gsap.set(".loading-strips-con",{
            display: "none",
        })
    }
    
}
);

const tl= gsap.timeline();

tl1.from(".blocks",{
    x: 2000,
    duration: 1,
    ease: "bounce",
    stagger: 1,
})
tl1.to(".loading-screen", {
    display: "none",
})

tl1.to(".loading-strip-1, .loading-strip-3",{
    scaleX: 0,
    duration: 0.4,
    stagger: 0.2,
    transformOrigin: "right center",
    ease: "power2.inOut",
} )

tl1.to(".loading-strip-2, .loading-strip-4",{
    scaleX: 0,
    duration: 0.4,
    stagger: 0.2,
    transformOrigin: "left center",
    ease: "power2.inOut",
} )


tl.from(" li , .name-head",{
    y: -100,
    ease: "power2",
    stagger: 0.3,
})

tl.from(".main-head", {
    color: "transparent",
    delay: 2,
})

tl.from("p", {
    color: "transparent",
})

gsap.from(" li , .name-head",{
    y: -100,
    ease: "power2",
    stagger: 0.3,
})

gsap.from(".main-head", {
    color: "transparent",
    delay: 2,
})

gsap.from("p", {
    color: "transparent",
    delay: 4,
})
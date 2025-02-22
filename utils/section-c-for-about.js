gsap.from(".section-c .content", {
  opacity: 0,
  x: 100,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section-c",
    start: "top 80%",
    toggleActions: "play none none",
  },
});

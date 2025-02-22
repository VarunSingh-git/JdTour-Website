
gsap.registerPlugin(ScrollTrigger);

gsap.from(".section-b h2", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section-b h2",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
    markers: false, 
  },
});

gsap.from(".section-b p", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section-b p",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
    markers: false,
  },
});

gsap.from(".section-heading", {
  opacity: 0,
  x: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".section-c",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
});

gsap.from(".section-text", {
  opacity: 0,
  x: 50,
  duration: 1.2,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".section-c",
    start: "top 75%",
    toggleActions: "play none none reset",
  },
});

gsap.from(".image-container", {
  opacity: 0,
  x: -50,
  duration: 1.2,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".section-c",
    start: "top 70%",
    toggleActions: "play none none reset",
  },
});
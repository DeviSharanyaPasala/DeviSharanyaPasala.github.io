const animatedElements = document.querySelectorAll(
  ".section, .experience-card, .skill-card, .project-card, .credential-card"
);

animatedElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

animatedElements.forEach((element) => observer.observe(element));

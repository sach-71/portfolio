// Sachin Modha — portfolio interactions
// Small, deliberate touches only: scroll-reveal on project cards.
// Everything else (hover states, sticky header) is handled in pure CSS.

(function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const cards = document.querySelectorAll(".sticker-card");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    // No motion: just show everything immediately.
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  cards.forEach((card) => {
    card.classList.add("reveal-pending");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  cards.forEach((card) => observer.observe(card));
})();

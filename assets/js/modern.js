// Scroll reveal and hero typing effect for the redesigned pages.
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealAll = () => document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealAll();
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  const typed = document.querySelector(".typed[data-roles]");
  if (typed && !reduceMotion) {
    const roles = typed.dataset.roles.split("|").filter(Boolean);
    if (roles.length > 1) {
      let roleIndex = 0;
      let charIndex = roles[0].length;
      let deleting = true;
      typed.classList.add("is-typing");

      const tick = () => {
        const role = roles[roleIndex];
        charIndex += deleting ? -1 : 1;
        typed.textContent = role.slice(0, charIndex);

        let delay = deleting ? 35 : 70;
        if (!deleting && charIndex === role.length) {
          deleting = true;
          delay = 2200;
        } else if (deleting && charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          delay = 350;
        }
        setTimeout(tick, delay);
      };
      setTimeout(tick, 2600);
    }
  }

  const navbar = document.getElementById("navbar");
  if (navbar) {
    const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();

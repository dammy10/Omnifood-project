const yearUpdate = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearUpdate.textContent = currentYear;

const menuToggle = document.querySelector(".btn-mobile-nav");
const headerToggle = document.querySelector(".header");
menuToggle.addEventListener("click", function () {
  headerToggle.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerToggle.classList.toggle("nav-open");
  });
});

// Sticky navigation
const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHero);

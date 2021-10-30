document.querySelectorAll("a.nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 0;
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

var burgerMenu = document.getElementById("menu-icon");

burgerMenu.addEventListener("click", burger);

function burger() {
  var element = document.getElementById("header-nav");
  element.classList.toggle("nav-list");
}

const header = document.querySelector(".header");
const inner = document.querySelector(".header-inner");
const headerHeight = header.offsetHeight;
const innerHeight = inner.offsetHeight;
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance > lastScrollTop) {
    header.classList.remove("header-fixed");

    inner.style.marginTop = null;
  } else {
    header.classList.add("header-fixed");
  }

  if (scrollDistance === 0) {
    header.classList.remove("header-fixed");
    inner.style.marginTop = null;
  }

  lastScrollTop = scrollDistance;
});

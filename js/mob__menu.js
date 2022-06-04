(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mob__header-button"),
    closeMenuBtn: document.querySelector(".mob__button"),
    menu: document.querySelector(".mob__menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();

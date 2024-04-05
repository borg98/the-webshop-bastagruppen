import { createHtmlForCart } from "./functions/createHtmlForCart";
import { displayCart } from "./functions/displayCart";
import "../scss/style.scss";

document.addEventListener("DOMContentLoaded", function () {
  const menuButtons = document.getElementById("hamburger-menu");
  const menuItems = document.querySelector(".menu");

  if (menuButtons && menuItems) {
    const showMenu = menuButtons.querySelector(".show-menu") as HTMLElement;
    if (showMenu instanceof HTMLElement) {
      showMenu.style.display = "none";
    }

    const slides = document.getElementsByClassName("mySlides");
    let slideIndex = 0;

    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
      }

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      const nextSlide = slides[slideIndex - 1] as HTMLElement;

      if (slides[slideIndex - 1] instanceof HTMLElement) {
        nextSlide.style.display = "block";
        setTimeout(showSlides, 2000);
      }
    }

    showSlides();

    menuButtons.addEventListener("click", function () {
      if (menuItems instanceof HTMLElement) {
        if (
          menuItems.style.display === "none" ||
          menuItems.style.display === ""
        ) {
          menuItems.style.display = "flex";
          const showMenuItems = menuButtons.querySelector(
            ".show-menu"
          ) as HTMLElement;
          const hideMenuItems = menuButtons.querySelector(
            ".hide-menu"
          ) as HTMLElement;
          showMenuItems.style.display = "none";
          hideMenuItems.style.display = "block";
        } else {
          menuItems.style.display = "none";
          const showMenu = menuButtons.querySelector(
            ".show-menu"
          ) as HTMLElement;
          const hideMenu = menuButtons.querySelector(
            ".hide-menu"
          ) as HTMLElement;
          showMenu.style.display = "block";
          hideMenu.style.display = "none";
        }
      }
    });
  }
});

createHtmlForCart();
displayCart();

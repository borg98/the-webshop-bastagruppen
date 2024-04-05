export function displayCart() {
  const cartbutton = document.querySelector("#shopping-cart-icon");
  const sidebar = document.querySelector(".cartmenu-container");
  const closebutton = document.querySelector("#close-icon");
  const summaryBox = document.querySelector(".summary-box");

  cartbutton?.addEventListener("click", () => {
    sidebar?.classList.toggle("open");
    summaryBox?.classList.toggle("openSummary");

    document.body.classList.toggle("freeze");
  });

  closebutton?.addEventListener("click", () => {
    sidebar?.classList.toggle("open");
    summaryBox?.classList.toggle("openSummary");
    document.body.classList.toggle("freeze");
  });

  const scrollElement: HTMLElement | null = document.querySelector(
    ".cartmenu-container"
  );
  const scrollTopElement: HTMLElement | null = document.querySelector(
    ".cartmenu-container__top"
  );
  const scrollBottomElement: HTMLElement | null =
    document.querySelector(".summary-box");

  if (scrollElement && scrollTopElement && scrollBottomElement) {
    scrollElement.addEventListener("scroll", function () {
      if (this.scrollTop > 1) {
        scrollTopElement.classList.add("stuck");
      } else {
        scrollTopElement.classList.remove("stuck");
      }
    });
  }

  if (scrollElement && scrollBottomElement) {
    scrollElement.addEventListener("scroll", function () {
      const containerHeight = this.clientHeight;
      const scrollHeight = this.scrollHeight;

      const percentageToRemove =
        ((containerHeight - (scrollHeight - this.scrollTop)) /
          containerHeight) *
        100;
      if (percentageToRemove == 0) {
        scrollBottomElement.classList.remove("stuck");
      } else {
        scrollBottomElement.classList.add("stuck");
      }
    });
  }
}

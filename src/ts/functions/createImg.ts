export function createImg(container: HTMLDivElement, list: string[]) {
  list.forEach((color) => {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("ModalImgContainer--img");
    imgContainer.style.backgroundImage = `url(${color})`;
    container.appendChild(imgContainer);
  });
}

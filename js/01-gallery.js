import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`);
const markUp = createImgMarkUp(galleryItems);


gallery.addEventListener(`click`, onGalleryClick);
gallery.insertAdjacentHTML(`beforeend`, markUp);

function createImgMarkUp(galleryItems) {
    const ImgNarkUp = galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    }).join("");
    return ImgNarkUp;
}

function onGalleryClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}">
`,
    {
      onShow: (instance) =>
        window.addEventListener("keydown", closeModalEscape),
      onClose: (instance) =>
        window.removeEventListener("keydown", closeModalEscape),
    }
  );
  instance.show();
  function closeModalEscape(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
}
console.log(galleryItems);
 
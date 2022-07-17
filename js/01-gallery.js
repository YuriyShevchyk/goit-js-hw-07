import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`);
const markUp = createImgMarkUp(galleryItems);


gallery.addEventListener(`click`, onGalClick);
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

// console.log(ImgNarkUp);

function onGalClick(evt) {
    evt.preventDefault();
    const isImg = evt.target.classList.contains('gallery__image');
    if (!isImg) {
        return
    };
    // baza//
    // import * as basicLightbox from 'basiclightbox'
    const currentImg = evt.target.dataset.source;

    // console.log(currentImg);

    const instance = basicLightbox.create(`<img src="${currentImg}">`);
    // console.log(instance);

    instance.show();

}

// console.log(galleryItems);

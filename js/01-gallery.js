import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGallery(items) {
    return items
        .map((item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a>
</li>`
)
        .join("");
}
 
const addGallery = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", addGallery)

gallery.addEventListener('click', onClick);

function onClick(evt) {
    console.log(evt.target)
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`
    );
    instance.show();

    gallery.addEventListener('keydown', (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    })
}


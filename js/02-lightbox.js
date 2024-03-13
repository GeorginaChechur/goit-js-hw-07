import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGallery(items) {
    return items
        .map((item) => `
<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="Image description" />
   </a>
</li>`
)
        .join("");
}
 
const addGallery = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", addGallery)

const links = gallery.querySelectorAll('.gallery__link');

const lightbox = new SimpleLightbox(links, {
    captionsData: 'alt',
    animationSpeed: 250
});

gallery.addEventListener('click', onClick);

function onClick(evt) {
    console.log(evt.target)
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    gallery.addEventListener('click', onClick);
}


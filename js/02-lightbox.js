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


    const lightbox = new SimpleLightbox('.gallery__link', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'bottom', 
        captionDelay: 250,
        disableDownload: true
    });








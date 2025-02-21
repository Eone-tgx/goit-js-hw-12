import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images, isNewSearch = false) {
  const gallery = document.querySelector('#gallery');

  if (isNewSearch) {
    gallery.innerHTML = '';
  }

  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" />
        <div class="image-info">
          <p><strong>Likes:</strong> ${likes}</p>
          <p><strong>Views:</strong> ${views}</p>
          <p><strong>Comments:</strong> ${comments}</p>
          <p><strong>Downloads:</strong> ${downloads}</p>
        </div>
      </a>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    overlayOpacity: 1,
    showCounter: false,
  });

  lightbox.refresh();
}

export function smoothScroll() {
  const cardHeight =
    document.querySelector('.gallery-item')?.getBoundingClientRect().height ||
    100;
  window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}

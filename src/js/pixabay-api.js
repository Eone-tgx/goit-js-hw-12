import axios from 'axios';

const API_KEY = '48830775-40ff68ea61f2bc47ba43ee541';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return axios
    .get(url)
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Error fetching data from Pixabay API:', error);
      throw error;
    });
}

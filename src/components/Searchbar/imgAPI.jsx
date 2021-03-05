export const getImg = () =>
  fetch(
    'https://pixabay.com/api/?q=dog&page=1&key=19779952-34022b0aec99bb73ff26dde3b&image_type=photo&orientation=horizontal&per_page=12',
  ).then(resp => resp.json());

import axios from 'axios';

const key = '19779952-34022b0aec99bb73ff26dde3b';

export const getImg = ({ searchQuery = '', page = 1 }) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export default getImg;

// fetch(
//   'https://pixabay.com/api/?q=dog&page=1&key=19779952-34022b0aec99bb73ff26dde3b&image_type=photo&orientation=horizontal&per_page=12',
// ).then(resp => resp.json());

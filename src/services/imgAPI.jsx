import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '19779952-34022b0aec99bb73ff26dde3b';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const getImg = ({ searchQuery = '', page = 1 }) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

getImg.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default getImg;

// ===============

// const key = '19779952-34022b0aec99bb73ff26dde3b';

// const getImg = ({ searchQuery = '', page = 1 }) => {
//   return axios.get(
//     `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
//   );
// };

// ===============

// const getImg = ({ q, page = 1 }) => {
//   return axios.get('', { params: { q, page } }).then(res => res.data.hits);
// };

//  ==============

// const getImg = async ({ q = '', page = 1 }) => {
//   try {
//     const { data } = await axios.get('', { params: { q, page } });
//     return data.hits;
//   } catch (error) {
//     alert(error);
//     return [];
//   }
// };

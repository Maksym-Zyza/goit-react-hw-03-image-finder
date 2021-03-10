import axios from 'axios';
import PropTypes from 'prop-types';

const key = '19779952-34022b0aec99bb73ff26dde3b';

const getImg = ({ searchQuery = '', page = 1 }) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

getImg.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default getImg;

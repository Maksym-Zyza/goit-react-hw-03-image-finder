import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './default.jpg';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        data-img={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  webformatURL: defaultImg,
  largeImageURL: defaultImg,
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

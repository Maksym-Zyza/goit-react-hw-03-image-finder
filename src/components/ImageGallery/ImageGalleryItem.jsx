import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

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
  webformatURL: defaultImage,
  largeImageURL: defaultImage,
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;

import React from 'react';
import './styles.css';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button/Button';
import getImg from './components/Searchbar/imgAPI';
import Loader from './components/Loader';
import Modal from './components/Modal';

class App extends React.Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImg: { src: '', alt: '' },
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  formSubmitQuery = query => {
    this.setState({ searchQuery: query, images: [], page: 1, error: null });
  };

  fetchImages = () => {
    const { page, searchQuery } = this.state;
    const options = { page, searchQuery };
    this.setState({ isLoading: true });

    getImg(options)
      .then(resp => {
        this.setState(prevState => ({
          images: [...prevState.images, ...resp.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onImgClick = e => {
    const src = e.target.dataset.img;
    const alt = e.target.alt;

    if (e.target.nodeName === 'IMG') {
      this.setState({ largeImg: { src, alt } });
    }

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, isLoading, showModal, error } = this.state;
    const { src, alt } = this.state.largeImg;
    const renderBtn = images.length > 0 && !isLoading;
    console.log(images);

    return (
      <div>
        <Searchbar onSubmit={this.formSubmitQuery} />

        <ImageGallery images={images} onClick={this.onImgClick} />

        {isLoading && <Loader />}

        {renderBtn && <Button onClick={this.fetchImages} />}

        {showModal && <Modal src={src} alt={alt} onClose={this.toggleModal} />}

        {error && <h1>Something went wrong, please try again later.</h1>}
      </div>
    );
  }
}

export default App;

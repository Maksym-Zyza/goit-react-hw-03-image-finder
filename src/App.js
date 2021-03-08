import React from 'react';
import './styles.css';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button/Button';
// import Modal from './components/Modal';
// import { getImg } from './components/Searchbar/imgAPI';

class App extends React.Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
  };

  // componentDidMount() {
  //   // const { search } = this.state;
  //   fetch(
  //     `https://pixabay.com/api/?q=dog&page=1&key=19779952-34022b0aec99bb73ff26dde3b&image_type=photo&orientation=horizontal&per_page=12`,
  //   )
  //     .then(resp => resp.json())
  //     .then(({ hits }) => {
  //       this.setState({ images: hits });
  //     });
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  formSubmitQuery = query => {
    this.setState({ searchQuery: query });
  };

  fetchImages = () => {
    const { page, searchQuery } = this.state;
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=19779952-34022b0aec99bb73ff26dde3b&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(resp => {
        this.setState(prevState => ({
          images: resp.data.hits,
          page: prevState.page + 1,
        }));
      });
  };

  render() {
    console.log(this.state.images);
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitQuery} />
        <ImageGallery images={this.state.images} />
        {/* 
        <Loader /> */}
        {this.state.images.length > 0 && <Button onClick={this.fetchImages} />}
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;

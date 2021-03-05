import React from 'react';
import './styles.css';
// import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import { getImg } from './components/Searchbar/imgAPI';

class App extends React.Component {
  state = {
    images: [],
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=dog&page=1&key=19779952-34022b0aec99bb73ff26dde3b&image_type=photo&orientation=horizontal&per_page=12',
    )
      .then(resp => resp.json())
      .then(({ hits }) => {
        this.setState({ images: hits });
      });
  }

  render() {
    console.log(this.state.images);
    return (
      <div>
        <Searchbar onSubmit={'onSubmit'} />
        <ImageGallery images={this.state.images} />
        {/* 
        <Loader />
        <Button />
        <Modal /> */}
      </div>
    );
  }
}

export default App;

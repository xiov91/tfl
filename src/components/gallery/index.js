import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://i.imgur.com/BV5E3gv.png',
    thumbnail: '',
  },
  {
    original: 'https://i.imgur.com/4lcIEfb.jpg',
    thumbnail: '',
  },
];

class MyGallery extends React.Component {
  render() {
    return <div className="test"><ImageGallery items={images} /></div>;
  }
}

export default MyGallery;
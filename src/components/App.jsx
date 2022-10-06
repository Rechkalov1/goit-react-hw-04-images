import { ToastContainer } from 'react-toastify';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Searchbar from '../components/Search/Searchbar';
import React from 'react';
import { useState } from 'react';

export default function App() {
  const [searchImages, setSearchImages] = useState('');
  const handleSubmitForm = searchImages => {
    setSearchImages(searchImages);
  };
  return (
    <div>
      <Searchbar onSubmit={handleSubmitForm} />
      <ImageGallery searchImages={searchImages} />
      <ToastContainer />
    </div>
  );
}

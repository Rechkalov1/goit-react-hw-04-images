import { toast } from 'react-toastify';
import { ImageList } from 'components/shared/ImageList/ImageList';
import { Loader } from 'components/shared/Loader/Loader';
import fetchRequest from 'components/services/FetchApi';
import Modal from 'components/shared/Modal/Modal';
import { Div, LoadMode } from './imageGallery.styled';
import React from 'react';
import { useState, useEffect } from 'react';

export default function ImageGallery({ searchImages }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const [urlLarge, setUlrLarge] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchImages = async (currentName, currentPage) => {
      if (!searchImages) {
        return;
      }
      try {
        setLoading(true);
        const result = await fetchRequest(currentName, currentPage);
        const items = result.hits;
        setImages(prevItems => {
          return [...prevItems, ...items];
        });
        if (items.length === 0) {
          return toast.warn(
            "We didn't find your request, please try again later"
          );
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages(searchImages, page);
  }, [searchImages, page]);

  const openModal = (urlLarge, title) => {
    setModalOpen(true);
    setUlrLarge(urlLarge);
    setTitle(title);
  };
  const closeModal = () => {
    setModalOpen(false);
    setUlrLarge('');
    setTitle('');
  };

  const loadMore = () => {
    setPage(state => state + 1);
  };
  const isImages = Boolean(images.length);
  return (
    <div>
      {error && <p>Try later.</p>}
      <Div> {loading && <Loader />}</Div>

      {isImages && <ImageList items={images} onClick={openModal} />}
      {isImages && <LoadMode onClick={loadMore}>loadMore</LoadMode>}
      {modalOpen && (
        <Modal
          onClose={closeModal}
          largeImageURL={urlLarge}
          imageTitle={title}
        />
      )}
    </div>
  );
}

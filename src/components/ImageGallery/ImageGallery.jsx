import { toast } from 'react-toastify';
import { ImageList } from 'components/shared/ImageList/ImageList';
import { Loader } from 'components/shared/Loader/Loader';
import fetchRequest from 'components/services/FetchApi';
import Modal from 'components/shared/Modal/Modal';
import { Div, LoadMode } from './imageGallery.styled';
import React from 'react';
import { useState, useRef, useEffect } from 'react';

export default function ImageGallery({ searchImages }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState('');

  const [urlLarge, setUlrLarge] = useState('');
  const [title, setTitle] = useState('');

  const prevPage = Prev(page);
  const prevSearchImages = Prev(searchImages);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  useEffect(() => {
    const fetchImages = async (currentName, currentPage) => {
      setLoading(true);
      try {
        const result = await fetchRequest(currentName, currentPage);
        const items = result.hits;
        if (items.length === 0) {
          return toast.warn(
            "We didn't find your request, please try again later"
          );
        }
        if (currentPage === 1) {
          setImages([...items]);
        } else {
          setImages(prev => [...prev, ...items]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (!searchImages) {
      return;
    }
    if (page > prevPage) {
      fetchImages(searchImages, page);
      return;
    }
    if (prevSearchImages !== searchImages && page === prevPage) {
      fetchImages(searchImages, 1);
      setPage(1);
      return;
    }
  }, [searchImages, page, prevPage, prevSearchImages]);
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
  function Prev(value) {
    const prev = useRef();
    useEffect(() => {
      prev.current = value;
    });
    return prev.current;
  }
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

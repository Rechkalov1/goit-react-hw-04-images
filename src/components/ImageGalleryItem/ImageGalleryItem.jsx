import PropTypes from 'prop-types';
import { Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  imageURL,
  imageTitle,
  largeImageURL,
  onClick,
}) => {
  return (
    <li
      className="gallery-item"
      onClick={() => {
        onClick({ largeImageURL, imageTitle });
      }}
    >
      <Img src={imageURL} alt={imageTitle} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  imageTitle: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

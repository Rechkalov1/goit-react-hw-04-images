import PropTypes from 'prop-types';
import axios from 'axios';
const KEY = '29222910-b478f7ced416d0dc238ac2c9c';
const URL = 'https://pixabay.com/api/';
const fetchRequest = async (searchName, page) => {
  const response = await axios.get(
    `${URL}?q=${searchName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12&`
  );
  return response.data;
};

export default fetchRequest;

fetchRequest.propTypes = {
  searchName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

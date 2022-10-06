import PropTypes from 'prop-types';
export const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

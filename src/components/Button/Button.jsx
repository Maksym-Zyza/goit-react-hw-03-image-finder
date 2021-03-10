import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  return (
    <div className="btnDiv">
      <button className="Button" type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

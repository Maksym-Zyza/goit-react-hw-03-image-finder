const Button = ({ onClick }) => {
  return (
    <div className="btnDiv">
      <button className="Button" type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;

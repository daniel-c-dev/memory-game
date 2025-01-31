import "../Styles/button.css";

function Button({ className, text, image, value, onClick }) {
  return (
    <button className={className} value={value} onClick={onClick}>
      {text ? text : null}
      {image ? <img src={image} /> : null}
    </button>
  );
}

export default Button;

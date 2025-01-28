import "../styles/button.css";

function Button({ className, text, value, onClick }) {
  return (
    <button className={className} value={value} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

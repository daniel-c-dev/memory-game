import "../styles/button.css";

function Button({ text, value, onClick }) {
  return (
    <button value={value} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

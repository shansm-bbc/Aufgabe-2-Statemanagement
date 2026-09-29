import { useState } from "react";
import styles from "./TextConverter.module.css";

function TextConverter() {
  const [Input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <p>Enter a text:</p>
      <input type="text" value={Input} onChange={handleChange} />
      <p>Text length: {Input.length}</p>
      <p>Text: {Input}</p>
      <p>Reversed text: {Input.split("").reverse().join("")}</p>
      <p>Upper case text: {Input.toUpperCase()}</p>
    </>
  );
}

export default TextConverter;

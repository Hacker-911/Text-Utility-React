import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case!", "success");
  };

  const handleLcClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case!", "success");
  };

  const handleSpaceClick = () => {
    let newText = text.replace(/\s/g, "");
    setText(newText);
    props.showAlert("Space Removed!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042743" }} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-1 my-1" onClick={handleLcClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning mx-1 my-1" onClick={handleSpaceClick}>
          Remove Spaces
        </button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          &nbsp;words and {text.length} characters
        </p>
        <p>{text === "" ? 0 : 0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </div>
  );
}

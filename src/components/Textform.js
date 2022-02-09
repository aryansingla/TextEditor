import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCaps Done" , "success")
    }
    const handleLoClick = () => {
        // console.log("Lower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCaps Done" , "success")

    }
    const handleClearClick = () => {
        // console.log("Clear was clicked" + text);
        let newText = " ";
        setText(newText);
        props.showAlert("Text Cleared" , "success")

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard" , "success")

    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed" , "success")

    }

    const handleOnChange = (event) => {
        // console.log("on Change");
        setText(event.target.value);
    }

    return (
        <>
            <div class="conatiner" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.headline}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="13" value={text}
                        onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#1c4c5f' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Click to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Click to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Click to Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Click to Copy</button>
                <button disabled={text.length===0}  className="btn btn-primary mx-3 my-3" onClick={handleExtraSpace}>Remove extra space</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}charachters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
 
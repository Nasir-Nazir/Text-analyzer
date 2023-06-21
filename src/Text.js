import React from 'react'
import { useState } from 'react'

export default function Text(props) {
    const [text, setText] = useState("");
    const hanldeUpperClick = () => {
        let newtxt = text.toUpperCase();
        setText(newtxt);
        props.showAlert("Text is UpperCased" , "success")

    }
    const hanldeLowerClick = () => {
        let newtxt = text.toLowerCase();
        setText(newtxt);
        props.showAlert("Text is LowerCased" , "success")

    }
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const hanldeClearClick=(e)=>{
        let text="";
        setText(text)
        props.showAlert("Text is Cleared" , "success")

    }
    return (
        <>
            <div>
                <div className="mb-3" >
                    <label htmlFor="myBox" className="form-label"><h1>{props.head}</h1></label>
                    <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="3" style={{height:'180px'}} ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={hanldeUpperClick}>UpperCase</button>
                <button className="btn btn-success mx-2"  onClick={hanldeLowerClick}>LowerCase</button>
                <button className="btn btn-success mx-2"  onClick={hanldeClearClick}>ClearAll</button>
            </div>
            <div className="container my-2" >
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length}  words , {text.length} Character</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} minutes Read</p>
                <h4>Preveiw</h4>
                <p>{text.length>0?text:"Enter in textbox to preveiw"}</p>
            </div>
        </>
    )
}

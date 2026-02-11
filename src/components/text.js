import React, { useState } from 'react'

export default function Text() {
    
    const myfunc = () => {
        let nText = text.toUpperCase();
        setText(nText);
        console.log(nText);
    }
    
    const myChange = (event) => {
        setText(event.target.value);
        console.log("onchange triggered");
    }
    
     const [text, setText] = useState("Enter the sample text");
    // setText("Newtext");
    return (
        <div>
            <form className='container mt-3'>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Example label</label>
                    <textarea className="form-control mt-2" id="formGroupExampleInput" value={text} onChange={myChange}/>
                    <button type="button" className="btn btn-info mt-2" onClick={myfunc}>Submit</button>
                </div>
            </form>
        </div>
    )
}
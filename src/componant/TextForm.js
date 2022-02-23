import React , {useState} from 'react'




export default function TextForm(props) {

      const handleUpClick = () =>{
        console.log("Uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
      }
      const handleLoClick = () =>{
        console.log("Lowercase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
      }
      const handleClearClick = () =>{
        console.log("Clear Text was clicked" + Text);
        let newText = ' ';
        setText(newText);
        props.showAlert("Cleared Text","success");
      }
      const handleReverseTextClick = () =>{
        console.log("Reverse Text was clicked" + Text);
        let newText = Text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Converted to ReverseCase Order","success");
      }
      const handleCapFLTextClick = () =>{
        console.log("Reverse Text was clicked" + Text);
        let newText = Text.charAt(0).toUpperCase() + Text.slice(1);
        setText(newText);
        props.showAlert("Converted to Capitilized Letter","success");
      }
      const HandleOnChange = (event) =>{ 
        console.log("On Changed");
        setText(event.target.value);
        props.showAlert("Changed Value","success");
      }
      const HandleCopy = () =>{ 
        console.log("I Am Copied..");
        var Text = document.getElementById("myBox");
        Text.select();
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Content Copied","success");
      }

      const HandleExtraSpace = () =>{ 
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra Space","success");
      }

    const [Text , setText] = useState("");

   // Text = "New Text"; // wrong way to change the state

   // setText = ("New Text"); // Correct way to change the state


  return (
            <>
            <div className="cointainer" style={{color: props.mode==='dark'?'white':'rgb(0 40 66)'}}>
                <h1>{props.heading}</h1>
            <div className="mb-3"> 
                <textarea className="form-control"  value = {Text} onChange= {HandleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'White',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleReverseTextClick}>Reverse Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCapFLTextClick}>Capitilized Text</button>
                <button className="btn btn-primary mx-2" onClick={HandleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={HandleExtraSpace}>Remove Extra Space</button>



                
            </div>   
            <div className="cointainer" style={{color: props.mode==='dark'?'white':'rgb(0 40 66)'}}>
                  <h2>Text Summery</h2>
                  <p>{Text.split(" ").length} and {Text.length} Characters</p>
                  <p>{0.008 * Text.split(" ").length} Minutes Reading time...</p>
                  <h2>Preview</h2>
                  <p>{Text.length>0?Text:"Enter Your Text Preview it Here"}</p>

              </div> 
    </>
  )
}

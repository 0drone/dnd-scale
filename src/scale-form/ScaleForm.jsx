import React, { useState } from 'react';
import "./ScaleForm.css"



//takes in feet, inches, and scale and passes them to ScaleTable

const ScaleForm = (props) => {
  const setScaleData=props.setScaleData;
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [scale, setScale] = useState(1);



  const handleFeetChange = (e) => {
    setFeet(e.target.value);
  };

  const handleInchesChange = (e) => {
    setInches(e.target.value);
  };

  const handleScaleChange = (e) => {
    setScale(e.target.value);
  };

  const handleSubmit = (e) => {
    setScaleData({
      feet: feet,
      inches: inches,
      scale: scale
    });
    //alert(scaleData);
    // alert(`${feet} ${inches} ${scale}`);
    e.preventDefault();
  };

  

    return ( 
        <form onSubmit={handleSubmit} id="scale-form">
        <div id='height-input'>
          <label id='feet'>
            Feet:
            <input type="number" value={feet} onChange={handleFeetChange} defaultValue={6} placeholder={"6"} />
          </label>

          <label id='inches'>
            Inches:
            <input type="number" value={inches} onChange={handleInchesChange} defaultValue={0} />
          </label>
        </div>
        <label id='scale'>
          Scale:
          <input type="number" value={scale} onChange={handleScaleChange} defaultValue={60} />
        </label>
        
        <button type="submit" id="calculate">Calculate</button>
      </form>
     );
}
 
export default ScaleForm;
import React, { useState } from 'react';
import ScaleDisplay from './display-table/ScaleDisplay.jsx';
import ScaleForm from './scale-form/ScaleForm';
//import { calculateMilimeters } from './helpers';

const App = () => {
  const [scaleData, setScaleData]=useState({
    feet: 6,
    inches: 0,
    scale: 60
  })
  
  return (
    <>
      
      <ScaleForm setScaleData={setScaleData}/>
      <ScaleDisplay scaleData={scaleData}/>
    </>
  );
};

export default App;






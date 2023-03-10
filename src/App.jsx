import React, { useState } from 'react';
import ScaleTable from './display-table/ScaleTable.jsx';
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
      <ScaleTable scaleData={scaleData}/>
    </>
  );
};

export default App;






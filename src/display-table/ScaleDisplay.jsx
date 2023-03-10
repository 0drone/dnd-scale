import { useContext } from "react";

//context that provides scalecalc function and scale
//recieves scale, feet, inches from ScaleForm

import YourMini from "./YourMini";
import ScaleTable from "./ScaleTable";

//const ScaleContext = React.createContext();

const ScaleDisplay = (props) => {
    
    const scale=props.scaleData.scale;

    const convertToMillimeters = (feet, inches) => {
        return ((feet * 12 * 25.4) + (inches * 25.4));
      }
    
      //round to 1 decimal place function
      const round = (value) => {
        let x=(Math.round(value*10));
        console.log(x/10)
        return (x/10);
      }

      const calcScale = (feet, inches, scale) =>{
        const total = convertToMillimeters(feet, inches);
        return round(total / scale);
      }
    


//<ScaleContext.Provider value={calcScale:calcScale}>
//<YourMini feet={props.scaleData.feet} inches={props.scaleData.inches}/>
    return ( <>
        
        <YourMini feet={props.scaleData.feet} inches={props.scaleData.inches} calcScale={calcScale} scale={scale}/>
        <ScaleTable calcScale={calcScale} scale={scale}/>
        
        
    </> );
}
 
export default ScaleDisplay;
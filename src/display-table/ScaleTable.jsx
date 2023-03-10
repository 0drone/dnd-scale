import { useContext } from "react";

//context that provides scale, feet, inches, convertToMillimeters, and round to child elements
//recieves scale, feet, inches from ScaleForm

import YourMini from "./YourMini";


//const ScaleContext = React.createContext();

const ScaleTable = (props) => {
    
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
    
    //   const scaleEntryArray =[
    //     {entryName: "Human", feetMin: 6, inchesMin: 0, feetMedian: 6, inchesMedian: 0, feetMax: 6, inchesMax:0},
    //     {entryName: "Human", feetMin: 6, inchesMin: 0, feetMedian: 6, inchesMedian: 0, feetMax: 6, inchesMax:0},
    //     {entryName: "Human", feetMin: 6, inchesMin: 0, feetMedian: 6, inchesMedian: 0, feetMax: 6, inchesMax:0},
    //     {entryName: "Human", feetMin: 6, inchesMin: 0, feetMedian: 6, inchesMedian: 0, feetMax: 6, inchesMax:0},
    //     {entryName: "Human", feetMin: 6, inchesMin: 0, feetMedian: 6, inchesMedian: 0, feetMax: 6, inchesMax:0},
    //     {entryName: "Human", feetMin: 6, inchesMin: 0, feetMedian: 6, inchesMedian: 0, feetMax: 6, inchesMax:0},
    //     {entryName: "Human", feetMin: 6, inchesMin: 0, feetMedian: 6, inchesMedian: 0, feetMax: 6, inchesMax:0}
    //   ]

//<ScaleContext.Provider value={calcScale:calcScale}>
//<YourMini feet={props.scaleData.feet} inches={props.scaleData.inches}/>
    return ( <>
        
        
        
    
    </> );
}
 
export default ScaleTable;
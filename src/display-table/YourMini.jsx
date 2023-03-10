//takes in feet, inches, and scale and returns the result


const YourMini = (props) => {

    const yourMiniCalc = (feet, inches, scale) =>{
    const total = convertToMillimeters(feet, inches);
    setResult(round(total / scale));
    }

    yourMiniScale= yourMiniCalc(props.feet, props.inches, props.scale);

    return ( 
        <>
        <h3>{props.feet} feet {props.inches} inches at at 1:{props.scale} ratio would be {round(convertToMillimeters(props.scaleData.feet, props.scaleData.inches) / props.scaleData.scale)} millimeters</h3>
        </>
     );
}
 
export default YourMini;
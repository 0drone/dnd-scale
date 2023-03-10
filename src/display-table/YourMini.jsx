//takes in feet, inches, and scale and returns the result


const YourMini = (props) => {
    const scaled=props.calcScale(props.feet, props.inches, props.scale);

    return ( 
        <>
        <h3>{props.feet} feet {props.inches} inches at at 1:{props.scale} ratio would be {scaled} millimeters</h3>
        </>
     );
}
 
export default YourMini;
const ScaleTable = (props) => {
    
    const scaleEntryArray =[
        
        {entryName: "Human", feetMin: 4, inchesMin: 10, feetMedian: 5, inchesMedian: 7, feetMax: 6, inchesMax:4},
        {entryName: "Halfling", feetMin: 2, inchesMin: 9, feetMedian: 3, inchesMedian: 0, feetMax: 3, inchesMax:3},
        {entryName: "Gnome", feetMin: 3, inchesMin: 1, feetMedian: 3, inchesMedian: 4, feetMax: 3, inchesMax:7},
        {entryName: "Hill Dwarf", feetMin: 3, inchesMin: 10, feetMedian: 4, inchesMedian: 1, feetMax: 4, inchesMax:4},
        {entryName: "Mountain Dwarf", feetMin: 4, inchesMin: 2, feetMedian: 4, inchesMedian: 5, feetMax: 4, inchesMax:8},
        {entryName: "Half-Elf", feetMin: 4, inchesMin: 11, feetMedian: 5, inchesMedian: 6, feetMax: 6, inchesMax:0},
        {entryName: "High Elf", feetMin: 4, inchesMin: 8, feetMedian: 5, inchesMedian: 5, feetMax: 6, inchesMax:2},
        {entryName: "Wood Elf", feetMin: 4, inchesMin: 8, feetMedian: 5, inchesMedian: 5, feetMax: 6, inchesMax:2},
        {entryName: "Drow Elf", feetMin: 4, inchesMin: 7, feetMedian: 5, inchesMedian: 0, feetMax: 5, inchesMax:5},
        {entryName: "Goliath", feetMin: 7, inchesMin: 0, feetMedian: 7, inchesMedian: 6, feetMax: 8, inchesMax:0},
        {entryName: "Half-Orc", feetMin: 5, inchesMin: 0, feetMedian: 5, inchesMedian: 9, feetMax: 7, inchesMax:0},
        {entryName: "Dragonborn", feetMin: 5, inchesMin: 8, feetMedian: 6, inchesMedian: 3, feetMax: 6, inchesMax:10},
        {entryName: "Tiefling", feetMin: 4, inchesMin: 11, feetMedian: 5, inchesMedian: 6, feetMax: 6, inchesMax:0}
      ]

    const calcScale=props.calcScale;
    const scale=props.scale;
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Entry</th>
                    <th>1:1 min (ft/in)</th>
                    <th>1:{scale} min (mm)</th>
                    <th>1:1 median (ft/in)</th>
                    <th>1:{scale} median/average (mm)</th>
                    <th>1:1 max (ft/in)</th>
                    <th>1:{scale} max (mm)</th>
                </tr>
            </thead>
            <tbody>
                {scaleEntryArray.map((scaleEntry) => (
                    <tr>
                        <td>{scaleEntry.entryName}</td>
                        <td>{scaleEntry.feetMin}'{scaleEntry.inchesMin}</td>
                        <td>{calcScale(scaleEntry.feetMin,scaleEntry.inchesMin, scale)}</td>
                        <td>{scaleEntry.feetMedian}'{scaleEntry.inchesMedian}</td>
                        <td>{calcScale(scaleEntry.feetMedian,scaleEntry.inchesMedian, scale)}</td>
                        <td>{scaleEntry.feetMax}'{scaleEntry.inchesMax}</td>
                        <td>{calcScale(scaleEntry.feetMax,scaleEntry.inchesMax, scale)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default ScaleTable;
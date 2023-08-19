function areacal(){
    //console.log('yes')
    const base = document.getElementById('base');
    const baseString = base.value;
    const finalbase = parseFloat(baseString)
    console.log(baseString)
    const height = document.getElementById('height');
    const heightString = height.value;
    const finalheight = parseFloat(heightString)
    console.log(heightString)

    const fianlArea = finalbase*finalheight;
    console.log(fianlArea);

    const areaprint = document.getElementById('Area');
    const areaString = areaprint.innerText;
    const finalarea = parseFloat(areaString);

    areaprint.innerText=fianlArea;
}
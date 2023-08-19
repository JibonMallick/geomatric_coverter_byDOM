function areacal2(){
    const base = document.getElementById('base2');
    const baseString = base.value;
    const finalbase = parseFloat(baseString)
    console.log(baseString)
    const height = document.getElementById('height2');
    const heightString = height.value;
    const finalheight = parseFloat(heightString)
    console.log(heightString)

    const fianlArea = finalbase*finalheight*0.5;
    console.log(fianlArea);

    const areaprint = document.getElementById('Area2');
    const areaString = areaprint.innerText;
    const finalarea = parseFloat(areaString);

    areaprint.innerText=fianlArea;

}
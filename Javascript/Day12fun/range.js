const fun1=()=>{
    const red1=document.getElementById('red1').value;
    const green1=document.getElementById('green1').value;
    const blue1=document.getElementById('blue1').value;
    document.getElementById('container').style.backgroundColor=`rgb(${red1},${green1},${blue1})`;
    console.log(red1);
}
const fun2=()=>{
    const green=document.getElementById("green2").value
    const red=document.getElementById("red2").value
    const blue=document.getElementById("blue2").value
    document.getElementById("container").style.backgroundColor=`rgb(${red}, ${blue},${green})`
}
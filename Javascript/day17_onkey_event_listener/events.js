// const res=document.querySelector('img');
// console.log(res);

// const up=()=>{
//     console.log('up clicked');
// }

// const down=()=>{
//     console.log('down clicked');
// }


const color=document.getElementById('color').value;
console.log(color);
const deg=document.getElementById('deg').value;
console.log(deg);

const fun=()=>{
    console.log('function is called');
    document.body.style.backgroundImage=`linear-gradient(${deg}deg, ${color})`;
}


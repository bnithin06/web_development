const circle=document.getElementById('circle');
// console.log(circle);
let horMovement=0;
let verMovement=0;

document.addEventListener('keydown',(val)=>{
    // console.log(val);
    if (val.key.toLocaleLowerCase()=='d'){
        //  console.log(val.key);
        horMovement+=5
        circle.style.transform=`translate(${horMovement}px,${verMovement}px)`;
    }
})
document.addEventListener('keydown',(val)=>{
    // console.log(val);
    if (val.key.toLocaleLowerCase()=='a'){
        //  console.log(val.key);
        horMovement-=5
        circle.style.transform=`translate(${horMovement}px,${verMovement}px) rotate(180deg)`;
    }
})

document.addEventListener('keydown',(val)=>{
    // console.log(val);
    if (val.key.toLocaleLowerCase()=='w'){
        //  console.log(val.key);
        // horMovement-=5
        verMovement-=5
        circle.style.transform=`translate(${horMovement}px,${verMovement}px) rotate(90deg)`;
    }
})

document.addEventListener('keydown',(val)=>{
    // console.log(val);
    if (val.key.toLocaleLowerCase()=='s'){
        //  console.log(val.key);
        // horMovement-=5
        verMovement+=5
        circle.style.transform=`translate(${horMovement}px,${verMovement}px)rotate(90deg)`;
    }
})
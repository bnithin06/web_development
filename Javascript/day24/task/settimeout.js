const circle=document.getElementById('container');
console.log(circle);
// setTimeout(()=>{
//     circle.style.transform='translate(93vw,0vh)'
// },1000);

// setTimeout(()=>{
//     circle.style.transform='translate(93vw,85vh)'
// },2000);

// setTimeout(()=>{
//     circle.style.transform='translate(0vw,85vh)'
// },3000);

// setTimeout(()=>{
//     circle.style.transform='translate(0vw,0vh)'
// },4000);


setInterval(()=>{
    circle.style.transform='translate(93vw,0vh)'
},1000);

setInterval(()=>{
    circle.style.transform='translate(93vw,85vh)'
},2000);

setInterval(()=>{
    circle.style.transform='translate(0vw,85vh)'
},3000);

setInterval(()=>{
    circle.style.transform='translate(0vw,0vh)'
},4000);
const allInput=document.getElementsByTagName('input');
console.log(allInput);
const redColor=()=>{
    document.body.style.backgroundColor='red';
}
allInput[0].addEventListener('click',redColor);

allInput[1].addEventListener('click',()=>{
    document.body.style.backgroundColor='green'
});


console.log('hello');
const element=document.getElementById('cartoon');
console.log(element);
const hello=document.getElementById('hello');
// console.log(hello);
hello.addEventListener('click',()=>{
    console.log('button is clicked');
    element.style.backgroundColor='red'
})

const content=document.querySelector('#content');
content.innerHTML='<h1>hello</h1>';
content.textContent='jai shree ram';

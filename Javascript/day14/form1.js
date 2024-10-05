// const inputAll=document.querySelectorAll('input');
// console.log(inputAll);

// const Login=()=>{
//     console.log('Login button clicked');
//     const usermail=inputAll[0].value;
//     const password=inputAll[1].value;
//     console.log(usermail,password);
//     if (usermail==='bnithin@gmail.com' && password==='1234'){
//         console.log('Login successful');
//     }
//     else{
//         console.log('Login Failed');
//     }
// }




// const changeColor=()=>{
//     console.log('hello,you are requested to change the background color..😅');
//     const color=document.getElementById('color');
//     // console.log(color.value);
//     document.body.style.backgroundColor=color.value;
//     console.log('the background color is changed..😍');
// }






function onChangeBackground(){
    var color=document.getElementById('color');
    document.body.style.backgroundColor=color.value;
}


const container=document.getElementById('container');
console.log(container);
container.innerHTML='<h3>i am hemanth kumar</h3>';

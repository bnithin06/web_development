console.log('Variable Hoisting..😅');

// we can access the variable before the declaration

console.log(a);
var a=10;

// console.log(d);
// let d=20;

// console.log(c);
// const c=30;

// function add(){
//     var k=10;
// }
// add();
// console.log(k);

add=()=>{
    console.log('i am function');
}
add();

console.log(typeof typeof 5);
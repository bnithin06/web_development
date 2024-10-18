// function fun(){
//     console.log('This is  a call back Function');
// }

// function HigerOrderFunction(callback){
//     console.log('this is a higherorder function');
//     callback();
// }
// HigerOrderFunction(fun);



var arr=[100,320,45,132,911,756,78,97];
// console.log(arr);
// var resarr=arr.filter((val)=>{
//     return val>=20 && val <=60;
// })
// console.log(resarr);


// var resarr=arr.filter((val)=>{
//     return val%2==0;
// });

// console.log(resarr);

// var resarr=arr.filter(is);

// function is(arr){
//     return arr%2==0;
// }
// console.log(resarr);



const fruits=['apple','grapes','pineapple','mango','watermelon','red','green','blue','orange'];
console.log(fruits);
// var resfruits=fruits.filter(st=>{
//     return st.length>5;
// })
// console.log(resfruits);




// function lengthCheck(st){
//     k=st.length
//     return k>5;
// }


// var res=fruits.filter(lengthCheck);
// console.log(res);



// var res1=fruits.map(st=>{
//     return '* '+st+' *';
// })
// console.log(res1);

// console.log(arr);
// arr=arr.map(val=>{
//     return val*2;
// })

// console.log(arr);


// for(val in fruits){
//     console.log(val);
// }
// console.log('----------------');
// for(val of fruits){
//     console.log(val);
// }

// console.log('---------------');
// var k=fruits.keys()
// console.log(k);

// for(val of k){
//     document.body.innerHTML=val;
//     console.log(val);
// }



console.log(arr);
var arr1=arr.sort((a,b)=>{
    // return a-b;
    return b-a;
});
console.log(arr1);


var res=arr1.fill('orange',2);
console.log(res);



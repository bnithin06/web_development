const res=document.querySelector('#result');
console.log(res);
let num=1;
const inc=()=>{
    if(num>=1 && num<10){
        num++;
        res.value=num;
    }
}

// decrement
const dec=()=>{
    if(num>1 && num<10){
        num--;
        res.value=num;
    } 
}
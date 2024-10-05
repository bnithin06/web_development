const val=document.getElementById('val');
var num=1
console.log(val.value);

document.addEventListener('keydown',(e)=>{
    // console.log(e.key);
    if (num>=1 && num <=10){
        if (e.key=='+'){
            num++;
            val.value=num;
        }
        if(e.key=='-'){
            num--;
            val.value=num;
        }
    }
})
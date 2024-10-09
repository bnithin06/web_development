const car=document.getElementsByTagName('img');
document.addEventListener('keydown',(e)=>{
    // console.log('button is cliked');
    if(e.key.toLocaleLowerCase()=='a'){
        car[0].style.transform=`translate()`;
    }

})
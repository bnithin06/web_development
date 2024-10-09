const circleright=document.querySelectorAll('.circleright');
console.log(circleright);
const fun=(val)=>{
    // console.log(val);
    if (val=='three'){
        // console.log('i am nithin kumar');
        circleright[2].style.backgroundColor='blue';
        circleright[2].style.transform='translate(-164vh,0px)';
    }
    else if (val=='one'){
        // console.log(circleright[0]);
        circleright[0].style.backgroundColor='blue';
        circleright[0].style.transform='translate(-164vh,0px)';
    }
    else if(val='two'){
        circleright[1].style.backgroundColor='blue';
        circleright[1].style.transform='translate(-164vh,0px)';
    }
}
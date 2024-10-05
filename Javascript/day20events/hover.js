var num=0
var cont=document.getElementById("container");
function fun(){
    num++
    if(num==0){
        cont.style.backgroundImage="url(./../../assests/images/Nature3.jpg)";
        cont.style.backgroundPosition="-200px -200px"
    }
    else if(num==1){
        cont.style.backgroundImage="url(./../../assests/images/02.jpeg";
        cont.style.backgroundPosition="-200px -200px"

    }
    else if(num==2){
        cont.style.backgroundImage="url(./../../assests/images/03.webp";
        cont.style.backgroundPosition="-200px -200px"
        
    }
    else{
        num=0;
        cont.style.backgroundImage="url(./../../assests/images/888.jpeg";
        cont.style.backgroundPosition="-200px -200px";
        
    }
}
function fun(){
    var col=document.querySelector("select").value;
    document.getElementById("rangu").innerHTML=`I LIKE ${col} COLOR`;
    document.getElementById("rangu").style.color=col;
}
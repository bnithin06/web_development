document.body.style.backgroundImage="linear-gradient(75deg,teal,skyblue)";

document.body.style.backgroundSize='100% 100vh';


const container=document.getElementById('container');
// console.log(container);

container.style.width='45vh';
container.style.height='50vh';
container.style.backgroundColor='darkblue';
container.style.borderRadius='0.5rem';
container.style.boxShadow='2px 2px 5px darkblue';
container.style.padding='1rem';
container.style.display='flex';
container.style.flexDirection='column'
container.style.justifyContent='space-evenly';



const heading =document.getElementById('heading');
heading.style.color='white';
heading.style.textAlign='center';
heading.style.fontSize='3vh';
heading.style.letterSpacing='1vh';
heading.style.padding='10px';

var allInp=document.querySelectorAll('input');
console.log(allInp);
for(i=0;i<=1;i++){
    allInp[i].style.width="80%"
    allInp[i].style.height="3vw"
    allInp[i].style.backgroundColor="transparent"
    allInp[i].style.border="none"
    allInp[i].style.outline="none"
    allInp[i].style.borderBottom="2px solid white"
    allInp[i].style.color="white"
    allInp[i].style.fontsize="2vw"
    allInp[i].style.letterspacing="1vw"
    allInp[i].style.fontweight="bold"
    allInp[i].style.marginleft="10%"
    allInp[i].style.required="true"
}
allInp[0].placeholder="Enter the Email"
allInp[1].placeholder="Enter the Password"






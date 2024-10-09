const divTag=document.createElement('div');
console.log(divTag);
document.body.appendChild(divTag);
divTag.style.width='200px';
divTag.style.height='200px';
divTag.style.backgroundColor='teal';
divTag.style.display='flex';
divTag.style.justifyContent='center';
divTag.style.alignItems='center';

const divTag2=document.createElement('div');
console.log(divTag);
divTag.appendChild(divTag2);
divTag2.style.width='100px';
divTag2.style.height='100px';
divTag2.style.backgroundColor='red';

const table=document.createElement('table');
document.body.append(table);

// table.style.borderCollapse='collapse'
// table.style.marginTop='3rem';
// table.innerHTML='<tr><th>Name</th><td>Hemanth</td></tr> <tr><th>Gender</th><td>Male</td></tr> <tr><th>Contact</th><td>7013167147</td></tr>';
// const thh=document.getElementsByTagName('th');
// thh[0].style.border='2px solid red';
// thh[1].style.border='2px solid red';
// thh[2].style.border='2px solid red';

// const thd=document.getElementsByTagName('td');
// thd[0].style.border='2px solid red';
// thd[1].style.border='2px solid red';
// thd[2].style.border='2px solid red';


// var tableRow1=document.createElement('tr');
// console.log(tableRow1);
// table.appendChild(tableRow1);

// var tableData1=document.createElement('td');
// tableRow1.appendChild(tableData1).innerText='Name';

// var tableData2=document.createElement('td');
// tableRow1.appendChild(tableData2).innerText='Hemanth';


// var tableRow2=document.createElement('tr');
// console.log(tableRow2);
// table.appendChild(tableRow2);

// var tableData3=document.createElement('td');
// tableRow2.appendChild(tableData3).innerText='Gender';

// var tableData4=document.createElement('td');
// tableRow2.appendChild(tableData4).innerText='Male';


// var tableRow3=document.createElement('tr');
// console.log(tableRow3);
// table.appendChild(tableRow3);

// var tableData5=document.createElement('td');
// tableRow3.appendChild(tableData5).innerText='Contact';

// var tableData6=document.createElement('td');
// tableRow3.appendChild(tableData6).innerText='7013167147';


table.style.borderCollapse='collapse';
table.style.marginTop='2rem';
var row=[];
var col=[];
for(i=0;i<4;i++){
    row[i]=document.createElement('tr');
    table.appendChild(row[i]);
    for(j=0;j<2;j++){
        col[j]=document.createElement('td');
        row[i].appendChild(col[j]);
        col[j].style.border='2px solid black';
    }
}

var alltd=document.getElementsByTagName('td');
alltd[0].innerText='Name';
alltd[1].innerText='Hemanth';
alltd[2].innerText='Gender';
alltd[3].innerText='Male';
alltd[4].innerText='Contact';
alltd[5].innerText='9908169058';
alltd[6].innerText='Email';
alltd[7].innerText='hemanth@gmail.com';


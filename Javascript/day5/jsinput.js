// console.log(window);
// var bool=window.confirm('Google asking your Location');
// console.log(bool);


// var a=prompt('Enter The Number1!🔢');
// var b=prompt('Enter The Number2!🔢');
// alert("by adding two numbers this is output bro..😅😊 : "+a+b+"  Dont panic mava Two numbers are  String Type so concatenated mava..😉");


// const empname=document.getElementById('empname');
// console.log(empname);
// empname.innerText=prompt('Enter the EmployeeName');
// document.getElementById('empid').innerText=prompt('Enter a EmpId');
// document.getElementById('empdesg').innerText=prompt('Enter EmpDesg');
// document.getElementById('empdept').innerText=prompt('enter the department');
// document.getElementById('empsal').innerText=prompt('enter the salary');
// document.getElementById('empphono').innerHTML=prompt('Enter the Phone Number');


let res='';
const N = document.querySelectorAll('.otp');
N.forEach((e) => {
    e.addEventListener('input', () => {
        console.log('Value changed');
        res+=e.value;
    });
});

verifyOtp=()=>{
    console.log(res);
    console.log('verifyotp clicked!');
}

resend=()=>{
    res='';
}

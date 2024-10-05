// let hh=prompt('Enter the time in 24hrs Format..☺️');
hh=24;
let am_pm='AM';
if (hh>=12){
    am_pm='PM';
    if(hh>12){
        hh=hh%12;
    }
}
if(hh==0){
    hh=12;
}
console.log(hh+':'+'00 '+am_pm);



// 00 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 00

// const num=prompt('Enter a number');
// if (num%2==0){
//     console.log('even');
// }
// else{
//     console.log('odd');
// }

// const marks=prompt('Enter your child subject mark to know the Grade..—12');
// if (marks>90){
//     console.log('O Grade 😍');
// }
// else if(marks>80 && marks<=90){
//     console.log('A+ Grade 😎')
// }
// else{
//     console.log('Sorry Failed 😌');
// }


// write a program to print fizz if it is multiple of two,buzz if it is multiple of 3,print fizz-buzz if it is multiple of both 3 and 2,the range is 0 to 100


for(let i=1;i<=100;i++){
    if(i%3==0 && i%2==0){
        console.log('fizz-buzz');
    }
    else if(i % 2== 0){
        console.log('fizz');
    }
    else if(i % 3==0){
        console.log('buzz');
    }
    else{
        console.log(i);
    }
}

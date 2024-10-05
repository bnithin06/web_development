// var st="apple";
// // console.log(st.slice(-4));
// // a p p l e
// // 0 1 2 3 4
// // -5 -4 -3 -2 -1

// // console.log(st.slice(-8,-3));
// const poem=`She sells seashells by the seashore,
// The shells she sells are seashells, I’m sure.
// So if she sells seashells on the seashore,
// Then I’m sure she sells seashore shells`;
// console.log(poem);
// console.log(`length of poem is ${poem.length}.`);
// console.log(poem.indexOf('She'));
// console.log(poem.lastIndexOf('shells'));
// // console.log(poem.replace('shells','not-shells'));
// // console.log(poem.replaceAll('shells','not-shells'));

// const str=poem.replace('shells are','donot shell');
// console.log(str);
// const idx=poem.indexOf('shell');
// const sub=poem.substring(idx+1);
// const res=poem.substring(0,idx+1)+sub.replace('shells','nithin');
// console.log(res);


let day=prompt('enter a index');
day=parseInt(day);
switch(day){
    case 0: console.log('sunday');
    break;
    case 1: console.log('monday');
    break;
    default: console.log('invalid index');
}


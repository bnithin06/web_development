const num=20;
console.log(typeof num);
console.log(typeof null);
console.log(typeof 'nithin');
console.log(typeof 5);
console.log(typeof true);
var N=1234565434232324234847843516813568133415;
console.log(N);
var k=BigInt(N);
console.log(k);


var foo=Symbol();
var fool=Symbol();
console.log(foo==fool);
console.log(foo===fool);

console.log(5=='5');
console.log(5==='5');

var d=NaN; //not a number
// NaN is a special type of number
console.log(typeof d);
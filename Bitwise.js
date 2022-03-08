/*
There are 6 bitwise operator
01) AND - &
02) OR - |
03) NOT - !
04) XOR - ^
05) LSHIFT - <<
06) RSHIFT - >>
 */
let x=4
let y=5

console.log(x&y);
console.log(x^y);
console.log(x|y);
console.log(x<<y);
console.log(x>>y);
console.log(x>>>y);

// bitwise OR operator example
let a = 12; 
let  b = 25; 

result = a | b; 
console.log(result); // 29

// bitwise XOR operator example
let a = 12; 
let  b = 25; 

result = a ^ b; 
console.log(result); // 21

// bitwise NOT operator example
let  b = 12;

result = ~b;

console.log(result); // -13

//leftshift
let a = 8;
let  b = 1;

result = a << b;

// 1 ( 00000000000000000000000000010000 )
console.log(result);

//rightshift
let a = 8;
let b = 1;
// 11111111111111111111111111111101
let c = -3;

result = a >> b;
result1 = c >> b;

// 4 (00000000000000000000000000000100)
console.log(result); 

// -1 (11111111111111111111111111111111)
console.log(result1); 
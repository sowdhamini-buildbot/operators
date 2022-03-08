/*
There are 3 logical operator
01) And - &&
02) Or - ||
03) Not - !
*/
// &&

var x=49
var y=22
var z=55

if (x>y && x>z){
    console.log("x ")
}
else if (x>y && x>z) {
    console.log("z")
}else{
    console.log(" y")
};


if (x>y || x<z){
    console.log("x ")
}
else if (x>y || x==z) {
    console.log("z ")
}else{
    console.log(" y is greater number")
};
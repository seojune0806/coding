/* 입력 콘솔 입력 받고 출력 하는 법
var args = process.argv;
console.log(args);
*/

/* boolean : 참 과 거짓 
var a = true
console.log(a)

var b = 5
console.log(b > 10) // >, < , <=,>= , === !=
S
console.log(a && false)
*/
/* 조건문 작성
var a = 5
if (a > 10){
    console.log("a가 10보다 크다")
}
else if (a ==10){
    console.log("a가 10과 같다")

}
else{
    console.log("a가 10보다 작다")
}
*/
/* 반복문
for(var i = 0; i < 10 ; i++){
    console.log(i)
}
var a = 1
while ( a<10){
    console.log(a)
    a += 1
}
*/



var dataFolder = "./data";
var fs = require("fs")
let list = 0
fs.readdir(dataFolder , function(error , filelist){
    console.log(filelist)
})
console.log(list)
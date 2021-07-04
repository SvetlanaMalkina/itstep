//Предыдущее домашнее задание.

//Задание 4 (???)

/*function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let number = getRandomInRange(1000, 9999);
let guessing = +prompt('Какое четырёхзначное число загадано? Ваши предположения.');
do (){
    if()
}*/


//Текущее домашнее задание

//Задание 1

/*mas = [15, 'hello', 'trump', 23, 'world', 999, 176];
let f = 0;
for (let f = 0  ; f < mas.length; f++){
    let result = f + '-' + mas[f];
    document.write(result);
}*/

//Задание 2
/*
function chessboard(a, b) {
    let slash1 = "# ";
    let slash2 = " #";
    let option1 = "";
    let option2 = "";
    for (let i = 0; i < a / 2; i++) {
        option1 += slash2;
        option2 += slash1;
    }

    for (let j = 0; j < b; j++) {
        if (j % 2 != 0) {
            console.log(option1);
        } else {
            console.log(option2);
        }
    }
}
chessboard(8, 8);
*/

//Задание 3

 /*let arr= [
    [45,3,2,98,54,-99,-100,12], //15
    [3,9,4,2,5,4,1], //28
    [-12,-32,-10,78,-14,36], //46
    [-14,3], //-11
    [15,18,16] //49
    //127
]
let sum = 0;

function foo(array) {

    array.forEach(function(value, index) {
        Array.isArray(value) ? foo(value) : sum += value;
    });

    return sum;
}

console.log(foo(arr));
*///Задание 4

/*let mas1 = [3,5,12,-8,1];
let min = mas1[0];
let max = mas1[0];
let avg =0;
for (let num of mas1) {
    if (min > num) {
        min = num;
    } else {
        min = min;
    }
    if (max < num) {
        max = num;
    } else {
        max = max;
    }
}
console.log(min);
console.log(max);
let i = 0;
for (i = mas1[0]; i < mas1.length; i++){
    avg (mas1)
    console.log(avg)*/

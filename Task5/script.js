
//Задание 1

/*mas = [15, 'hello', 'trump', 23, 'world', 999, 176];
let f = 0;
for (let index = 0  ; index < mas.length; index++){
    let result = index + ' --- ' + mas[index] + '<br>';
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
    [45,3,2,98,54,-99,-100,12],
    [3,9,4,2,5,4,1], //28
    [-12,-32,-10,78,-14,36],
    [-14,3],
    [15,18,16]
]
let sum = 0;
for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[i].length; j++){
        sum += arr[i][j];
    }
}
console.log(sum);*/

//Задание 4

/*
let mas1 = [1,2,3,4,5];
function min (arr){
    let minEl = arr[0];
    for (const minElement of arr){
        minEl=minElement<minEl?minElement:minEl;
    }
    return minEl;
}
function max (arr){
    let maxEl = arr[0];
    for (const maxElement of arr){
        maxEl=maxElement>maxEl?maxElement:maxEl;
    }
    return maxEl;
}
function avg (arr){
    let sum1=0;
    for(const arrElement of arr){
        sum1 += arrElement;
    }
    return sum1/arr.length;
}

console.log(min(mas1));
console.log(max(mas1));
console.log(avg(mas1));*/

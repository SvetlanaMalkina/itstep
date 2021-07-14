// Task1
// let data = '2025-12-31';
// let dataNew = data.split('-').reverse().join('.');
// console.log(dataNew)

//Task2
// let mas = [1,2,3,4,5];
// let mas1 = mas.slice(0,3);
// console.log(mas1)

//Task3
// let mas = [1,2,3,4,5];
// mas.splice(3,0,'a','b','c');
// console.log(mas);

//Task4
// let mas = [
//     [25, -36, 14, 48, 32, 14, -24],
//     [14, -9, -14, -32, 34, 15, 9],
//     [77, 65, 48, -68, -99, 13, 2],
//     [-74, -25, 37, 45, 65, -88, -55],
//     [-77, -66, 55, 44, 33, 22, -11],
//     [54, -36, -48, 72, -88, 32, -14],
//     [1, 2, 3, 4, 5, 6, -7]
// ];
// let sum=0;
// for (let i=1;i<mas.length;i++){
//     for (let j=0;j<i;j++){
//         sum+=mas[i][j]
//     }
// }
// console.log(sum)


//Task5 EPAM-задание
let string = 'GTAT';
function DNAStrand(str) {
    let mas = str.split('');
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] === 'A') {
            mas[i] = 'T';
        } else if (mas[i] === 'T') {
            mas[i] = 'A';
        } else if (mas[i] === 'G') {
            mas[i] = 'C';
        }else if (mas[i] === 'C') {
            mas[i] = 'G';
        }
    }
    let result = mas.join('');
    console.log(result);
    return result;
}
DNAStrand('AAGGTTCC');

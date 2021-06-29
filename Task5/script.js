//Домашнее задание 1

//Первое задание
//var a = 1, b = 1, c, d;
//c = ++a; alert(c);// 2
/*
Так как знак инкремента стоит до переменной а, то к её значению 1 прибавляем 1. Значение с=2
 */
//d = b++; alert(d);// 1
/*
Так как знак инкремента стоит после переменной b, то её значение увеличится на 1 после присвоения значения переменной d.
Соответственно, значение b=1 и зеначение d=1
 */
//c = (2+ ++a); alert(c);// 5
/*
Так как знак инкремента стоит до переменной а, то она увеличится на 1. Прошлое значение переменной а=2. 2+1=3. с=2+3=5
 */
//d = (2+ b++); alert(d);// 4
/*
Так как знак инкремента стоит после переменной b, её значение увеличится после присвоения значения переменной d.
На данном этапе значение переменной b=2. d=2+2=4
 */
//alert(a);// 3
/*
последнее значение переменной а было равно 3. Оно остаётся прежним, так как других действий с этой переменной не производилось.
 */
//alert(b);// 3
/*
Значение b увеличилось за счёт постинкремента и стало равно 3
 */

//Второе задание
/*var a = 2;var x = 1 + (a *= 2);
x=5*/

//Третье задание
/*let a=5;
let b=2;
if (a>=0 && b>=0){
    console.log(a-b);
}
else if(a<0 && b<0){
    console.log(a*b);
}
else if(a>=0 && b<0){
    console.log(a+b);
}
else if(a<0 && b>=0){
    console.log(a+b);
}*/

//Четвёртое задание
/*let a=11;
switch (a){
    case 0:
        console.log(0+'-'+1+'-'+2+'-'+3+'-'+4+'-'+5+'-'+6+'-'+7+'-'+8+'-'+9+'-'+10+'-'+11+'-'+12+'-'+13+'-'+14+'-'+15);
        break;
    case 1:
        console.log(1+'-'+2+'-'+3+'-'+4+'-'+5+'-'+6+'-'+7+'-'+8+'-'+9+'-'+10+'-'+11+'-'+12+'-'+13+'-'+14+'-'+15);
        break;
    case 2:
        console.log(2+'-'+3+'-'+4+'-'+5+'-'+6+'-'+7+'-'+8+'-'+9+'-'+10+'-'+11+'-'+12+'-'+13+'-'+14+'-'+15);
        break;
    case 3:
        console.log(3+'-'+4+'-'+5+'-'+6+'-'+7+'-'+8+'-'+9+'-'+10+'-'+11+'-'+12+'-'+13+'-'+14+'-'+15);
        break;
    case 4:
        console.log(4+'-'+5+'-'+6+'-'+7+'-'+8+'-'+9+'-'+10+'-'+11+'-'+12+'-'+13+'-'+14+'-'+15);
        break;
    case 5:
        console.log(5+'-'+6+'-'+7+'-'+8+'-'+9+'-'+10+'-'+11+'-'+12+'-'+13+'-'+14+'-'+15);
        break;
    case 6:
        console.log(6+'-'+7+'-'+8+'-'+9+'-'+10+'-'+11+'-'+12+'-'+13+'-'+14+'-'+15);
        break;
    case 7:
        console.log(7+'-'+8+'-'+9+'-'+10+'-'+11+'-'+12+'-'+13+'-'+14+'-'+15);
        break;
    case 8:
        console.log(8+'-'+9+'-'+10+'-'+11+'-'+12+'-'+13+'-'+14+'-'+15);
        break;
    case 9:
        console.log(9+'-'+10+'-'+11+'-'+12+'-'+13+'-'+14+'-'+15);
        break;
    case 10:
        console.log(10+'-'+11+'-'+12+'-'+13+'-'+14+'-'+15);
        break;
    case 11:
        console.log(11+'-'+12+'-'+13+'-'+14+'-'+15);
        break;
    case 12:
        console.log(12+'-'+13+'-'+14+'-'+15);
        break;
    case 13:
        console.log(13+'-'+14+'-'+15);
        break;
    case 14:
        console.log(14+'-'+15);
        break;
    case 15:
        console.log(15);
        break;
    default:
        console.log('Error');
        break;
}*/

//Пятое задание

/*
function sum(arg1,arg2){
    return(arg1+arg2)
}
avg = sum(5,3);
console.log(avg);

function difference(arg1,arg2){
    return(arg1-arg2)
}
avg = difference(5,3);
console.log(avg);

function multiplication(arg1,arg2){
    return(arg1*arg2)
}
avg = multiplication(5,3);
console.log(avg);

function division(arg1,arg2){
    return(arg1/arg2)
}
avg = division(5,3);
console.log(avg);
*/

//Шестое задание
// function mathOperation(arg1, arg2, operation){
//     switch (operation='+'){
//         case '+':
//             return sum(arg1,arg2)
//     }
//     switch (operation='-'){
//         case '-':
//             return difference(arg1,arg2)
//     }
//     switch (operation='*'){
//         case '*':
//             return multiplication(arg1,arg2)
//     }
//     switch (operation='/'){
//         case '/':
//             return division(arg1,arg2)
//     }
// }
// let num1=9;
// let num2=3;
// let oper='+';
// let result=mathOperation(num1,num2,oper);
// console.log(result)

//Домашняя работа 2
//Задание 1
function power(val, pow) {
    if (pow!=1) {
        return val * power(val, pow - 1);
    } else {
        return val;
    }
}
console.log( power(2, 4) );

//Задание 2
let sum=prompt('Введите сумму в рублях');
if(sum[sum.length - 2] === '1') {
    sum = +sum;
    alert(`Ваша сумма ${sum} рублей успешно зачислена`)
}
else {
    switch (Number(sum[sum.length - 1])){
        case 1:
            alert(`Ваша сумма ${sum} рубль успешно зачислена`);
            break;
        case 2:
        case 3:
        case 4:
            alert(`Ваша сумма ${sum} рубля успешно зачислена`);
            break;
        default:
            alert(`Ваша сумма ${sum} рублей успешно зачислена`);
            break;
    }
}

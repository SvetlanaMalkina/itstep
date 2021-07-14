//Задача 1

//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата

let length = 5;
let width = 10;

function areaRectangle (a,b){
    if (a && b){
        return a*b;
    }
    else {
       return  a*a;
    }
}

console.log(areaRectangle(length));

//Задача 2

//Написать функцию, которая проверяет, является ли переданное ей число совершенным.
//Совершенное число – это число, равное сумме всех своих собственных делителей.

let temp = 6;

function perfectNumber (num){
    let sum = num-1;
    for(let i = 2; num>1;){
        if(!(num%i)){
            sum-=i;
            num=num/i;
        } else i++;
    }
    if(!sum)
        return ("Число: является совершенным");
    else
        return (`Число: не является совершенным`);

}

console.log(perfectNumber(temp));


//Задача 2

//Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
//и выводит только те числа из диапазона, которые являются совершенными.
//Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
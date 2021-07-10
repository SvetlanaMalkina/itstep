//Задача 1

//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let mas1 = ['Kira', 'Aleksandr', 'Valentina', 'Artur', 'Olga', 'Violeta'];
let newMas1 = mas1.filter(elem => elem.length > 5);
console.log(newMas1);

//Задача 2

//Дан массив с числами. Найдите сумму первых N элементов до первого нуля.

let mas2 = [1, 2, 3, 0, 4, 5, 6];
let sum = 0;
function sumElements (arr){
    for(let index = 0; index < arr.length; index++) {
        if (arr[index] !== 0){
            sum += arr[index];
        }
        if (arr[index] === 0){
            break;
        }
    }
}
sumElements(mas2);
console.log(sum);

//Задача 3

// У вас есть массив объектов user, и в каждом из них есть user.name.
// Напишите код, который преобразует их в массив имён.

let user = [
    { name: "Вася", age: 25 },
    { name: "Петя", age: 30 },
    { name: "Маша", age: 28 }
    ];
let result1 = user.map (item => item.name);
console.log(result1);

//Задача 4

//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age
// и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

let users = [
    { name: "Вася", age: 25 },
    { name: "Петя", age: 30 },
    { name: "Маша", age: 28 }
    ];
users = users.map (item => item.age);
function getAverageAge(arr){
    let sum1 = 0;
    for(let i = 0; i < arr.length; i++) {
        sum1 += arr[i];
    }
    let num = sum1 / arr.length;
    return Math.ceil(num);
}
console.log(getAverageAge(users));

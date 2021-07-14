//Методы массивов
//pop/push/shift/unshift
let mas1 = [10, 20, 30]
let num1 = mas1.push(14) // push - добавляет элемент в конец массива
console.log('Num1: ', num1)
console.log(mas1)
let num2 = mas1.unshift(0)  // unshift - добавляет элемент в начало массива
console.log('Num2: ', num2)
console.log(mas1)
let num3 = mas1.pop();  // pop - удаляет последний элемент и возвращает его значение
console.log('Num3: ', num3)
console.log(mas1)
let num4 = mas1.shift();  // shift - удаляет первый элемент и возвращает его значение
console.log('Num4: ', num4)
console.log(mas1)
console.log('---------------------------------')
//split - позволяет по указанному символу разбить строку и все данные вывести в виде массива
// str='aaaa,bbbb,cc'    let  mas=str.split(',') => ['aaaa','bbbb','cc']
// join - из массива делает строку с указанием разделителя
// reverce - переворачивает массив
let str = 'abcdefghi'
console.log(str)
str = str.split('')
console.log(str)
str = str.reverse()
console.log(str)
str = str.join('')
console.log(str)

str = 'My new project'
str = str.split('').reverse().join('')
console.log(str)
console.log('---------------------------------')

//В массиве arr=[74,25,14,-25,32,12] поменять первый и последний элемент местами.
arr = [74, 25, 14, -25, 32, 12] // [25,14,-25,32,12,74]
let el = arr.pop()
console.log(arr)
// el1=arr.shift()
arr.push(arr.shift())  //    arr.shift()=74    =>    arr.push(74)
console.log(arr)
arr.unshift(el)
console.log(arr)
console.log('---------------------------------')
let car = {
    name: 'Audi',
    age: 2021,
    isOld: true
}
console.log(car)
console.log(car.isOld)
delete car.isOld
console.log(car)
console.log(car.isOld)
//splice, slice
//splice(<нач. позиция>,<сколько эл. удалить>,<добавляемые элементы>.....)
//slice (<нач. позиция>,<кон. позиция не включается в выборку>)
arr = [74, 25, 14, -25, 32, 12]
console.log(arr)
//delete arr[2] //Проблема!!! Массив не изменяет свой размер
// console.log(arr.length)
// console.log(arr[2])
let num5 = arr.splice(2, 3)
console.log(arr) // [ 74, 25, 12 ]
arr.splice(1, 1, 0, 0, 0, 1, 2, 2, 2, 3, 3, 3, 3)
console.log(arr)
arr.splice(0, 0, 333)
console.log(arr)
console.log(num5)
arr = [74, 25, 14, -25, 32, 12]
let mas2 = arr.slice(arr.length - 3)
console.log(arr)
console.log(mas2)
console.log('---------------------------------')

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
// массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
arr = [1, 2, 3, 4, 5]
console.log(arr)
arr.splice(1, 0, 'a', 'b')
arr.splice(6, 0, 'c')
arr.splice(8, 0, 'e')
console.log(arr)
console.log('---------------------------------')

//indexOf - поиск индекса указанного элемента
//lastIndexOf
arr = [74, 25, 14, -25, 32, 12]
let num6 = arr.indexOf(-25)
console.log(num6)
num6 = arr.indexOf(-252)
console.log(num6)

//includes - если элемент есть в массиве - возвращает true иначе false
let num7 = arr.includes(-25)
console.log(num7)
num7 = arr.includes(-252)
console.log(num7)

//Анонимные и стрелочные функции
function test(num1) {
    let result = num1
    return result
}

/*let test = function (num1) {
    let result=num1
    return result
}*/

arr = [74, 25, 14, -25, 32, 12]
let sum1 = 0
/*arr.forEach(function (item,index,array) {
    sum1+=item
})
console.log(sum1)*/

//Найти произведение элементов массива на их индекс
let proizv = function (item, ind) {
    sum1 += item * ind
}
arr.forEach(proizv)
console.log(sum1)

//Стрелочная функция
let str0 = (num1, num2) => {
    let result = num1 + num2
    return result
}
let str01 = (num1) => {
    let result = num1
    return result
}
let str02 = num1 => {
    let result = num1 * 25
    return result
}
let str03 = num1 => {
    return num1 * 25
}
let str04 = num1 => num1 * 25

arr = [74, 25, 14, -25, 32, 12]
let sum3 = 0
arr.forEach(item => sum3 += item)
console.log(sum3)

//ДНК
let stroka='ATTGC'
function DNAStrand(str) {
    //1. Сделать массив из строки
    //2.1. В цикле перебрать все элементы массива
    //2.2. Проверить каждый элемент массива и выполнить замену mas[i]==="A"  =>  mas[i]="T"
    //3. Собрать массив в строку
}

console.log(DNAStrand(stroka))






//concat - объединяет несколько массивов в один
let mas1 = [2, 4, 6, 8]
let mas2 = [3, 5, 9]
let mas3 = [11, 22, 33, 44]
mas1 = mas1.concat(mas2, mas3)
console.log(mas1);
//replace - позволяет заменить указанный символ в строке, новым символом
let str = '25-06-2020'
str = str.replace('-', '.')
    .replace('-', '.')
console.log(str)

// forEach ()
mas3 = [11, 22, 33, 44]
mas3.forEach((item, index, arr) => {
    mas3[index] = -item
    console.log(index + ': ' + arr + ':::' + mas3)
    console.log('--------------------')
})
console.log(mas3)
console.log('********************************************')
//findIndex - позволяет получить индекс элемента на основании переданной функции
let mas4 = [-4, -3, 2, -4, 3, 16, 8, 9, 3, 4, 7, 6]
/*let res1 = mas4.findIndex(
    function (item) {
        return item>0 && item%4==0
    }
)*/
let res1 = mas4.findIndex(item => item > 0 && item % 4 == 0)
console.log(res1) //5 или -1 (если элемент не найден)
//find - позволяет вернуть из функции элемент на котором сработал callback
let res2 = mas4.find(item => item > 0 && item % 4 == 0)
console.log(res2) // 16 или undefined (если элемент не найден)
//filter - позволяет составить массив из элементов удовлетворяющих определенному условию
mas4 = [-4, -3, 2, -4, 3, 16, 8, 9, 3, 4, 7, 36]
let res3 = mas4.filter(item => item > 0 && item % 4 == 0)
console.log(res3) // [16,8,4,36]  или [] (если элементы не найдены)
let mas5 = [
    {name: 'Oleg', age: 16, isMarid: true},
    {name: 'Olga', age: 32, isMarid: false},
    {name: 'Zhenya', age: 27, isMarid: true},
    {name: 'Elena', age: 24, isMarid: true},
    {name: 'Irina', age: 35, isMarid: false},
    {name: 'Jack', age: 19, isMarid: true},
]
let res4 = mas5.filter(person => person.age > 25 && person.age <= 33)
console.log(res4)

// map  - позволяет модиффицировать элементы массива
mas4 = [-4, -3, 2, -4, 3, 16, 8, 9, 3, 4, 7, 36]
let res5 = mas4.map((item, index, arr) => {
    if (item > 0) return item / 2
    else {
        return item - 7
    }
})
console.log(res5)

//reduce - метод позволяет сохранять промежуточные значения
mas4 = [-4, -3, 2, -4, 3, 16, 8, 9, 3, 4, 7, 36]
let sum = mas4.reduce((accum, item, index, arr) => {
    if (item > 0 && index <= 5) {
        return accum + item
    }
    return accum
}, 0)
console.log(sum)
//Задача Epam
let str1 = 'GTAT';
let result1 = str1.split('')
    .reduce((accum, item) => {
        if (item === 'A') {
            return accum + 'T';
        } else if (item === 'T') {
            return accum + 'A';
        } else if (item === 'G') {
            return accum + 'C';
        } else if (item === 'C') {
            return accum + 'G';
        }
        else return accum
    }, '')
console.log(result1);
//sort - позволяет сортировать данные
console.log('------------------------')
//Функция задает правило сортировки
// return 1 , если a>b
// return 0 , если a=b
// return -1, если a<b
let sortFunc=function (a,b) {
    if (a>b)return 1
    else if(a===b)return 0
    else return -1
}
mas4 = [2,3,25,31,11,125,1,27,131]
let result4=mas4.sort(sortFunc)
console.log(result4)

mas5 = [
    {name: 'Oleg', age: 16, isMarid: true},
    {name: 'Olga', age: 32, isMarid: false},
    {name: 'Zhenya', age: 27, isMarid: true},
    {name: 'Elena', age: 24, isMarid: true},
    {name: 'Irina', age: 35, isMarid: false},
    {name: 'Jack', age: 19, isMarid: true},
]
let sortFunc1=function (a,b) {
    if (a.age>b.age)return 1
    else if(a.age===b.age)return 0
    else return -1
}
let sortFunc2=function (a,b) {
    if (a.isMarid===true && b.isMarid!==true)return -1
    else if(a.isMarid===true && b.isMarid===true)return 0
    else return 1
}
console.log(mas5.sort(sortFunc1))
console.log(mas5.sort(sortFunc2))













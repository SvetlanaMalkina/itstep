//Первое задание
let a=+prompt('Введите температуру по Цельсию')
alert(a)
let b=a*1.8+32
alert(b)

//Второе задание
let name=('Василий')
let admin=name
console.log(admin)

//Третье задание
let c=10 + 10 + "10";
console.log(c)
/*
1. Суммируем числа 10 и 10, получаем 20.
2. Добавляем строчное значение "10".
3. Выводим в консоль.
4. На выходе получаем 2010.
 */
let d=10 + "10" + 10;
console.log(d)
/*
1. К числу 10 прибавляем строчное значение "10". Получаем 1010.
2. К полученному выражению прибавляем число 10.
3. Выводим в консоль.
4. На выходе получаем 101010.
 */
let e=10 + 10 + + "10";
console.log(e)
/*
1. Суммируем числа 10 и 10, получаем 20.
2. Прибавляем к полученному результату число 10. Числом оно будет являться, так как в числовое значение
из строчного его переводит знак +, стоящий перед ним.
3. Выводим в консоль.
4. На выходе получаем 30.
 */
let f=10 / -"";
console.log(f)
/*
1.
 */
let g=10/+"2,5";
console.log(g)
/*
1. Так как перед строчным значением "2,5" стоит знак +, то он переводит строку в числовое значение.
Но так как вместо точки в дроби стоит запятая, программа не воспринимает значение как число.
2. В итоге 10 делим на не число и получаем при выводе в консоль NaN (не число).
 */
    // Задание 2. Шахматная доска. Напишите программу, создающую строку, содержащую
    // решётку 8х8, в которой линии разделяются символами новой строки.
    // На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.

    for (let row=1;row<=8;row++){
        let str='';
        for (let col=1;col<=8; col++){
            if (row%2!=0){
                str=col%2!=0?str+'#':str+' '
            }
            else{
                str=col%2!=0?str+' ':str+'#'
            }
        }
        console.log(str)
    }


    /*Задание 3. Посчитать сумму всех элементов массива:

        arr= [
            [45,3,2,98,54,-99,-100,12],
            [3,9,4,2,5,4,1],
            [-12,-32,-10,78,-14,36],
            [-14,3],
            [15,18,16]
        ]*/

    let arr= [
        [45,3,2,98,54,-99,-100,12],
        [3,9,4,2,5,4,1],
        [-12,-32,-10,78,-14,36],
        [-14,3],
        [15,18,16]
    ]
    let sum=0;
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<arr[i].length;j++){
            sum+=arr[i][j]
        }
    }
    console.log(sum)
    console.log('****************************************')
    /*Задание 4.  При работе с массивами возникает несколько типичных проблем, и ваша цель - решить их.
        Вы должны выполнять 3 функции: max, min и avg для поиска минимального значения, максимального значения и среднее значение данного массива.
        Например:
    min ( 1 ,  2 ,  3 ,  4 )  // возвращает 1;
    max ( 1 ,  2 ,  3 ,  4 )  // возвращает 4;
    avg ( 1 ,  2 ,  3 ,  4 )  // возвращает 2,5;
    Обратите внимание, что вы должны вернуть 0, если параметры не указаны или передан пустой массив.
    */
    let mas=[1,2,3,4]
    function min(arr) {
        if (!Array.isArray(arr) || arr.length==0){
            return 0
        }
        let minEl=arr[0]
        for (const minElement of arr) {
            minEl=minElement<minEl?minElement:minEl
        }
        return minEl
    }
    function max(arr) {
        if (!Array.isArray(arr) || arr.length==0)return 0
        let maxEl=arr[0]
        for (const maxElement of arr) {
            if (maxElement > maxEl) {
                maxEl = maxElement
            }
        }
        return maxEl
    }
    function avg (arr){
        if (!Array.isArray(arr) || arr.length==0)return 0
        let sum=0;
        for (const arrElement of arr) {
            sum+=arrElement
        }
        return sum/arr.length
    }
    console.log(min())
    console.log(min([]))
    console.log(min(mas))
    console.log(max(mas))
    console.log(avg(mas))







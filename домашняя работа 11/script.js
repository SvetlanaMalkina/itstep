//Задание 1

let num = 275;
let tip = (num >=50 && num <=300) ? 'Счёт был ' + num + ', чаевые ' + (num * 0.15) + ', общая сумма' + (num + (num * 0.15)):
    'Счёт был ' + num + ', чаевые ' + (num * 0.2) + ', общая сумма ' + (num + (num * 0.2));
console.log(tip);

//Задание 2

function calcTip (sum){
    if(sum >=50 && sum <=300){
        return sum * 0.15;
    }
    else{
        return sum * 0.2;
    }
}
console.log(calcTip(100));

let bills = [125, 555, 44];

function arrTips (arr){
    let tips = [];
    for (let i = 0; i < arr.length; i++){
        tips[i] = calcTip(arr[i])
    }
    return tips;
}
console.log(arrTips(bills));

function invoiceAndTip (arr){
    let tips = [];
    for (let i = 0; i < arr.length; i++){
        tips[i] = calcTip(arr[i]) + arr[i];
    }
    return tips;
}
console.log(invoiceAndTip(bills));
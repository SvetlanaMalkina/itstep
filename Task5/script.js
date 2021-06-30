//Домашнее задание 3

//Задание 1

let a=0;
while (a<=100){
    console.log(a++)
}

//Задание 2

let i = 0;
let str = '';
for (i = 1; i <= 20; i++){
    str += '*';
    console.log(str)
}

//Задание 3

let b = 0;
console.log(b + '-' + 'это ноль')
for(let b = 1; b <= 10; b++) {
    if(b % 2 !== 0){
        console.log(b + '-' + 'нечётное число');
    }
    else{
        console.log(b + '-' + 'чётное число');
    }
}

//Задание 4 (???)

/*
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
alert()*/

//Задание 1

class TextNews{
    constructor(title,date,
                text, tags) {
        this.title=title;
        this.date= date;
        this.text=text;
        this.tags=tags.join(' ');
    }

    outputDate (date){
        if ((new Date().getUTCDate()) - this.date.slice(0,2) < 1){
            return 'Сегодня';
        }
        else if ((new Date().getUTCDate()) - this.date.slice(0,2) === 1){
            return `${(new Date().getUTCDate()) - this.date.slice(0,2)} день назад`;
        }
        else if ((new Date().getUTCDate()) - this.date.slice(0,2) >=2 && (new Date().getUTCDate()) - date.slice(0,2) <= 4){
            return `${(new Date().getUTCDate()) - this.date.slice(0,2)} дня назад`;
        }
        else if ((new Date().getUTCDate()) - this.date.slice(0,2) >= 5 && (new Date().getUTCDate()) - date.slice(0,2) <= 7){
            return `${(new Date().getUTCDate()) - this.date.slice(0,2)} дней назад`;
        }
        else {
            return `${('0' + (new Date().getUTCDate())).slice(-2)}.${('0' + (new Date().getUTCMonth() +1)).slice(-2)}.${new Date().getUTCFullYear()}`;
        }
    }
    print = function (){
        let result = `<h1 style="font-size: 28px; color: black"> ${this.title} </h1>
        <p style="font-size: 18px; color: black">${this.outputDate(this.date)}</p>
        <p style="font-size: 20px; color: black"> ${this.text} </p>
        <p style="font-size: 18px; color: black">${this.tags}</p>`;
        document.write(result);
    }
}

let myObj = new TextNews ('Заголовок', '21.07.2021',
    'Очень интересный текст про очень интересное что-то, которое вам прям просто очень надо',
    ['#интересно', '#весело', '#прикольно']);
myObj.print();


//Задание 2

let number = prompt("Введите целое число от 0 до 999");
function NumToObj(num)
{
    let arrNumber = num.split('');
    let objNumber = {};
    if (arrNumber.length == 3){
        objNumber['units'] = +arrNumber[0];
        objNumber['tens'] = +arrNumber[1];
        objNumber['hundreds'] = +arrNumber[2];
        return objNumber;
    }
    if (arrNumber.length == 2){
        objNumber['units'] = +arrNumber[0];
        objNumber['tens'] = +arrNumber[1];
        objNumber['hundreds'] = 0;
        return objNumber;
    }
    if (arrNumber.length == 1){
        objNumber['units'] = +arrNumber[0];
        objNumber['tens'] = 0;
        objNumber['hundreds'] = 0;
        return objNumber;
    }
    else {
        console.log('Введённые данные не соответствуют условию');
        return objNumber;
    }

}
let obj = NumToObj(number);
console.log(obj);

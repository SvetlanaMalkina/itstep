//Задание 1

class TextNews{
    constructor(title,date,
                text, tags) {
        this.title=title;
        this.date=date;
        this.text=text;
        this.tags=tags;
    }
    print (){
        let tit = `<h1 style="font-size: 28px; color: black"> ${this.title} </h1>`;
        let date = `${this.date}`;
        if (date = (new Date()).getTime()){
            date = 'Сегодня';
        }

        let text = `<p style="font-size: 18px; color: black"> ${this.text} </p>`;
        let tag = `${this.tags}`;
        document.write(tit, date, text, tag);
    }
}

let myObj = new TextNews ('Заголовок', '24.07.2021',
    'Очень интересный текст про очень интересное что-то, которое вам прям просто очень надо',
    ['#интересно', '#весело', '#прикольно'].join(' '));
myObj.print();

//Задание 2

/*
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
*/

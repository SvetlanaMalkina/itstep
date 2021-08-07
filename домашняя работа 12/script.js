//Задание 1.

//ES5
/*
function Product (name, price){
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function (){
    return (this.price * 0.75);
}
let obj = new Product('cake', 3);
console.log(obj);
obj.make25PercentDiscount();

console.log('------------------------------------------');
//ES6
class Product1{
    constructor(name1, price1) {
        this.name = name1;
        this.price = price1;
    }
    make25PercentDiscount(){
        return (this.price * 0.75);
    }
}

let obj1 = new Product1('cake', 3);
console.log(obj1);
obj1.make25PercentDiscount();

//Задание 2

//ES5
function Post (author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function (newText){
    this.text = newText;
}
let obj3 = new Post('ABC', "Первый текст", '03-08-2021');
obj3.edit('Второй текст');
console.log(obj3);

function AttachedPost(author,text, date){
    Post.call(this, author,text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.makeTextHighlighted = function (){
    this.highlighted = true;
}
AttachedPost.prototype.constructor = AttachedPost;
let obj4 = new AttachedPost('DEF', 'Третий текст', '31-07-2021');
obj4.edit('Четвёртый текст');
obj4.makeTextHighlighted();
console.log(obj4);

//ES6
class Post1 {
    constructor(author,text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(newText){
        this.text = newText;
    }
}
let obj5 = new Post1('ABC', "Первый текст", '03-08-2021');
obj5.edit('Второй текст');
console.log(obj5);

class AttachedPost1 extends Post1{
    constructor(author,text, date) {
        super(author,text, date);
    }
    fullEdit1(newText){
        super.edit();
    }
    makeTextHighlighted(){
        this.highlighted = true;
    }
}
let obj6 = new AttachedPost1('DEF', 'Третий текст', '31-07-2021');
obj6.edit('Четвёртый текст');
obj6.makeTextHighlighted();
console.log(obj6);
*/

//Задание 3

class NewsFeed {
    constructor(arr) {
        this.arr = arr;
    }
    get getArray() {
        if (this.arr.length === 0) {
            return undefined;
        }
        return this.arr[this.arr.length - 1];
    }
    print(){
        return this.arr.join(' ');
    }
    newPush(text){
        return this.arr.push(text);
    }
    newDelete(i){
        return (delete this.arr[i]);
    }
    sortNews(){
        return this.arr.sort((a,b)=>{
            let dataA=new Date(a.split('"')[1])
            let dataB=new Date(b.split('"')[1])
            return dataB-dataA
        })
    }
let newsObj = new NewsFeed(['Новости спорта',
    'Погода на завтра',
    'Происшествия за #сегодня',
    'Новости политики'
])
document.write(newsObj.print());
newsObj.newPush('Последние новости часа');
newsObj.newDelete(2);
console.log(newsObj);
newsObj.getArray();
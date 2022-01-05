let calendar = document.querySelector('#calendar'); //календарь целиком
let bodyCal = calendar.querySelector('.body-cal'); //тело календаря с числами месяца
let prev = calendar.querySelector('.prev'); //стрелка перехода на предыдущий месяц
let next = calendar.querySelector('.next'); //стрелка перехода на следующий месяц
let info = calendar.querySelector('#info');
let center = document.querySelector('#center');
let isShowMonth = false;
let isSettingsEdit = false;
let elemDateClick = null;
let settings = {
    holidays: [],
    workDays: []
}
let holidaysCollection = new Set();
let workDaysCollection = new Set();


calendar.monthName = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

//Переменные для дат каленраря
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let getActualDate = function (ind = 0) {
    let dayIndex = ind; //0-дни до текущего месяца, 1- текущий месяц, 2- следующий за текущим месяц

    return function (year, month, num) {
        let findDay = new Date(year, month, num)
        if (num === 1) {
            dayIndex++;
        }
        if (dayIndex === 0) {
            findDay.setMonth(findDay.getMonth() - 1)
        } else if (dayIndex === 2) {
            findDay.setMonth(findDay.getMonth() + 1)
        }
        return findDay;
    }
}


//Функция формирования календаря
draw();

function draw() {
    year = date.getFullYear();
    month = date.getMonth();
    info.innerText = calendar.monthName[month] + ' ' + year
    let arr = range(getLastDay(year, month)); //массив из чисел дней месяца

    let firstWeekDay = getFirstWeekDay(year, month); //день недели (число) первого дня месяца
    let lastWeekDay = getLastWeekDay(year, month); //день недели (число) последнего дня месяца
    const normArr = normalize(arr, firstWeekDay, 6 - lastWeekDay, year, month, isShowMonth)
    //двухмерный массив из чисел месяца и пустых ячеек
    let nums = chunk(normArr, 7);
    createTable(bodyCal, nums, month, year)
    addColorToWeekends()
}

function addColorToWeekends() {
    let days = document.querySelectorAll('.cell');
    days.forEach(day => {
        if (day.dataset.day === '6' || day.dataset.day === '0') {
            day.classList.add('weekD');
        }
    })
}


//Формирование вида календаря на странице HTML
function createTable(parent, arr, month, year) {
    let actualDate = getActualDate()
    parent.innerHTML = '';
    let cells = [];

    for (let sub of arr) {
        let tr = document.createElement('tr');
        for (let num of sub) {
            let findDay = actualDate(year, month, num);
            let td = document.createElement('td');
            td.innerHTML = num;
            td.dataset.myDate = `${year}-${month}-${num}`
            if (num) {
                td.dataset.day = findDay.getDay();
            }
            tr.appendChild(td);
            cells.push(td);
            td.classList.add('cell')
        }
        parent.appendChild(tr);

    }

    return cells;
}

let cell = document.querySelector('.cell');

window.onload = () => {
    getSettingsLS();
    updateElement();
}

function getSettingsLS() {
    const data = localStorage.getItem('settings');
    if (data) {
        settings = JSON.parse(data);
        holidaysCollection = new Set(settings.holidays);
        workDaysCollection = new Set(settings.workDays);
    }
}

//Сохранение выходных
function saveHolidays() {
    settings.holidays = Array.from(holidaysCollection);
    settings.workDays = Array.from(workDaysCollection);
    localStorage.setItem('settings', JSON.stringify(settings))
    isSettingsEdit=false
    choosingWeekend.classList.remove('active');

}

//Закрытие настроек без сохранения их
function closeHolidaysSettings() {
    holidaysCollection = new Set(settings.holidays);
    workDaysCollection = new Set(settings.workDays);
    updateElement();
}

function removeHolidayClass(elem, myDate) {
    elem.classList.remove('weekD')
    holidaysCollection.delete(myDate)
    workDaysCollection.add(myDate)
}

function addHolidayClass(elem, myDate) {
    elem.classList.add('weekD')
    workDaysCollection.delete(myDate)
    holidaysCollection.add(myDate)
}

function changeHoliday(event) {
    if (isSettingsEdit) {
        let elem = event.target
        let myDate = elem.dataset.myDate;
        if (holidaysCollection.has(myDate)) {
            removeHolidayClass(elem, myDate);
        } else if (workDaysCollection.has(myDate)) {
            addHolidayClass(elem, myDate);
        } else if (elem.classList.contains('weekD')) {
            removeHolidayClass(elem, myDate);
        } else {
            addHolidayClass(elem, myDate);
        }
    }
}

function updateElement() {
    let allElements = document.querySelectorAll('.cell')
    allElements.forEach(item => {
        let myDate = item.dataset.myDate;
        if (holidaysCollection.has(myDate)) {
            item.classList.add('weekD')
        } else if (workDaysCollection.has(myDate)) {
            item.classList.remove('weekD')
        }
    })
}

let choosingWeekend = document.getElementById('choosing-weekend');
let saveWeekend = document.getElementById('save-weekend');
choosingWeekend.addEventListener('click', function () {
    choosingWeekend.classList.add('active');
    isSettingsEdit = true;
})
bodyCal.addEventListener('click', changeHoliday)

document.addEventListener('DOMContentLoaded', function () {
    cell = localStorage.getItem('elem');
})
saveWeekend.addEventListener('click', saveHolidays)
//Выделение выходных дней по умолчанию
/*function addingADayOff(arr){

}
addingADayOff(bodyCal);*/

//Функция для добавления в arr пустых ячеек в начале и конце месяца
function normalize(arr, left, right, year, month, showMonth = true) {
    let actualDate = getActualDate(1)
    let findDay = actualDate(year, month - 1, 1);
    for (let i = 0; i < left; i++) {
        if (showMonth) {
            findDay.setDate(findDay.getDate() - 1)
            arr.unshift(findDay.getDate());

        } else {
            arr.unshift('');
        }

    }
    for (let i = 0; i < right; i++) {
        if (showMonth) {
            arr.push(i + 1);
        } else {
            arr.push('');
        }
    }


    return arr;
}

//Функция, которая получает номер для недели первого дня месяца
function getFirstWeekDay(year, month) {
    let date = new Date(year, month, 1);
    let num = date.getDay();

    if (num === 0) {
        return 6;
    } else {
        return num - 1;
    }
}

//Функция, которая получает номер для недели последнего дня месяца
function getLastWeekDay(year, month) {
    let date = new Date(year, month + 1, 0);
    let num = date.getDay();

    if (num === 0) {
        return 6;
    } else {
        return num - 1;
    }
}

//Функция, которая возвращает номер последнего дня месяца.
function getLastDay(year, month) {
    month++;
    let date;
    if (month === 12) {
        date = new Date(year, 0, 1); //В конструктор месяцы передаются от(0 до 11)
    } else {
        //В конструктор месяцы передаются от(0 до 11), с учетом этого код построен на обработку требуемого нам диапазона
        // Если ты за 1-принимаешь январь, то тут new Date(2021, 1, 1) мы устанавливаем февраль, а строкой ниже
        //отнимая один день, переходим к последнему дню января
        date = new Date(year, month, 1);
    }
    date.setDate(date.getDate() - 1);  //Переход к последнему дню предыдущего, от установленного месяца
    return date.getDate();
}


function getNextYear(year, month) {
    if (month === 11) {
        year += 1;
    }
    return
}

function getNextMonth(month) {
    month += 1;
}


//Функция, которая принимает целое число и создаёт массив чисел от 1 до этого числа (количество дней в месяце).
function range(count) {
    let arr = [];

    for (let i = 1; i <= count; i++) {
        arr.push(i);
    }

    return arr;
}


//Разбиение массива на двухмерный, где n - это количество элементов в подмассиве
function chunk(arr, n) {
    let result = [];
    let count = Math.ceil(arr.length / n);

    for (let i = 0; i < count; i++) {
        let elems = arr.splice(0, n);
        result.push(elems);
    }

    return result;
}

next.addEventListener('click', function () {
    date.setMonth(date.getMonth() + 1)
    draw();
    updateElement();
});

prev.addEventListener('click', function () {
    date.setMonth(date.getMonth() - 1)
    draw();
    updateElement();
});

let gear = document.querySelector('.gear');
let gearActive = document.querySelector('.gear-active');
let tSection = document.querySelector('.tSection');
let t1 = document.querySelector('.t1');

let btnSettings = document.querySelector('.settings');
tSection.addEventListener('click', function (event) {
    let elem = event.target;
    if (elem === gear) {
        t1.style.display = 'none';
        btnSettings.style.display = 'flex';
    }
    if (elem === gearActive) {
        btnSettings.style.display = 'none';
        t1.style.display = 'flex';
    }
})
center.addEventListener('click', function () {
    date = new Date();
    draw();
})

//Выбранный день
bodyCal.addEventListener('click', function (event) {
    let elem = event.target;
    if (!elem) {
        return
    } else {
        let classPr = document.querySelector('.selection');
        if (classPr) {
            classPr.classList.remove('selection');
        }
        elem.classList.add('selection')
    }
})



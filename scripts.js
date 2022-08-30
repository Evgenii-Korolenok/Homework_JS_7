// /* Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
// электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
// счетчик горения лампочки. */

// let lamp = {
//     power: '1000w',
//     v: 220,
//     c: 'E27',
//     on: false,
//     resurs: 10,
//     switchOn: function(){
//         if (!this.resurs) return 'Лампа перегорела';
//         if (!this.on) this.resurs--
//         this.on = !this.on;
//     },
//     setResurs: function(r){
//         if (isNaN(r)) return;
//         if (r <= 0) return;
//         this.resurs = r;
//     },
// };
// console.log(lamp.power);
// console.log(lamp.c);


// /* Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
// почта), проверка введенной информации, например: проверить возраст – должен быть
// целым неотрицательным числом больше 18, вывод информации о конкретном
// контакте, вывод всех контактов. */

// let contacts = {
//     get:function () {
//         this.name = prompt('Введите ваше ФИО');
//         this.age = prompt('Введите ваш возраст');
//         this.examAge();
//         this.phone = prompt('Введите ваш номер телефона(+375-##-###-##-##)');
//         this.examPhone();
//         this.email = prompt('Введите вашу эл. почту');
//     },
//     examAge:function () {
//         if (this.age < 18) {
//             alert('Доступ запрещен');
//         } else {
//             alert('Доступ разрешен');
//         }
//     },
//     examPhone:function () {
//         regExp = /^\+?\d+\-\d{2}\-\d{3}-\d{2}-\d{2}/g;
//         resPhone = regExp.test(this.phone);
//         if (resPhone === false) {
//             alert('Неверный формат записи');
//         }
//     },
//     show:function () {
//         console.log(`ФИО - ${this.name}`);
//         console.log(`Возраст - ${this.age}`);
//         console.log(`Номер телефона - ${this.phone}`);
//         console.log(`Эл. почта - ${this.email}`);
//     },
// };
// contacts.get();
// contacts.show();


/* Пример из урока FE120. Lesson 19 
Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.*/

function Calculator (name) {
    this.operandA = 0;
    this.operandB = 0;
    this.rez = 0;
    this.operation = null;
    this.name = name;
    this.pole = null;

    this.init = function() {
        this.pole = document.getElementById('pole');
        let clear = document.getElementById('clear');
        let rezBtn = document.getElementById('rez');
        let addBtn = document.getElementById('add');
        let minBtn = document.getElementById('min');
        let multBtn = document.getElementById('mult');
        let divBtn = document.getElementById('div');

        this.pole.value = this.operandA;
        clear.addEventListener('click', () => this.clear());
        
        addBtn.addEventListener('click', () => this.add());
        minBtn.addEventListener('click', () => this.minus());
        multBtn.addEventListener('click', () => this.mult());
        divBtn.addEventListener('click', () => this.div());
        rezBtn.addEventListener('click', () => this.getRezult());

    }

    this.fMethod = function() {
        if (this.operation) {
            this.getRezult ();
            this.operandA = this.rez;
            this.operandB = +this.pole.value;
            this.pole.value = 0;
        } else {
            this.operandA = +this.pole.value;
            // this.operandB = b;
            this.pole.value = 0;
        }
    }

    this.add = function() {
        this.fMethod();
        this.operation = '+';
        return this;
    }

    this.getRezult = function () {
        this.operandB = +this.pole.value;
        switch (this.operation) {
            case '+':
                this.rez = this.operandA + this.operandB
                break;
            case '-':
                this.rez = this.operandA - this.operandB
                break;
            case '*':
                this.rez = this.operandA * this.operandB
                break;
            case '/':
                this.rez = this.operandA / this.operandB
                break;
        }
        this.pole.value = this.rez;
        return this;
    }

    this.minus = minus;

    this.mult = () => {
        this.fMethod();
        this.operation = '*';
        console.log(this);
        return this;
    }

    this.div = function () {
        this.fMethod();
        this.operation = '/';
        return this;
    }

    this.getAnswer = function () {
        return this.rez;
    }

    this.clear = function() {
        this.operandA = 0;
        this.operandB = 0;
        this.operation = null;
        this.rez = 0;
        this.pole.value = this.operandA;
    }
}

function minus () {
    this.fMethod();
    this.operation = '-';
    console.log(this);
    return this;
}

let calc1 = new Calculator ('Калькулятор 1').init();
// let calc2 = new Calculator ('Калькулятор 2');

// console.log(calc1.mult === calc2.mult);
// console.log(calc1.minus === calc2.minus);

/* В консоли:
calc2.add(12, 6).add(2).getRezult().getAnswer(); */


let button = document.querySelector('.btn');
button.addEventListener('click', function() {
    console.log(this);
});

/* Стрелочная функция, такая же, как и верхняя */
button.addEventListener('click', () => {
    console.log(this);
});

/* Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
счетчик горения лампочки. */

let lamp = {
    power: '1000w',
    v: 220,
    c: 'E27',
    on: false,
    resurs: 10,
    switchOn: function(){
        if (!this.resurs) return 'Лампа перегорела';
        if (!this.on) this.resurs--
        this.on = !this.on;
    },
    setResurs: function(r){
        if (isNaN(r)) return;
        if (r <= 0) return;
        this.resurs = r;
    },
};
console.log(lamp.power);
console.log(lamp.c);


/* Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
почта), проверка введенной информации, например: проверить возраст – должен быть
целым неотрицательным числом больше 18, вывод информации о конкретном
контакте, вывод всех контактов. */

let contacts = {
    get:function () {
        this.name = prompt('Введите ваше ФИО');
        this.age = prompt('Введите ваш возраст');
        this.examAge();
        this.phone = prompt('Введите ваш номер телефона(+375-##-###-##-##)');
        this.examPhone();
        this.email = prompt('Введите вашу эл. почту');
    },
    examAge:function () {
        if (this.age < 18) {
            alert('Доступ запрещен');
        } else {
            alert('Доступ разрешен');
        }
    },
    examPhone:function () {
        regExp = /^\+?\d+\-\d{2}\-\d{3}-\d{2}-\d{2}/g;
        resPhone = regExp.test(this.phone);
        if (resPhone === false) {
            alert('Неверный формат записи');
        }
    },
    show:function () {
        console.log(`ФИО - ${this.name}`);
        console.log(`Возраст - ${this.age}`);
        console.log(`Номер телефона - ${this.phone}`);
        console.log(`Эл. почта - ${this.email}`);
    },
};
contacts.get();
contacts.show();
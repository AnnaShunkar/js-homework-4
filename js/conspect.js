//---ЗАМИКАННЯ---//
/*function createNewSum(n) {
    return function () {
        console.log(10 * n);
    }
}
const calc = createNewSum(5);
calc();*/
//приклад на URL-ках
/*function createUrl(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    }
}
const comUrl = createUrl('com');
console.log(comUrl("google"));*/
//-------------------------------------------------------------------------------------------------
//---this---//
/*
function hello() {
    console.log("hello", this);
}
hello();
const user = {
    name: "Ivan",
    city: "Odessa",
    sayHello: hello,
}
user.sayHello();*/

/*function changeColor() {
    console.log(this);
    this.style.background = 'green';
}
// document.querySelector('div').onclick = changeColor;
let user = document.querySelectorAll('div');
user.forEach(function (element) {
    element.onclick = changeColor;
});*/
//-------------------------------------------------------------------------------------------------
//--- МЕТОД BIND ---//
/*function hello() {
    console.log(this);
}
const user = {
    name: 'anna',
    age: 18,
    hello: hello,
    sayHelloWindow: hello.bind(window),
    info: function () {
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
    }
};
user.info();
const Olga = {
    name: "Olga",
    age: 30,
}
user.info.bind(Olga)();*/
//-------------------------------------------------------------------------------------------------
//---МЕТОД CALL---//
/*const userInfo = {
    name: "name",
    age: 90,
    logInfo: function (job) {
        console.group(`${name}info: `);
        console.log(`Name is : ${this.name}`);
        console.log(`Age is : ${this.age}`);
        console.log(`Job is : ${job}`);
        console.groupEnd;
    }
}
const Ivan = {
    name: "Ivan",
    age: 30,
};
userInfo.logInfo.call(Ivan, "developer");*/
//-------------------------------------------------------------------------------------------------
//---МЕТОД APPLY---//
/*const showUserInfo = {
    name: 'Anna',
    age: 17,
    logInfo: function (job,city) {
        console.group(`${name}info: `);
        console.log(`Name is : ${this.name}`);
        console.log(`Age is : ${this.age}`);
        console.log(`Job is : ${job}`);
        console.log(`City is : ${city}`);
        console.groupEnd;
    },
};
const Ivan = {
    name: "Ivan",
    age: 30,
};
showUserInfo.logInfo.apply(Ivan, ["developer", "Kyiv"]);*/
//-------------------------------------------------------------------------------------------------
/*const message = function (name, stars) {
    console.log(`${name}`,`${this.hotel}`,`${stars}`)
};
const Bukovel = { hotel: 'Bukovel' };
const Turist = { hotel: "Turist" };

message.call(Bukovel, 'Anna', '5');
message.call(Turist, 'Ivan', '3');

message.apply(Bukovel, ['Anna', '5']);
message.apply(Turist, ['Ivan', '3']);

message.bind(Bukovel, 'Anna', '5')();
message.bind(Turist, 'Ivan', '3')();*/

/*const cart = {
    showItems() {
        console.log("В корзині: ", this.items);
    },
};
const woman = {
    items: ["Сукня, туфлі"],
};

const man = {
    items: ["Сорочка, кроси"],
};

const kids = {
    items: ["Штани, шорти"],
};
cart.showItems.bind(man)();
document.querySelector('#wom').addEventListener('click', cart.showItems.bind(woman));
document.querySelector('#man').addEventListener('click', cart.showItems.bind(man));
document.querySelector('#kid').addEventListener('click', cart.showItems.bind(kids));*/


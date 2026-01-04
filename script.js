// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
/*const studentInfo = {
    name: "Anna",
    speciality: "teacher",
    score: 90,
    skipLessons: 2,
    logInfo: function (speciality,score, skipLessons) {
        console.group(`${name}info: `);
        console.log(`Name is : ${this.name}`);
        console.log(`Speciality is : ${this.speciality}`);
        console.log(`Average score : ${this.score}`);
        console.log(`Skip lessons : ${this.skipLessons}`);
        console.groupEnd;
    },
}
const Ivan = {
    name: "Ivan",
    speciality: "marketing",
    score: 95,
    skipLessons: 0,
};
const Olga = {
    name: "Olga",
    speciality: "programmer",
    score: 94,
    skipLessons: 1,
};
const Nata = {
    name: "Nata",
    speciality: "logist",
    score: 91,
    skipLessons: 5,
};
studentInfo.logInfo();
studentInfo.logInfo.bind(Ivan)();
studentInfo.logInfo.call(Olga);
studentInfo.logInfo.apply(Nata);*/


// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

/*const info = {
    showMeaning() {
        console.log(this.text);
    }
};
const htmlInfo = {
    text: "HTML - це мова розмітки, відповідає за структуру, заголовки, текст, зображення",
}
const cssInfo = {
    text: "CSS - це каскадні таблиці стилів, відповідає за зовнішній вигляд.",
}
document.querySelector("#htmlBtn").addEventListener("click", info.showMeaning.bind(htmlInfo));
document.querySelector("#cssBtn").addEventListener("click", info.showMeaning.bind(cssInfo));*/

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4
/*function shop(name, count, price) {
    return console.log("назва:", name,", ціна:", price);
}
shop("banana", 30, 4.5);
shop("cherry", 58,  1.3);
shop("orange", 89, 3.4);*/
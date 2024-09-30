"use strict";


/**
 * Creates a day.
 * @param {*} dayName name of the day
 * @param {*} id unique identificator for element
 */
function createDay(dayName, id) {
    let createSection = document.createElement(`section`);

    let section = week.appendChild(createSection);
    section.classList.add(`weekDay`);
    section.setAttribute(`id`, id);

    let createName = document.createElement(`p`);
    let name = section.appendChild(createName);
    name.innerHTML = dayName.trim().toUpperCase();
    name.classList.add(`dayName`);

    let createList = document.createElement(`ul`);
    let ul = section.appendChild(createList);
    ul.classList.add(`subjectNumber`);
    ul.classList.add(`hidden`);

    let createURLs = document.createElement(`ul`);
    let URLs = section.appendChild(createURLs);
    URLs.classList.add(`links`);
    URLs.classList.add(`hidden`);

    name.addEventListener(`click`, () => {
        let shedule = ul.classList;

        if (shedule.contains(`hidden`)) {
            shedule.remove(`hidden`);

            // name.style.writingMode = 'vertical-rl';
            // name.style.transform = `rotate(180deg)`;
            // name.style.borderLeft = `solid 3px hsl(240, 93%, 65%)`;
            // name.style.borderBottom = `none`;
        } else {
            shedule.add(`hidden`);

            // name.style.writingMode = 'horizontal-tb';
            // name.style.transform = `rotate(0deg)`;
            // name.style.borderLeft = `none`;
            // name.style.borderBottom = `solid 3px hsl(240, 93%, 65%)`;
        }

    });
}


/**
 * Fills the day with rows.
 * @param {*} dayOfTheWeek day that fills
 */
function fillDay(dayOfTheWeek) {
    let numberOfSubjects = 7;
    let subjectNumber = dayOfTheWeek.querySelector('.subjectNumber');

    for (let count = 1; count <= numberOfSubjects; count++) {
        let subject = document.createElement(`li`);
        let number = document.createElement(`p`);

        subjectNumber.appendChild(subject);
        subject.appendChild(number);

        number.innerHTML = count;
    }
}


/**
 * Fills the day with subjects.
 * @param {*} dayOfTheWeek day that fills
 * @param {*} number subject number
 * @param  {...any} ...arr name of the subject
 * @param  {...any} ...arr  subject type
 * @param  {...any} ...arr audience
 */
function addSubject(dayOfTheWeek, number, ...arr) {
    let subjectNumber = dayOfTheWeek.querySelector(`.subjectNumber`);
    let children = subjectNumber.children;

    for (let element of arr) {
        let paragraph = document.createElement(`p`);

        children[number - 1].appendChild(paragraph).innerHTML = element.trim().toUpperCase();
    }
}


/**
 * Creates URls.
 * @param {*} dayOfTheWeek day that fills
 * @param  {...any} arr name of the URL
 * @param  {...any} arr link
 */
function createURLsFor(dayOfTheWeek, ...arr) {
    let URLs = dayOfTheWeek.querySelector(`.links`);

    for (let i = 0; i < arr.length; i += 2) {
        let createLi = document.createElement(`li`);
        let li = URLs.appendChild(createLi);

        let createLink = document.createElement(`a`);
        let link = li.appendChild(createLink);
        link.innerHTML = arr[i];
        link.href = arr[i + 1];
    }
}


/**
 * Shows hidden shedule.
 */
function showShedule() {
    let shedule = document.querySelectorAll(`.dayName`);
    let myElement = document.querySelectorAll(`.subjectNumber`);
}

let myYear = new Date().getFullYear();
let myMonth = new Date().getMonth();
let myToday = new Date(myYear, myMonth, 0).getTime();
let myNow = new Date().getTime();
let myWeek = Math.round((myNow - myToday) / (1000 * 60 * 60 * 24 * 7));

let weekEven;
myWeek % 2 ? weekEven = 1 : weekEven = 0;
console.log(weekEven);

let numberOfGroup = 0;

do {
    numberOfGroup = parseInt(window.prompt(`Номер подгруппы (1 или 2):`, 1), 10);
} while (isNaN(numberOfGroup) || numberOfGroup > 2 || numberOfGroup < 1);

console.log(`Group ${numberOfGroup}`);

// weekEven == 0 - четная неделя

if (weekEven == 1) {
    if (numberOfGroup == 1) {
        createDay(`Понедельник`, `monday`);
        fillDay(monday);
        addSubject(monday, 1, `Психология профессиональной деятельности`, `ЛК`, `209А`);
        addSubject(monday, 2, `Проектный менеджмент (в профессиональной деятельности)`, `ЛК`, `209А`);
        createURLsFor(monday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Вторник`, `tuesday`);

        createDay(`Среда`, `wednesday`);
        fillDay(wednesday);
        addSubject(wednesday, 1, `Организация процесса построения информационных систем`, `ПЗ`, `309А`);
        addSubject(wednesday, 2, `Предпроектное исследование комплексных IT решений`, `ЛК`, `113А`);
        addSubject(wednesday, 3, `Предпроектное исследование комплексных IT решений`, `ЛК`, `315А`);
        createURLsFor(wednesday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Четверг`, `thursday`);
        fillDay(thursday);
        addSubject(thursday, 2, `UML и инструменты проектирования IT решений`, `ПЗ`, `9А`);
        addSubject(thursday, 3, `Организация процесса построения информационных систем`, `ЛК`, `309А`);
        addSubject(thursday, 4, `Межкультурное взаимодействие`, `ЛК`, `309В`);
        createURLsFor(thursday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);
  
        createDay(`Пятница`, `friday`);
        fillDay(friday);
        addSubject(friday, 5, `Методология научных исследований`, `ЛК`, `309А`);
        addSubject(friday, 6, `Распределенные и кластерные компьютерные системы`, `ЛК`, `309А`);
        addSubject(friday, 7, `Структурный анализ и проектирование информационных систем`, `ЛК`, `309В`);
        createURLsFor(friday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);
        
        createDay(`Суббота`, `saturday`);
        fillDay(saturday);
        addSubject(saturday, 1, `Распределенные и кластерные компьютерные системы`, `ПЗ`, `308А`);
        addSubject(saturday, 2, `Распределенные и кластерные компьютерные системы`, `ПЗ`, `308А`);
        addSubject(saturday, 3, `Методология научных исследований`, `ЛК`, `8А`);
        createURLsFor(saturday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);
  
        createDay(`Время занятий`, `time`);
        fillDay(time);
        addSubject(time, 1, `8:00 - 9:30`, `ПАРА`, `КАБ`);
        addSubject(time, 2, `9:50 - 11:20`, `ПАРА`, `КАБ`);
        addSubject(time, 3, `11:30 - 13:00`, `ПАРА`, `КАБ`);
        addSubject(time, 4, `13:20 - 14:50`, `ПАРА`, `КАБ`);
        addSubject(time, 5, `15:00 - 16:30`, `ПАРА`, `КАБ`);
        addSubject(time, 6, `16:40 - 18:10`, `ПАРА`, `КАБ`);
        addSubject(time, 7, `18:00 - 19:30`, `ПАРА`, `КАБ`);

        showShedule();
    } else {
        createDay(`Понедельник`, `monday`);
        fillDay(monday);
        addSubject(monday, 1, `Психология профессиональной деятельности`, `ЛК`, `209А`);
        addSubject(monday, 2, `Проектный менеджмент (в профессиональной деятельности)`, `ЛК`, `209А`);
        createURLsFor(monday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Вторник`, `tuesday`);

        createDay(`Среда`, `wednesday`);
        fillDay(wednesday);
        addSubject(wednesday, 1, `Предпроектное исследование комплексных IT решений`, `ПЗ`, `113А`);
        addSubject(wednesday, 2, `Организация процесса построения информационных систем`, `ЛК`, `309А`);
        addSubject(wednesday, 3, `Предпроектное исследование комплексных IT решений`, `ЛК`, `315А`);
        createURLsFor(wednesday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Четверг`, `thursday`);
        fillDay(thursday);
        addSubject(thursday, 3, `Организация процесса построения информационных систем`, `ЛК`, `309А`);
        addSubject(thursday, 4, `Межкультурное взаимодействие`, `ЛК`, `309В`);
        addSubject(thursday, 5, `UML и инструменты проектирования IT решений`, `ПЗ`, `9А`);
        createURLsFor(thursday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);
        createURLsFor(thursday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Пятница`, `friday`);
        fillDay(friday);
        addSubject(friday, 5, `Методология научных исследований`, `ЛК`, `309А`);
        addSubject(friday, 6, `Распределенные и кластерные компьютерные системы`, `ЛК`, `309А`);
        addSubject(friday, 7, `Структурный анализ и проектирование информационных систем`, `ЛК`, `309В`);
        createURLsFor(friday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Суббота`, `saturday`);
        fillDay(saturday);
        addSubject(saturday, 2, `Методология научных исследований`, `ЛК`, `8А`);
        addSubject(saturday, 3, `Распределенные и кластерные компьютерные системы`, `ПЗ`, `308А`);
        addSubject(saturday, 4, `Распределенные и кластерные компьютерные системы`, `ПЗ`, `308А`);
        createURLsFor(saturday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Время занятий`, `time`);
        fillDay(time);
        addSubject(time, 1, `8:00 - 9:30`, `ПАРА`, `КАБ`);
        addSubject(time, 2, `9:50 - 11:20`, `ПАРА`, `КАБ`);
        addSubject(time, 3, `11:30 - 13:00`, `ПАРА`, `КАБ`);
        addSubject(time, 4, `13:20 - 14:50`, `ПАРА`, `КАБ`);
        addSubject(time, 5, `15:00 - 16:30`, `ПАРА`, `КАБ`);
        addSubject(time, 6, `16:40 - 18:10`, `ПАРА`, `КАБ`);
        addSubject(time, 7, `18:00 - 19:30`, `ПАРА`, `КАБ`);

        showShedule();
    }
}
// нечетная неделя
else {
    if (numberOfGroup == 1) {
        createDay(`Понедельник`, `monday`);
        fillDay(monday);
        addSubject(monday, 5, `Проектный менеджмент (в профессиональной деятельности)`, `ПЗ`, `211А`);
        addSubject(monday, 6, `Психология профессиональной деятельности(начало в 14:00)`, `ПЗ`, `211А`);
        createURLsFor(monday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Вторник`, `tuesday`);

        createDay(`Среда`, `wednesday`);
        fillDay(wednesday);
        addSubject(wednesday, 1, `Организация процесса построения информационных систем`, `ПЗ`, `309А`);
        createURLsFor(wednesday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Четверг`, `thursday`);
        fillDay(thursday);
        addSubject(thursday, 2, `UML и инструменты проектирования IT решений`, `ПЗ`, `9А`);
        addSubject(thursday, 3, `Организация процесса построения информационных систем`, `ПЗ`, `309А`);
        createURLsFor(thursday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Пятница`, `friday`);
        fillDay(friday);
        addSubject(friday, 5, `Межкультурное взаимодействие`, `ПЗ`, `211А`);
        addSubject(friday, 6, `Распределенные и кластерные компьютерные системы`, `ЛК`, `309А`);
        addSubject(friday, 7, `Структурный анализ и проектирование информационных систем`, `ЛК`, `309А`);
        createURLsFor(friday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

         
        createDay(`Суббота`, `saturday`);
        fillDay(saturday);
        addSubject(saturday, 2, `Методология научных исследований`, `ПЗ`, `8А`);
        addSubject(saturday, 3, `Структурный анализ и проектирование информационных систем`, `ПЗ`, `308А`);
        addSubject(saturday, 4, `Структурный анализ и проектирование информационных систем`, `ПЗ`, `308А`);
        createURLsFor(saturday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);


        createDay(`Время занятий`, `time`);
        fillDay(time);
        addSubject(time, 1, `8:00 - 9:30`, `ПАРА`, `КАБ`);
        addSubject(time, 2, `9:50 - 11:20`, `ПАРА`, `КАБ`);
        addSubject(time, 3, `11:30 - 13:00`, `ПАРА`, `КАБ`);
        addSubject(time, 4, `13:20 - 14:50`, `ПАРА`, `КАБ`);
        addSubject(time, 5, `15:00 - 16:30`, `ПАРА`, `КАБ`);
        addSubject(time, 6, `16:40 - 18:10`, `ПАРА`, `КАБ`);
        addSubject(time, 7, `18:00 - 19:30`, `ПАРА`, `КАБ`);

        showShedule();
    } else {;
        createDay(`Понедельник`, `monday`);
        fillDay(monday);
        addSubject(monday, 5, `Проектный менеджмент (в профессиональной деятельности)`, `ПЗ`, `211А`);
        addSubject(monday, 6, `Психология профессиональной деятельности(начало в 14:00)`, `ПЗ`, `211А`);
        createURLsFor(monday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Вторник`, `tuesday`);

        createDay(`Среда`, `wednesday`);
        fillDay(wednesday);
        addSubject(wednesday, 2, `Организация процесса построения информационных систем`, `ПЗ`, `309А`);
        createURLsFor(wednesday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Четверг`, `thursday`);
        fillDay(thursday);
        addSubject(thursday, 3, `Организация процесса построения информационных систем`, `ПЗ`, `309А`);
        addSubject(thursday, 4, `UML и инструменты проектирования IT решений`, `ПЗ`, `9А`);
        createURLsFor(thursday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Пятница`, `friday`);
        fillDay(friday);
        addSubject(friday, 5, `Межкультурное взаимодействие`, `ЛК`, `211А`);
        addSubject(friday, 6, `Распределенные и кластерные компьютерные системы`, `ЛК`, `309А`);
        addSubject(friday, 7, `Структурный анализ и проектирование информационных систем`, `ЛК`, `309А`);
        createURLsFor(friday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Суббота`, `saturday`);
        fillDay(saturday);
        addSubject(saturday, 1, `Распределенные и кластерные компьютерные системы`, `ПЗ`, `308А`);
        addSubject(saturday, 2, `Распределенные и кластерные компьютерные системы`, `ПЗ`, `308А`);
        addSubject(saturday, 3, `Методология научных исследований`, `ПЗ`, `8А`);
        createURLsFor(saturday, `Moodle`, `#`, `VK`, `#`, `mail`, `#`);

        createDay(`Время занятий`, `time`);
        fillDay(time);
        addSubject(time, 1, `8:00 - 9:30`, `ПАРА`, `КАБ`);
        addSubject(time, 2, `9:50 - 11:20`, `ПАРА`, `КАБ`);
        addSubject(time, 3, `11:30 - 13:00`, `ПАРА`, `КАБ`);
        addSubject(time, 4, `13:20 - 14:50`, `ПАРА`, `КАБ`);
        addSubject(time, 5, `15:00 - 16:30`, `ПАРА`, `КАБ`);
        addSubject(time, 6, `16:40 - 18:10`, `ПАРА`, `КАБ`);
        addSubject(time, 7, `18:00 - 19:30`, `ПАРА`, `КАБ`);

        showShedule();
    }
}
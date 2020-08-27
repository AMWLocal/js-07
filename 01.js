//1. Написать функцию, которая принимает строку и выводит
//статистику о ней: количество букв, количество цифр и
//количество других знаков.
let statistic = (str) => {
    const Letter = /[A-яA-z]/g;
    const foundLetter = str.match(Letter)
    console.log(foundLetter.length + ' letters');

    const Nunber = /[0-9]/g;
    const foundNunber = str.match(Nunber)
    console.log(foundNunber.length + ' numbers');

    const Sumbols = /[!"№;%:?*()_+<>?.,]/g;
    const foundSumbols = str.match(Sumbols)
    console.log(foundSumbols.length + ' sumbols');

}
statistic('кароче прикол)))1000111');
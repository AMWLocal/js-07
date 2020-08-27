//2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
//Например: 35 – тридцать пять, 89 – восемьдесят девять,
//12 – двенадцать.
const numbers = (number) => {
    let first = ~~(number / 10)
    let second = number % 10

    let result

    if (first == 1) {
        switch (second) {
            case 0:
                result = "десять"
                break;
            case 1:
                result = "одиннадцать"
                break;
            case 2:
                result = "двенадцать"
                break;
            case 3:
                result = "тринадцать"
                break;
            case 4:
                result = "четырнадцать"
                break;
            case 5:
                result = "питнадцать"
                break;
            case 6:
                result = "шестнадцать"
                break;
            case 7:
                result = "семнадцать"
                break;
            case 8:
                result = "восемнадцать"
                break;
            case 9:
                result = "девятнадцать"
                break;
            default:
                break;
        }
        return result
    }

    switch (first) {
        case 2:
            result = "двадцать"
            break;
        case 3:
            result = "тридцать"
            break;
        case 4:
            result = "сорок"
            break;
        case 5:
            result = "пятдесят"
            break;
        case 6:
            result = "шестдесят"
            break;
        case 7:
            result = "семьдесят"
            break;
        case 8:
            result = "восемьдесят"
            break;
        case 9:
            result = "девяносто"
            break;
        default:
            break;
    }

    switch (second) {
        case 0:
            break;
        case 1:
            result = result + ' один'
            break;
        case 2:
            result = result + ' два'
            break;
        case 3:
            result = result + ' три'
            break;
        case 4:
            result = result + ' четыре'
            break;
        case 5:
            result = result + ' пять'
            break;
        case 6:
            result = result + ' шесть'
            break;
        case 7:
            result = result + ' семь'
            break;
        case 8:
            result = result + ' восемь'
            break;
        case 9:
            result = result + ' девять'
            break;
        default:
            break;
    }
    return result
}




console.log(numbers(58))
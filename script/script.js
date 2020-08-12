//....................Первое задание..................

let lang = prompt('Введите ru или en');
let ruweek='понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
let enweek='monday, tuesday, Wednesday, Thursday, friday, Saturday, sunday';


if (lang == 'ru') {
    console.log(ruweek.split(' ', 7));
}   else if (lang == 'en') {
    console.log(enweek.split(' ', 7));
}   else {
    console.log ('вы шо, надо переделать')
}



switch (lang) {
    case 'ru':
        alert(ruweek.split(' ', 7));
        break;
    case 'en':
        alert(enweek.split(' ', 7));
        break;
    default :
        alert('не то значение');
        break;
}

let str={
    'ru' : [ruweek.split(' ', 7)],
    'en' : [enweek.split(' ', 7)],
}; console.log (str[lang])


//....................Второе задание..................

let  namePerson= prompt ('Введите имя')

 result = ( namePerson == 'Артем') ? 'директор':
     (namePerson == 'Максим') ? 'преподаватель' :
      'студент';

 console.log (result)



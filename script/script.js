let lang = 'ru' || 'en'
let ruweek='понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'
let enweek='monday, tuesday, Wednesday, Thursday, friday, Saturday, sunday'
prompt(lang)
if (lang = 'ru'){
    console.log(ruweek.split(' ', 7) )
}   else (console.log(enweek.split(' ', 7)))
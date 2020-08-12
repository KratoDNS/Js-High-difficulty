let lang = prompt('Введите ru или en')
let ru=  1
let en = 1



let ruweek='понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'
let enweek='monday, tuesday, Wednesday, Thursday, friday, Saturday, sunday'
    if (lang = ru){
    alert(ruweek.split(' ', 7))
}   else {
    alert(enweek.split(' ', 7))
}
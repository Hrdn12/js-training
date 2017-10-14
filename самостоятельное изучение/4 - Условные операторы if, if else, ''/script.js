/*
1. If - оператор условия. "Если так, то так".

if (значение, переменная (содержащая значение) [знак равенства   значение]) функция;

var old = prompt('how old is the owner of the repository?','');
if (old != 21) alert('Right');

Рекомендуется всегда использовать фигурные скобки для отделения функции:
var old = prompt('how old is the owner of the repository?','');
if (old != 21){
	alert('Right');
}

2. Else - неверное условие. Если значение неправильно. 
"Если так, то так, а есл нет - так№2".

var old = prompt('how old is the owner of the repository?','');
if (old == 21){
	alert('Right');
}
else{
	alert('Didnt guess =P');
}

3. Else If - несколько вариантов выбора. Можно задавать сколько угодно
вариантов выбора. Заканчивается всё else. 


var old = prompt('how old is the owner of the repository?','');
if (old == 21){
	alert('Right');
}
else if (old == 20){
	alert('I recently had a birthday');
}
else{
	alert('Didnt guess =P');
}

4. ? - присвоение значения в зависимости от переменной.
условие ? значение1 : значение2
access = (age > 14) ? true : false;

*/

// var old = prompt('how old is the owner of the repository?','');
// if (old == 21){
// 	alert('Right');
// }
// if (old != 21){
// 	alert('Not right');
// }
// чисто для себя поиграться

var old = prompt('how old is the owner of the repository?','');
if (old == 21){
	alert('Right');
}
else if (old == 20){
	alert('I recently had a birthday');
}
else{
	alert('Didnt guess =P');
}

var age = prompt('А тебе сколько годиков?', 18);

var message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );
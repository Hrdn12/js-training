//Сертификат SoloLearn: https://www.sololearn.com/Certificate/1024-1364437/pdf/

1. Основные понятия
	1.1 Переменные
		Это контейнеры для хранения значений. Значение может меняться в течение работы программы
			var x = 10;

		Правила именования:
		- Первым символом должна быть буква, "_" или "$". 
		- Имена н могу содержать математически или логические операторы. Например: 2*blabla.
		- Имена не могу содержать пробелы.
		- Дефисы зарезервинованы для вычитания.
		- Нельзя использовать зарезерванные слова и специальые символы. https://api.sololearn.com/DownloadFile?id=2741

	1.2 Типы данных
		String, Number, Boolean, Arrays, Objects.
		Для тог, что  бы в поместить в строку символ необходимо ставить "\" перед ним. Например: "\"". "\n" - новая строка.

	1.3 Математические операторы
		Все обычные и 
		% - деление по модулю (остаок по модулю).
		++ - инкримент (+1).
		-- - декримент (-1).

	1.4 Операторы присванивания
		https://api.sololearn.com/DownloadFile?id=2747

	1.5 Операторы сравнения
		https://api.sololearn.com/DownloadFile?id=2748
		Возвращают true or false 

	1.6 Логические и Булевые операторы
		AND, OR and NOT https://api.sololearn.com/DownloadFile?id=2749
		&& - оператор "И".

		Условный (тернарный) оператор - "?". 
		variable = (condition) ? value1: value2 
		Например:
			var isAdult = (age < 18) ? "Too young": "Old enough";

	1.7 Строковые операторы
		Конкатенация - соедниенеие множества строк по средствам "+".

2. Условия и циклы
	2.1 Оператор if
		Блок кода будет выполнен, только есть условие будет верным.
			if (condition){

			}

	2.2 Оператор if else
		else указывает код блока, если условие false.
			if (condition){

				}
			else{

			}

	2.3 Оператор switch
		Используется в случаях, когда применяется множество условий и использование if else становится неудобным.
			switch (expression) {
				case n1: 
					statements
					break;
				case n2: 
					statements
					break;
				default: 
					statements
			}

		Можно использовать любое количество case.
		break - выход из блока.
		default - определяет код для запуска, если нет соответствующего case.

	2.4 Цикл for
		for (var i = 0 /*начало*/; i < Things.length /*условие окончания*/; i++ /*шаг*/) {
			Things[i]
		}

	2.5 Цикл while 
		while выполняется до тех пор, пока условие не будет верным.
			while (condition){
				code
			}

	2.6 Цикл do while
		Код выполняется до проверки правильности условия.
			do{
				code
			}
			while(condition);

	2.7 break and continue 
		Выражение break перерывает выполнение цикла и продолжает выполение кода дальше.
			for (i=0; i <= 10; i++){
				if(i == 5){
					break;
				}
				console.log(i + "<br>")
			}
		continue останавливает только одну итерацию в цикле и переходит к следующей.
			for (i=0; i <= 10; i++){
				if(i == 5){
					continue;
				}
				console.log(i + "<br>")
			}


3. Функции
	3.1 Функции определенные пользоваетелем
		Функция - блок кода, созданный для выполнения специального задания.
		Имена функций могут содержать буквы, цифры, нижние подчеркивания и знаки доллара.
			function name(){
				code
			}

		Вызов функции:
			function myFunction(){
				alert("blablabla");
			}

			myFunction();

		Функцию можно вызывать сколько угодно раз:
			function myFunction(){
				alert("blablabla");
			}

			myFunction();

			other code

			myFunction();

	3.2 Параметры функций
		Параметры - имена размещенные в определении функции. Параметры разделяются запятой.
			function name(param1, param2, param3){

			}

		Пример:
		function yourName(name){
			console.log("Hi, " + name);
		}

		yourName("Dima");

	3.3 Использование множества параметров в функциях
			function sayHello(name, age){
				console.log(name + " is " + age + " years old");
			}

			sayHello("Dima", 21);

	3.4 Оператор return
		Возвращает значение функции и останавливает её выполнение.
		Например:
			function fun(a, b){
				return a*b;
			}

			var x = fun(13, 11);

	3.5 Alert, Prompt, Confirm
		3.5.1 Alert
			Окно предупреждения. При всплытии окна все действия на странице заблокированы до нажатия "OK".
				alert("Хочу шоколадку");

		3.5.2 Prompt
			Окно для ввода значения пользователем. При нажатии "OK" возвращается введенное значение, а при нажании "cancel" - null.
				var user = prompt("Как тебя зовут?");
				alert("Привет, " + user);

		3.5.3 Confirm
			Окно подтверждения. При нажатии "OK" возвращается true, при нажатии "cancel" - false.
			Например:
				var result = confirm("Валим?");
				if (result == true){
					alert("Ну и вали");
				}
				else {
					alert("Правильное решение");
				}


4. Объекты
	4.1 Введение в объекты
		Объект - переменная, которая может хранить много значений. Значения записываются как пара (свойство: значение), например:
			var person = {
				name: "name", age: 31,
				favColor: "black", height: 182
			};

		Доступ к свойствам можно получить двумя способами:
			objectName.propertyName
			или
			objectName['propertyName']
			Пример:
			var x = person.age;
			var x = person['age'];

		Встроенное свойство языка JavaScript Length используется для подсчёта числа символов в свойстве или в строке.
			console.log(person.name.length);
			//4

		Метод объекта - свойство содержащее определение функции.
			objectName.methodName();
		Например:
			В document.write() функция write() является методом объекта document.

	4.2 Создание объектов
		Функция конструктора объекта (принимает параметры и присваивает их свойствам объекта:
			function person(name, age, color){
				this.name = name;
				this.age = age;
				this.favColor = color;
			}

		Ключевое слово this ссылается на текущий объект.

		Для создания объектов одинакогового типа используется ключевое слово new (имея функцию конструктора мы обращается к ней и она создает
		новый объект по шаблону):

			var p1 = new person("John", 42, "green");
			var p2 = new person("Ann", 23, "blue");

	4.3 Инициалиизация объекта.
		Одиночные объекты можно создавать так:
			var John = {name: "John", age: 25};

		Синтаксис доступа к свойствам и методам не меняется.
			console.log(John.name);

	4.4 Добавление методов
			methodName: function(){
				code
			}

			objectName.methodName

		Ключевое слово this используется в качестве ссылки на текущий объект, что значит, что с его помощью
		вы можете получить доступ к свойствам и методам объекта. Например:
			function person(name, age){
				this.name = name;
				this.age = age;
				this.changeName = function(name){
					this.name = name;
				}
			}

			var p = new person ("David", 21);
			p.changeName("Alex");
			console.log(p.name);

		Можно оперделить функцию все функции-конструктора и связать её с объектом:
			function person(name,age){
				this.name = name;
				this.age = age;
				this.yearOfBirth = bornYear;
			}
			function bornYear(){
				return 2016 - this.age;
			}
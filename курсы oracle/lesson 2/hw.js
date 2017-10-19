//1. Пузырьковая сортировка

// function sortBubble(data) {
//         var tmp;
//         var d = data.length - 1;

//         var interval = setInterval(function() {
//                 if (d > 0) {
//                         for (var i = 0; i < d; i++) {
//                                 if (data[i] > data[i + 1]) {
//                                         tmp = data[i];
//                                         data[i] = data[i + 1];
//                                         data[i + 1] = tmp;
//                                 }
//                         }
                        
//                         d--;
//                 } else {
//                         clearInterval(interval);
//                 }
                
//                 console.log(data);
//         }, 100);
// }

// sortBubble([4, 5, 10, 2, 1, 9, 55, 117, 45]);

//2. Нахождение НОД и НОК

function NOD(A){   
    var n = A.length, x = Math.abs(A[0]);
    for (var i = 1; i < n; i++)
        { var y = Math.abs(A[i]);
        while (x && y){ x > y ? x %= y : y %= x; }
                x += y;
     }
    console.log("Наибольший общий делитель: " + x);

}

NOD([27, 9, -15]);

function NOK(A){   
    var  n = A.length, a = Math.abs(A[0]);
    for (var i = 1; i < n; i++)
        { var b = Math.abs(A[i]), c = a;
        while (a && b){ a > b ? a %= b : b %= a; } 
        a = Math.abs(c*A[i])/(a+b);
     }
    console.log("Наименьшее общее кратное: " + a)
}

NOK([5, 55, 8]);

//3. Сортировка вставкой

function InsertionSort(A){                              
    var n = A.length;
    for (var i = 0; i < n; i++){
                var v = A[ i ], j = i-1;
                while (j >= 0 && A[j] > v){ 
                        A[j+1] = A[j]; j--; 
                }
       A[j+1] = v;
     }                    
    console.log(A);    
}

InsertionSort([4, 5, 10, 2, 1, 9, 55, 117, 45]);

//4. Изменение входящего массива при помощи метода map
var numbers = [6, 8, 7, 22];

var division = numbers.map(function(number) {
        return number/2;
});

console.log(division);

//5. Изменение входящего массива при помощи метода reduce

var numbers1 = [5,8,9,18,20];

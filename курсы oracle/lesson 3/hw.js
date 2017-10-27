// // 1. Объединение массивов:
//     one = [1,2,3,4,5,6];
//     two = [7,8,9,10];
//     // let three = one.concat(two);
//     // console.log(three);


//     for (var i = 0; i < one.length; i++) {
//         a = one[i];
//         for (var x = 0; x < two.length; x++) {
//             b = two[x];
//             if(a == b){
//                 return null;
//             }
//         }
//     }


    // Взять i значение из первого массива, сравнить со значением 
// 2. Число Фибоначчи:
//     2.1 Рекурсия:

        //     function fib_rec(n) {
        //         return n <= 1 ? n : fib_rec(n - 1) + fib_rec(n - 2);
        //     }

        //     console.log(fib_rec(10));

        // // 2.2 Итеративный метод:

        //     function fib_it(n) {
        //         var a = 1, b = 1;
        //             for (var i = 3; i <= n; i++) {
        //                 var c = a + b;
        //                 a = b;
        //                 b = c;
        //             }
        //         return b;
        //     }

        //     console.log(fib_it(20));

        // // 2.3 Удобный метод:
        //     function fibonacci(n) {
        //         var sq5 = Math.sqrt(5);
        //         var a = (1 + sq5) / 2;
        //         var b = (1 - sq5) / 2;
        //         return (Math.pow(a, n) - Math.pow(b, n)) / sq5;
        //     }

        //     console.log(fibonacci(555));

// 3. Факториал
    // 3.1 Рекурсия
        function f_rec(n){
            if (n == 1) {
                return n;
            }
            if (n < 1){
                console.log("Учи математику");
            }
            else{
                return n*f_rec(n-1);
            }
        }

        console.log(f_rec(3));

        // 3.2 Итеративный 
        function f_it(n){
           
            if (n == 1) {
                return n;
            }
            if (n < 1){
                console.log("Учи математику");
            }
            else{
                for (var i = 1, a = 1; i <= n; i++) {
                    a *= i;
                }  
                return a;          
            }    
        }

        console.log(f_it(5));
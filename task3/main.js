
// — Створіть об’єкт MyMath який буде реалізовувати наступний функціонал:

// - MyMath.PI – це властивість яка має повертати число Pi.

// - MyMath.pow(number, degree) – це метод який має повертати число в певній степені.

// - MyMath.abs(number) – це метод який має повертати модулю числа.

// - MyMath.max(number1, number2…) – це метод який має повернути максимальне число з переданих. Кількість чисел необмежена.

// - MyMath.min(number1, number2…) – це метод який має поаернути мінімальне число з переданих. Кількість чисел необмежена.

// Також ви маєте повернути наступні повідомлення при використанні методів, якщо:

// - Якщо передали не число - 

// - Якщо в функцію нічого не передали - Будь ласка, введіть число або числа(в залежності від методу)!

// При створенні цих методів використання об’єкту Math заборонене!

let MyMath = {
    PI: 3.141592653589793,
    pow(number, degree){
        if (typeof number === "undefined" || typeof degree === "undefined"){
            console.log(`Будь ласка, введіть число`);
        } else if(typeof number != "number" || typeof degree != "number"){
            console.log(`Повинно бути число`);
        }
        let result = 1;

        for(let i = 1; i <= degree; i++){
            result *= number;
        }

        return result;
        // // console.log(result);
    },
    abs(number){
        if (typeof number === "undefined"){
            console.log(`Будь ласка, введіть число`);
        } else if(typeof number != "number"){
            console.log(`Повинно бути число`);
        }

        if(number < 0){
            number *= -1;
        }

        return number;
        // console.log(number)
    },
    max(){
        let result = arguments[0];

        for(let i = 0; i <= arguments.length; i++){
            if(result <= arguments[i]){
                result = arguments[i];
            }
        }

        return result
        // console.log(result);
    },
    min(){
        let result = arguments[0];

        for(let i = 0; i <= arguments.length; i++){
            if(result >= arguments[i]){
                result = arguments[i];
            }
        }

        return result
        // console.log(result);
    }
}

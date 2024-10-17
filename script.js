// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

let arr1 = [1, 2, 3]; 

arr1[1] = 10; 
console.log(arr1); 

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.

let arr2 = ["Hello", "My"];

arr2.push("Friend"); 
console.log(arr2);

// Створити скрипт який поверне суму всіх чисел в масиві.

let arr3 = [1, 2, 3, 4, 5, 6, 7];
s = 0; 

for(i = 0; i < arr3.length; i++){ 
    s += arr3[i]; 
}

console.log(s); 

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

let arr4 = [1, 2, 3, 4, 5]; 

for(i = 0; i < arr4.length; i++){ 
    console.log(arr4[i]); 
}


// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

let arr5 = ["planet", "star", "galaxy", "universe", "space"];

for(i = 0; i < arr5.length; i++){ 
    if(arr5[i].length > 5){ 
        console.log(arr5[i]); 
    }else{ 
        continue;
    }
}


// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

let arr6 = [3, 7, 15, 22, 8, 13, 29, 41, 56, 1];
c = 0; 

for(i = 0; i < arr6.length; i++){ 
    if(c < arr6[i]){ 
        c = arr6[i]; 
    }else{ 
        continue; 
    }
}

console.log(c); 

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран

let arr7 = [9, 2, 12, 18, 25, 33, 42, 56, 71, 89]; 

let numbers = []; 

for(i = 0; i < arr7.length; i++){ 
    if(arr7[i] % 2 === 0){ 
        numbers.push(arr7[i]); 
    }else{ 
        continue; 
    }
}

console.log(numbers); 
'use strict';

/* Третий пример  */

let a3 = {
    name: 'Ivan Ivanov',
    age: 41,
};

let b3 = {};

for (let key in a3) {
    b3[key] = a3[key]
};

a3.name = 'Igor Petrov';

console.log('a3 = ', a3);
console.log('b3 = ', b3);

/* Пятый пример  */

let a5 = [1, 2, 3, 4, 5];

let b5 = [];
let c5 = [];

a5.forEach(function (i) {

    b5.push(i);
})

for (let i = 0; i < a5.length; i++) {
    c5.push(a5[i]);
}

a5[0] = 0;

console.log('a5 = ', a5);

console.log('b5 = ', b5);
console.log('c5 = ', c5);


/* Седьой пример  */

const a7 = [{
        name: 'Vasya ',
        age: 12
    },
    {
        name: 'Misha  ',
        age: 14
    },
    {
        name: 'Pavel  ',
        age: 13
    }
];

function makeDeepCopy(obj){
    let newObj = {};
        for( let prop in obj) {
            if(!obj.hasOwnProperty(prop)) return;
            if (typeof obj[prop] === "object" ){
                newObj[prop] = makeDeepCopy(obj[prop])
            }else {
                newObj[prop] = obj[prop];
            }
        }
        return newObj;
}

const b7 = makeDeepCopy(a7);

a7.map((obj) => {
    obj.name = obj.name + "Lupa";
    obj.age = 69;
} )

console.log('a7 = ', a7);
console.log('b7 = ', b7);
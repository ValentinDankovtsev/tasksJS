// Example 1
let a1 = 'Text';
let b1 = a1;
a1 = 'another text';
console.log('a1 = ', a1);
console.log('b1 = ', b1);

// Example 2
let a2 = 28;
let b2 = a2;
a2 = 41;
console.log('a2 = ', a2);
console.log('b2 = ', b2);

// Example 3
let a3 = {
	name: 'Ivan Ivanov',
	age: 41,
};
let b3 = a3;
a3.name = 'Igor Petrov';
console.log('a3 = ', a3);
console.log('b3 = ', b3);

// Example 4
let a4 = [1,3,5,7,9];
let b4 = a4;
a4 = [2,4,6,8,10];
console.log('a4 = ', a4);
console.log('b4 = ', b4);

// Example 5
let a5 = [1,2,3,4,5];
let b5 = a5;
a5[0] = 0;
console.log('a5 = ', a5);
console.log('b5 = ', b5);

// Example 6
let a6 = [1,2,3,4,5];
let b6 = a6;
a6.push(6)
console.log('a6 = ', a6);
console.log('b6 = ', b6);

// Example 7
let a7 = [{
	name: 'Vasya',
  age: 12
}, {
	name: 'Misha',
  age: 14
}, {
	name: 'Pavel',
  age: 13
}];
let b7 = a7;

a7.map((obj)=> {
		obj.name = obj.name + ' Pupkin';
		obj.age = obj.age;
});
console.log('a7 = ', a7);
console.log('b7 = ', b7);
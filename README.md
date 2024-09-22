# JavaScrit_course
Full Course done - not all lesson added 

#### 👨‍💻The 30-day JavaScript challenge created by Wes Bos introduced me to new ES6 concepts🚀. I'm grateful for those challenges, as they helped me gain knowledge on using vanilla JavaScript ES6. ⏫ I applied that information to solve problems in my current projects.

#### arrow function
The arrow function allows me to write more concise and readable code, which I'm taking advantage of in my current project.
````
const arrowFunction (e)=> {
  console.log('Hello World')
}
````
#### let, const insted var
Utilizing const and let allows me to write more secure code that is less prone to leaks - accidentally overwriting. 
````
let a = 10;
const b = 5;
console.log(a) // 10
console.log(b) // 5

a = 15;
console.log(a) // 15
b = 50 //Uncaught TypeError: Assignment to constant variable.
````

#### Descruction
That easy syntax when you works with arrays

````
let arr = {
  firstName: 'Adam',
  lastName: 'Smith'
};

let {firstName, lastName} = arr;
````

#### [...andMore]

````
console.log(Array.from('javascript'));

const arr = [1,2,3,4,5]
for(const element of arr){console.log(element)}

import {firstName, lastName} from './userData.js'

const firstName = 'Mike';
const seeking = 'Front End Developer';

let nextJob = `Hi, ${firstName}, please check the offer for the position ${seeking}`;

````

[![Link](https://img.shields.io/badge/30_Days_of_JavaScript-2F3134?style=for-the-badge&logo=30DaysJS&logoColor=white)](https://javascript30.com/)

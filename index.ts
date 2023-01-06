// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

sayHello(3);

let x = add(10, 20);
console.log(x);

function sayHello(howManyTimes: number): void {
  for (let i = 0; i < howManyTimes; i++) {
    console.log('hello world');
  }
}

function add(a: number, b: number): number {
  let result = a + b;
  return result;
}

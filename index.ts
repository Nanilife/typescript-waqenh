// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

sayHello(3);

function sayHello(howManyTimes: number): void {
  for (let i = 0; i < howManyTimes; i++) {
    console.log('Hallo Welt!');
  }
}

function add(a: number, b: number): number {
  let result = a + b;
  return result;
}

import { umb } from './motive.js';

const umbrella = async (arr) => {
  const speed = 2;
  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  for (const elem of arr) {
    for (const char of elem) {
      process.stdout.write(char);
      await delay(speed);
    }
    process.stdout.write('\n');
  }
  console.log('\x1b[33m%s\x1b[0m', 'Try to find the number eight ');
};

console.clear();

setTimeout(() => {
  umbrella(umb);
}, 1000);

setTimeout(() => {}, 34000);

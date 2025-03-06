import { ts } from 'https://deno.land/x/ts@4.4.2/mod.ts';

const code = `
interface Person {
  name: string;
  age: number;
}

function greet(person: Person): void {
  console.log(\`Hello, \${person.name}. You are \${person.age} years old.\`);
}

let john = { name: 'John', age: 30 };
greet(john);
`;
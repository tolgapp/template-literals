const name1 = "Tolga";
const age = 25;
const food = ["Kebab", "Sushi"];
const country = "Germany";

const text = "Hello my name is " + name1 + " and i am " + age + " years old." + " I actually live in " + country + " and learning to code. " + " My fav foods are " + food[0] + " and " + food[1] + ".";
// console.log(text);
// document.write(text);
// window.prompt(text);

const textLiterals = `Hello my name is ${name1} and i am ${age} years old. I actually live in ${country} and learning to code. My fav foods are ${food[0]} and ${food[1]}.`

console.log(textLiterals);
document.write(textLiterals);
// Follow along with the examples here

function sayHelloToMartin() {
    console.log("Hello, Martin!");
}


function sayHelloToChege() {
    console.log("Hello, Chege!");
}


function sayHelloToMacharia() {
    console.log("Hello, Macharia!");
}
sayHelloToMacharia();
sayHelloToMartin();
sayHelloToChege();






function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}
sayHelloTo("Macharia");
sayHelloTo("Martin");
sayHelloTo("Chege");


function add(x, y) {
    return x + y;
}
console.log(add(10.5, 2));

function say(greeting, firstName) {
    console.log("I was called");
    return `${greeting}, ${firstName}!`;
}
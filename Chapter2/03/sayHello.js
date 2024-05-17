function sayHello(name, greeting) {
    return "".concat(greeting || '', " ").concat(name);
}
console.log(sayHello('Takuya'));
console.log(sayHello('Takuya', 'Hello'));

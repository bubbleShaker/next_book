function sayHello(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting || '', " ").concat(name);
}
console.log(sayHello('Takuya'));
console.log(sayHello('Takuya', 'Hey'));

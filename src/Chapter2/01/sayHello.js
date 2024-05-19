// function sayHello (firstName:string) {
//   console.log('Hello '+firstName)
// }
// let firstName:string='Takuya'
// sayHello(firstName)
var user = {
    name: 'Takuya',
    age: 20
};
console.log(user.name);
console.log(user.age);
function printName(obj) {
    console.log(obj.firstName + (obj.lastName || ''));
}
printName({ firstName: 'Takuya' });
printName({ firstName: 'Takuya', lastName: 'Tejima' });
function sayHello(name) {
    return "Hello ".concat(name);
}
console.log(sayHello('Takuya'));

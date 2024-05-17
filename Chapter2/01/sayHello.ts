function sayHello (firstName:string) {
  console.log('Hello '+firstName)
}

let firstName:string='Takuya'
sayHello(firstName)

const user:{ name:string; age:number }={
  name:'Takuya',
  age:20
}

console.log(user.name)
console.log(user.age)

function printName(obj:{ firstName:string; lastName ?:string }){
  console.log(obj.firstName+(obj.lastName||''))
}

printName({firstName:'Takuya'})
printName({firstName:'Takuya',lastName:'Tejima'})
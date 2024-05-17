function sayHello(name:string, greeting?:string):string{
  return `${greeting||''} ${name}`
}
console.log(sayHello('Takuya'))
console.log(sayHello('Takuya','Hello'))
function sayHello(name: string, greeting: string = 'Hello'): string {
  return `${greeting || ''} ${name}`
}
console.log(sayHello('Takuya'))
console.log(sayHello('Takuya', 'Hey'))

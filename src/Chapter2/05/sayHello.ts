function printName(firstName: string, formatter: (name: string) => string) {
  console.log(formatter(firstName))
}
function formatName(name: string): string {
  return `${name} san`
}
printName('Takuya', formatName)

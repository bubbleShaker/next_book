function genBirdsInfo(name: string): string[] {
  return name.split(',')
}

function singBirds(birdsInfo: (name: string) => string[]): string {
  return birdsInfo('hato,kiji')[0] + ' piyo piyo'
}
console.log(singBirds(genBirdsInfo))

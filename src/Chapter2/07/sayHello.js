function genBirdsInfo(name) {
    return name.split(',');
}
function singBirds(birdsInfo) {
    return birdsInfo('hato,kiji')[0] + ' piyo piyo';
}
console.log(singBirds(genBirdsInfo));

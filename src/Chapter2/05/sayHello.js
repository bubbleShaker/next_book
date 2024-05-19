function printName(firstName, formatter) {
    console.log(formatter(firstName));
}
function formatName(name) {
    return "".concat(name, " san");
}
printName('Takuya', formatName);

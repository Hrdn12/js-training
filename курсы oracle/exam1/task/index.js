function getFriendlyNumbers(start, end) {

    if (end < start) {
        return false;
    }
    if (end < 0) {
        return false;
    }
    if (start < 0) {
        return false;
    }

    if (typeof end !== "number") {
        return false;
    }

    if (typeof start !== "number") {
        return false;
    } else {
        return [];
    }


}

console.log(getFriendlyNumbers("20", "300"));

module.exports = {
    firstName: 'Dmitry',
    secondName: 'Mezerny',
    task: getFriendlyNumbers
}
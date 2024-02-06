function getDay() {
    let today = new Date();
    let option = {
        day: 'numeric',
        weekday: "long",
        month: 'long',
        year: 'numeric',
    }
    let currentDay = today.toLocaleDateString('en-US', option);

    return currentDay;
}


function getYear() {
    let today = new Date();
    let option = {
        year: 'numeric',
    }
    let currentYear = today.toLocaleDateString('en-US', option);
    return currentYear;
}

module.exports = {
    getDay,
    getYear
}

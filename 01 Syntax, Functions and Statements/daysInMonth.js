function daysInMonth (mm, yy) {
    let date = new Date(yy, mm, 0);
    console.log(date.getDate());
}
daysInMonth (1, 2012);
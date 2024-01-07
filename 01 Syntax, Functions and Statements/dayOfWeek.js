function dayOfWeek (day) {
    let dayNum;

    switch(day) {
        case 'Monday': console.log(dayNum = 1); break;
        case 'Tuesday': console.log(dayNum = 2); break;
        case 'Wednesday': console.log(dayNum = 3); break;
        case 'Thursday': console.log(dayNum = 4); break;
        case 'Friday': console.log(dayNum = 5); break;
        case 'Saturday': console.log(dayNum = 6); break;
        case 'Sunday': console.log(dayNum = 7); break;
        default: console.log('error');
    }
}
dayOfWeek ('Monday');
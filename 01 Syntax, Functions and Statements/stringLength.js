function stringLength (arr1, arr2, arr3) {
    let sum;
    let avgLength;

    let firstArr = arr1.length;
    let secondArr = arr2.length;
    let thirdArr = arr3.length;

    sum = firstArr+secondArr+thirdArr;
    avgLength = Math.floor(sum/3);
    
    console.log(sum);
    console.log(avgLength);
}
stringLength ('chocolate', 'ice cream', 'cake');
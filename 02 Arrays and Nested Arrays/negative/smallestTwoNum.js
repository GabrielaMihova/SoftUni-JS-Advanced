function smallestTwoNumbers (arr) {
    arr = arr.sort(function (a,b) {return a - b;})
    return arr[0] + " " + arr[1];
}
console.log (smallestTwoNumbers([30, 15, 50, 5]));

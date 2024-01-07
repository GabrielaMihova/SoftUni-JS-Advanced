function calculateArrayOperations(arr) {
    // Sum(ai) - calculates the sum of all elements from the input array
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);

    // Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
    const inverseSum = arr.reduce((acc, curr) => acc + 1 / curr, 0);
    console.log(inverseSum);

    // Concat(ai) - concatenates the string representations of all elements from the array
    const concatenatedString = arr.join("");
    console.log(concatenatedString);
}
calculateArrayOperations([1, 2, 3])

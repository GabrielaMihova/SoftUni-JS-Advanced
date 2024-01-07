function sumNum (n1, n2) {
    let num1 = Number(n1);
    let num2 = Number(n2);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
       result += i;
    }

    console.log(result);
}
sumNum ('1', '5')
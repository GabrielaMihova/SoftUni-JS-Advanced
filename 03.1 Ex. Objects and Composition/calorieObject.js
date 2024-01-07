function calorieObj (arr) {
    const result = {};
  
  for (let i = 0; i < arr.length; i+=2) {
    const element = arr[i];
    result[arr[i]] = Number([arr[i+1]]);
}
  return result;
}
console.log(calorieObj(['Yoghurt', '48', 'Rise', '138',
'Apple', '52']));
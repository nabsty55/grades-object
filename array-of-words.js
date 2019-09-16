let arr= ['java', 'react', 'node', 'php'];
console.log("------Array displayed forward----");
console.log(arr);
//console.log(arr.reverse());
let reversedArr = [];
for(let i = arr.length -1; i >= 0; i--){
    reversedArr.push(arr[i]);
}
console.log("-----Array displayed backward------");
console.log(reversedArr);

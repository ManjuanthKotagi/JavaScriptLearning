let add = function(num1, num2)
{
    return num1+num2
}

let result = add(5,6)
console.log("result : " + result)

console.log("--------------")

let sum = add
let result1 = sum(5,7)
console.log("result : " + result)
console.log("result : " + sum)
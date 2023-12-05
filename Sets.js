
let nums = new Set("booookkkeepeerrrr") //set is used for storing unique values. It will not store duplicate values

console.log(nums)

console.log("----------------------------")

let data = new Set();

data.add(3)
data.add(4)
data.add(3)
data.add("Naveen")
data.add("Naveen")

console.log(data)

data.forEach(value=>{
    console.log(value)
})
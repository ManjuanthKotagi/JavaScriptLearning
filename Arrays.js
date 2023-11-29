let values = new Array();
values.push(1)

//or

let values1 = [5,7,8];

console.log(values)
console.log(values1)
console.log(values1.length)
console.log(values1[0])

for(let i=0;i<values1.length;i++)
{
    console.log("Values are : " + values1[i])
}

console.log("------------------------------------------")

let names = ["Naveen","Arun", "Manan"]

names.push("Kiran")
names[4] = "Avni"

console.log(names);

console.log("------------------------------------------")

let data = ['Naveen', '5', {tech:'js'},function log(){console.log("Combined Array")}];

console.log(data)
data[3]()
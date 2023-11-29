let user ={
    name : 'Manju',
    tech : 'JS',
    'Work exp' : 4
}

console.log(user.name)
console.log(user.tech)
console.log(user["Work exp"])
console.log("--------------OR---------------");
console.log(user)
console.log(user['name'])
console.log(user['tech'])
console.log(user["Work exp"])

console.log("--------------Complex Object---------------");

let alien = {
    name : 'Naveen',
    tech : 'JS',
    laptop : {
        cpu : 'i7',
        ram : 4,
        brand : 'Asus'
    }
}

console.log("---------------delete object----------")
delete(laptop)
console.log(alien)

console.log("---------For In Loop------------")

for(let key in alien)
{
    console.log(key, alien[key])
}

for(let key in alien.laptop)
{
    console.log(key, alien.laptop[key])
}

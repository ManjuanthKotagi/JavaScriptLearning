let map = new Map()

map.set("Naveen" , "Java")
map.set("Kiran" , "Android")
map.set("Chirag" , "ML")
map.set("Naveen" , "BlockChain")

console.log(map.keys())

//for of loop
for(let [k,v] of map){
    console.log(k, ":", v)
}
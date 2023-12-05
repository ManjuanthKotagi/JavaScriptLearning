let data = [];

data[0] = 1;
data[99] = 99;

//console.log(data)

// for(let n of data)
// {
//     console.log(n)
// }

for(let key in data){
    console.log(key) //to print Key
}

for(let key in data){
    console.log(data[key]) //to print values
}
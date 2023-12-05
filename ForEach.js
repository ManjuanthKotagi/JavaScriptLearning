let nums = [42,51,25,87,987,65,12]

console.log(nums)
console.log("=========================")

nums.forEach((n)=>{
        console.log(n);
});

nums.forEach((n, i, nums)=>{
    console.log(n,i ,nums);
});
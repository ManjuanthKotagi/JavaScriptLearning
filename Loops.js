let i = 1

while(i<=5)
{
    console.log("Hi", i)
    i++
}

console.log(i);
console.log("___________________________________");

let j = 5

while(j>0)
{
    console.log("Hi", j);
    j--;
}
console.log(j)

console.log("_________________Do While_____________");

let k=10

do{
    console.log("Hi", k);
    k++
}while(k<=5)

console.log(k);

console.log("_________________For Loops_____________");

for(let m=0;m<=5;m++)
{
    console.log("Hi", m);
}

console.log("_________________Nested For Loops_____________");

for(let m=1;m<=5;m++)
{
    console.log("Hi", m);
    for(let n=1;n<=5;n++)
    {
        console.log("Hello", n);
    }
}
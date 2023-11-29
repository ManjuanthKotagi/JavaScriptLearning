let laptop={
    cpu : 'i9',
    ram : '5GB',
    brand : 'HP',

    greet : function ()
    {
        console.log("Hello World")
    }
}

laptop.greet()

console.log("------------this Keyword----------")

let laptop1={
    cpu : 'i9',
    ram : '5GB',
    brand : 'HP',

    getConfig : function ()
    {
        console.log(this.cpu)
    }
}

laptop1.getConfig()
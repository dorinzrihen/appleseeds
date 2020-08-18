const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id){
    for(let i=0; i < candyStore.candies.length; i++){
        if (candyStore.candies[i].id === id){
            return candyStore.candies[i];
        }
    }
    return "OPS, cant find it";
}


function getPrice(candyStore, id){
    for(let i=0; i < candyStore.candies.length; i++){
        if (candyStore.candies[i].id === id){
            return candyStore.candies[i].price;
        }
    }
    return "OPS, cant find it";
}

function addCandy(candyStore, id, name, price){
    candyStore.candies.push({id,
        name,
        price,
        amount:1})
}



function buy(candyStore, id){
    for(let i=0; i < candyStore.candies.length; i++){
        if (candyStore.candies[i].id === id){
            candyStore.candies[i].amount-- ;
            candyStore.cashRegister += candyStore.candies[i].price;
        }
    }
}

// console.log(getCandy(candyStore, "5hd7y"));
// console.log(getPrice(candyStore, "5hd7y"));
// addCandy(candyStore, "wookf", "twikst", 5);
// console.log(candyStore);

// buy(candyStore,"as12f");
// console.log(candyStore)
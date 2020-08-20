const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

// //1 
// const arrNames = data.map(function(x){return x.name});


// //2
// const bornBefore = [];

// data.forEach(function(x){ 
//     let output = x.birthday.split('-');
//     return output[2] < 1990 && bornBefore.push(x) ;
// });


// console.log(bornBefore)
//3

const favoriteFoods = []

data.forEach(function(x){
    const fish = x.favoriteFoods.fish;
    const meats = x.favoriteFoods.meats;
    [...fish,...meats].forEach(function(x){favoriteFoods[x] = favoriteFoods[x] ? ++favoriteFoods[x] : favoriteFoods[x] = 1 })

});


console.log(favoriteFoods);
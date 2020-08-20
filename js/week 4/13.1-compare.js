const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

console.time("start")
function compare(list1,list2){
    let sameFood = [];
    for(const str of list1){
        if (list2.includes(str)){
            sameFood.push(str);
        }
    }
    return sameFood.length > 0 ? sameFood : false;
}
console.timeEnd("start")
console.log(compare(food,food1));


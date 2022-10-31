// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruitArray = [
    { name: 'Mango', color: 'yellow', pricePerKg: 90 },
    { name: 'Orange', color: 'orange', pricePerKg: 80 },
    { name: 'Apple', color: 'red', pricePerKg: 70 },
    { name: 'Banana', color: 'yellow', pricePerKg: 60 },
    { name: 'Guava', color: 'green', pricePerKg: 50 }
];

const convertToObj=(fruitArray,keyfield)=>
    fruitArray.reduce((obj,item) => {
        obj[item[keyfield]]=item;
        return obj;
}, {});

const fruitObj=convertToObj(fruitArray,'name');

//console.log(fruitObj);

console.log(fruitObj.Apple);

console.log(fruitObj.Orange);

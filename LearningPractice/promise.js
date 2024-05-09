"use strict";
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        let arr1 = [1, 2, 3, 4, 5];
        let arr2 = [6, 7, 8, 9, 10];
        let arr3 = [11, 12, 13, 14, 15];
        // let rollNo = arr1.concat(arr2, arr3);
        let rollNo = [...arr1, ...arr2, ...arr3];
        resolve(rollNo);
        reject("Something went wrong");
    }, 3000);
});

const getBioData = (indexdata) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexdata) => {
            let bioData = {
                name: "AbulQasim Ansari",
                age: 23,
            };
            resolve(
                `my roll no is ${indexdata} and my name is ${bioData.name} and my age is ${bioData.age}`
            );
            reject("Something went wrong");
        }, 3000, indexdata);
    });
};
// prom.then((rollNo) => {
//     console.log(rollNo);
//     return getBioData(rollNo[11]);
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

async function getData() {
    try {
        const rollNo = await prom;
        console.log(rollNo);
        const bioData = await getBioData(rollNo[11]);
        console.log(bioDatsdfa);
        return bioData;
    } catch (error) {
        console.log("something went wrong");
    }
}
const data = getData().then(() => {
    console.log("Done");
});
console.log(data);

// Promise chaining
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
})
.then(function(result) {
    console.log(result); // 1
    return result * 2;
})
.then(function(result) {
    console.log(result); // 2
    return result * 3;
})
.then(function(result) {
    console.log(result); // 6
    return result * 4;
})
.then(function(result) {
    console.log(result); // 24
    return result;
})
.catch(function(error) {
    console.error('Error:', error);
});

// What is the purpose of the race method in promise ?
// .....Promise.race() method will return the promise instacnce which firstly resolved or rejected.......
let promiseone = new Promise(function(resolve,reject){
    setTimeout(resolve, 500, 'one');
})
let promisetwo = new Promise(function(resolve,reject){
    setTimeout(resolve, 200, 'two');
})
let promisethree = new Promise(function(resolve,reject){
    setTimeout(resolve, 100, 'three');
})

Promise.race([promiseone,promisetwo,promisethree]).then(function(value){
    console.log(value);
})
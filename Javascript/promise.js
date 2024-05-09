// Promise One
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Promise One is complete');
        resolve();
    },1000)
})

// Promise Two
promiseOne.then(function(){
    console.log("promise One consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("Promise Two is Complete");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Promise Two consumed");
})

// Promise Three
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: "AbulQasim", email: "qasim@gmail.com"})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
})

// Promise Four
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({firstName: "Mohammad", lastName: "Zubair"})
        }else{
            reject("ERROR: Something went wrong")
        }
    })
})

promiseFour.then(function(user){
    console.log(user);
    return `${user.firstName} ${user.lastName}`
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(console.log("The Promise is either resolved or reject"))

// Promise Five 
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function (){
        let error = false;
        if(!error){
            resolve({language: "PHP", framework: "Laravel"});
        }else{
            reject("ERROR: Language went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// ASYNC AWAIT
// async function getAlluser(){
//     try {
//         const response  = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(`Fetching Error ${error}`);
//     }
// }
// getAlluser()

// Fetch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
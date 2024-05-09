// Synchronous way
// const func2 = () => {
//     console.log(`Function 2 is starting.`);
// }
// const func1 = () => {
//     console.log(`Function 1 is starting.`);
//     func2();
//     console.log(`Function 1 is ending.`);
// }
// func1();

// Asynchronous way
const func2 = () => {
    // console.log(`Function 2 is starting.`);
    setTimeout(() => {
        console.log(`Function 2 is Starting.`);
    }, 5000);
}
const func1 = () => {
    console.log(`Function 1 is Starting.`);
    func2();
    console.log(`Function 1 is Ending.`);
}
func1();
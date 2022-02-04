const myName = "Muhammad Umair Ahmad";

// function callMyName() {
//     alert(myName)
// }

// const callMyName = function(){
//     return "Muhammad Umair Ahmad"
// }

const callMyName = (num1 = 8, num2 = 4) => {
    // if(num2 === undefined){
    //     num2 = 4
    // }
    return num1 * num2
};



console.log(callMyName(2, 5))
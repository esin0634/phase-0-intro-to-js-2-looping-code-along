// Code your solutions in this file
function writeCards(array, eventName){
    let newArr = []
    for(let i = 0; i < array.length ; i += 1){
        newArr.push("Thank you, " + array[i] + ", for the wonderful "  + eventName + " gift!")

    }
    return newArr
}

function countDown(num){
    while (num >= 0){
        console.log(num)
        num -= 1 
    }
}


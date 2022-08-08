// Code your solutions in this file
function countDown(int){
    for (let i=0;i<=int;i++){
        console.log(i)
    }
}

function writeCards(name,eventName){
    let newArray =[]
    for (let i=0;i<name.length;i++){
         newArray.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray
}
countDown(10)
writeCards(["Guadalupe", "Ollie", "Aki"],'suprise')
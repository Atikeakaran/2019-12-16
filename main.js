// i= i+1;
//i+=1;
//i++
//i=i+4;
//i+=4;
//i++++ bu çalışmaz



function logTillTen(params) {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}
logTillTen();


// function logTill() {
//     for (let k = 20; k <= 50; k+=2) {
//         console.log(k);
//     }
// }
// logTill();

// function logTillNumber(finalNumber) {
//     for (let i = 1; i <= finalNumber; i++) {
//         console.log(i);
//     }
//     console.log("congrats!")
// }
// logTillNumber();


function logTillPromptNumber() {
    let firstNumber = parseInt(prompt("kaçtan itibaren"));
    let finalNumber = parseInt(prompt("kaça kadar"));

if (finalNumber> 50){
    alert("lütfen 1 ile 50 arasında bir sayı seç")
}else{
    for (let i = firstNumber; i <= finalNumber; i++) {
        console.log(i);
    }
    console.log("congrats!")
}
}



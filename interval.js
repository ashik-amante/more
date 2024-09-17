console.log(1);
console.log(2);
setTimeout(() => {
    console.log('khara mama');
}, 900);
console.log(3);
console.log(4);
console.log(5);

let num = 0;

// setInterval(() => {
//     num = num + 1;
//     console.log(num);
// }, 4000);

const clockId = setInterval(() => {
    num = num + 1;
    if(num < 5){
        console.log(num,clockId);
    }
    else{
        clearInterval(clockId)
    }
}, 1000);
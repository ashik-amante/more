const delayGreeting = (name,time) =>{
    setTimeout(() => {
        console.log('hello', name);
    }, time);
}

delayGreeting('manik' ,2000)
const loader = () =>{
    return new Promise ((resolve, reject) => {
        
        const success = Math.random()*10;
        if(success < 5){
            const data =  resolve(success)
            
        }
        else{
            const data  = reject(success)
            
        }
    })
}

const result = document.getElementById('result');
loader()
.then(data => console.log('resolve', data))
.catch(err => console.log('reject', err))
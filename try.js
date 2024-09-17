const checkAge = () =>{
    const agefield = document.getElementById('age');
    const ageText = agefield.value;

    const error = document.getElementById('error')

    try{
        const age  = parseInt(ageText)
        if(isNaN(age)){
            throw ' Please enter a Number'
        }
        else if(age < 14){
            throw ' polapan mot allowed'
        }
        else if(age > 30){
            throw 'murrubbi not allowed'
        }
        error.innerText = ''
    }
    catch(err){
        error.innerText = 'ERROR  '  + err
       
    }
    finally{
        console.log('all done');
    }

}
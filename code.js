 const form = document.querySelector('form') 

 form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const bmiStatus = document.querySelector('#bmi-status')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML=`Please Give a Valid Height given is ${height}`
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please Give a Valid Weight given is ${weight}`
    }
    else{
        const bmi= (weight /((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span> ${ bmi}</span>`
        
        // if (bmi<18.6) {
        // Bmi.innerHTML= `<p>Your bmi is under weight</p>`
        // }
        // else if (18.6 <= bmi >= 24.9) {
        //  Bmi.innerHTML=` <p>Your bmi is normal</p>`
        // } else {
        //  Bmi.innerHTML=` <p>Your bmi is overweight </p>`
      
        // }
        if (bmi < 18.6) {
            bmiStatus.innerHTML = `<p>You are <strong>Underweight</strong></p>`
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            bmiStatus.innerHTML = `<p>You are in the <strong>Normal</strong> range</p>`
        }
        else {
            bmiStatus.innerHTML = `<p>You are <strong>Overweight</strong></p>`
        }
       
    }
  
   
 })
   


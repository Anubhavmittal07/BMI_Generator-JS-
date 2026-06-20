const form = document.querySelector(".container")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const height = document.querySelector("#h").value
    const weight = document.querySelector("#w").value

    if(height=="" || height==0 || weight=="" || weight==0){
        result.innerHTML = "Height or Weight can't be Empty or Zero! Please enter a valid height and weight."
    }
    else{
        const bmi = (weight/((height*height)/10000).toFixed(2)).toFixed(1)
        if(bmi<=18.5){
            result.innerHTML = `Your bmi is ${bmi}, You're underweight. Consider a balanced diet.`
        }
        else if(bmi>25){
            result.innerHTML=`Your bmi is ${bmi}, You're overweight. A little more activity can help.`
        }
        else{
            result.innerHTML=`Your bmi is ${bmi}, Great! Your weight is in the healthy range.`
        }
    }
    
})
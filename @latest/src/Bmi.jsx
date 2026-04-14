import { useState } from "react"
import "./Bmi.css"

export default function BMI(){

    const [submit , setSubmit] = useState("")
    const [weight , setWeight] = useState("")
    const [height , setHeight] = useState("")

    function Reload(){
        setWeight("")
        setHeight("")
        setSubmit("")
    }

    function Submit(){
        setHeight("")
        setWeight("")
       if (!weight || !height){
        setSubmit("Please enter values")
        return;
       }

       let w = parseFloat(weight)
       let h = parseFloat(height)

       h = h * 0.24

       let bmi = w / (h*h) 

       let message = ""

       if (bmi <= 18.5){
        message = "You are Underweight"
       }else if (bmi > 18.5 && bmi < 25){
        message = "You are Normal"
       }else{
        message = ("You are Overweight")
       }
      setSubmit(
            <>
                Your BMI is : {bmi.toFixed(1)} <br />
                {message}
                </>
);
    }

    return(
        <div className="App">
            <h1>BMI Calculator</h1>
        <div className="Main">
        <p>Weight (Kg)</p>
        <input value={weight} onChange={(e)=> setWeight(e.target.value)} type="text" placeholder="Enter your weight" className="weight-field" />
        <p>Height (Cm)</p>
        <input value={height} onChange={(e)=> setHeight(e.target.value)} type="text" placeholder="Enter your height" className="height-field" />
        </div>
        <div className="search">
        <button onClick={Submit}>Submit</button>
        </div>
        <div className="reload-btn">
        <button onClick={Reload}>Reload</button>
        </div>
        <h3 style={{color:"green", marginTop: "10px" , fontSize: "25px"}}>{submit}</h3>
        </div>
    )
}
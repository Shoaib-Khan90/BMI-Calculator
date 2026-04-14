import { useState } from "react"
import "./Bmi.css"

export default function BMI(){

    const [submit , setSubmit] = useState("")
    const [reload , setReload] = useState("")

    
    return(
        <div className="App">
            <h1>BMI Calculator</h1>
        <div className="Main">
        <p>Weight (lbs)</p>
        <input type="text" placeholder="Enter your weight" className="weight-field" />
        <p>Height (in)</p>
        <input type="text" placeholder="Enter your height" className="height-field" />
        </div>
        <div className="search">
        <button>Submit</button>
        </div>
        <div className="reload-btn">
        <button>Reload</button>
        </div>
        </div>
    )
}
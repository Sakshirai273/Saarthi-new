import React from "react"
import "./city.css"


 const City = () => {
    return(
        <div className="add">
        <h2 className="text">Select the city to see reactions</h2>
        <div className="city">
            <a href="/destination" className="link">Delhi</a>
        </div>
        </div>
    )
 }

 export default City;
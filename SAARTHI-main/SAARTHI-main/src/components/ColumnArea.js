import React from "react"
import Column from "./Column";
import first from './img/ted-bryan-yu-5mezpWin6T8-unsplash.jpg'
import second from './img/bg-2.jpg'
{/* <a href="./"></a> */}
const ColumnArea = () => {
    return (
        <section id="blog-area">
            <div class="container">
                <div class="row text-center inner">
                    <Column 
                    image={first} heading="Local Tour Guide"
                    data = "We provide our user Guides to make their vacation most wonderful and time efficient. As per user's requirement we are here with vehicle facility too. "/>
                    <Column 
                    image={second} heading="Verfied Information"
                    data = "We all have information about places but we provide informations with credible analysis which makes it more trustworthy to our users ."/>
                </div>
            </div>
        </section>
    )
}

export default ColumnArea;
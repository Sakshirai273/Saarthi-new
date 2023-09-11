import React from "react";
import { Parallax} from "react-parallax"
import Img from "./img/bg.jpg"
import Navbar from "./Navbar";
import './photo.css'
const Start = () => {
    return (
        <Parallax bgImage={Img} strength={800} blur={1.5}>
            <Navbar />
            <div id="section1">
                <header id="header-area" class="intro-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <div class="header-content">
                                    <h1 className="ra" style={{ color: "rgb(212, 236, 76)" }}>RAHIII</h1>
                                    <h4>only guide has the answer!!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </Parallax>
            )

    }

            export default Start
import React from "react";
import Pic from "./img/4-5.jpg"
import './photo.css'
const BigColumn = () => {
    return(
        <div class="row">
					<div class="col-lg-12">
						<div class="tm-box">
							<img src={Pic} alt="Img" class="img-fluid"/>
							<div class="tm-box-description">
								<h2>Our Vision</h2>
								<p class="tm-box-p">
									<ul className="name">
										<li className="yash"><p><span className="sp">VR </span>:- We will use vr to make our users friendly to any place without physically being there.</p></li><br></br>
										<li className="yash"><p> <span className="sp">Bookmark</span> :- To save experiences of credible users and adding things to wishlist.</p></li><br></br>
										{/* <li className="yash">Rating System</li><br></br> */}
										<li className="yash"><p><span className="sp">Accommodation</span> :- In future along with guide and vehicle we will be there with living accomodation too.</p></li><br></br>
										{/* <li className="yash">Ar Vr</li><br></br> */}

									</ul>
								</p>
								
							</div>
						</div>
					</div>
				</div>
    )
}

export default BigColumn;
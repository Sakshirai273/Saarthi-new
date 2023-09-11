import React, { Component } from 'react';
import { Parallax } from "react-parallax";
import Imag from "./img/bg-3.jpg"
import axios from 'axios';
class ContactForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        data: [],
      };
    }
    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    
    handleSubmit = e => {
    //   e.preventDefault();
      const { name, email, subject,message} = this.state;
      const book = {
        name,
        email,
        subject,
        message
      };
      axios
        .post('http://localhost:8001/create', book)
        .then(() => console.log('Book Created'),
  
  
          this.callAPI(),
  
        //   this.setState({
        //     bookID: '',
        // bookTitle: '',
        // bookAuthor: '',
        // data: [],
        //   })
     
        )
        
        .catch (err => {
        console.error(err);
      });
    };
    callAPI() {
      //API request
      axios.get("http://localhost:3001/home").then(response => {
  
        //getting and setting api data into variable
  
        this.setState({ data: response.data });
  
      })
    }
  
    render() {
      
    
    return (
        <div id="section4">
            <Parallax bgImage={Imag} strength={600}>
                <section id="contact-area" class="contact-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 text-center inner">
                                <div class="contact-content">
                                    <h1>contact form</h1>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <p>Please fill this contact form our representatives will soon reach to you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <form  class="contact-form" onSubmit={this.handleSubmit}> 
                                    <div class="col-sm-6 contact-form-left">
                                        <div class="form-group">
                                            <input name="name" type="text" class="form-control" id="name" placeholder="Name"  onChange={this.handleInputChange} />
                                            <input type="email" name="email" class="form-control" id="mail" placeholder="Email"   onChange={this.handleInputChange}/>
                                            <input name="subject" type="text" class="form-control" id="subject"
                                                placeholder="Subject"   onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <div class="col-sm-6 contact-form-right">
                                        <div class="form-group">
                                            <textarea name="message" rows="6" class="form-control" id="comment"
                                                placeholder="Your message here..."  onChange={this.handleInputChange}></textarea>
                                          <button type="submit" class="btn btn-default" onClick={(e)=>this.handleClear} > Send</button>
                                         
                                          
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Parallax>
        </div>
    );
        }
}


export default ContactForm;
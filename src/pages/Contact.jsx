import React, { useRef } from "react";
import { useState } from "react";
import "../stylesheets/about.css";
import"../stylesheets/footer.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      if (form.current[0].value === "") {
              Swal.fire("Uh oh!", "Name can't be left blank.", "error");
              
             
            }
  
      emailjs.sendForm('service_i2zovv8', 'template_ydeqccb', form.current, '5ZeAbjvk30ZVvk5Fx')
        .then((result) => {
            console.log(result.text);
            console.log("Sent!");
            Swal.fire("Success!", "Message was successfully sent!", "success");
            // return window.location.reload(true
            // return
            // const [name, setName] = useState([]);
            // const [email, setEmail] = useState([]);
            // const [message, setMessage] = useState([]);
           
        }, (error) => {
            console.log(error.text);
            Swal.fire("Uh oh!", "An unexpected error occurred.", "error");
        });
    };
    // function name (e) {
    //   const name = e.target.value;
    // }
 
  return (
    <section id="contact">
    <h1 class="headings">Contact Me</h1>
    <form ref={form} class="form" onSubmit={sendEmail}>
        <input type="text" name="user_name" class="input" placeholder="Full Name" />
        <input type="email" name="user_email" class="input" placeholder="Email Address" />
        <textarea name="message" id="msg" cols="30" rows="10" placeholder="Enter Your Message" ></textarea>
        <input type="submit" value="SEND" id="send"/>
    </form>
    </section>
    
  );
 
};


// const handleNameChange = () =>{
//   [name, setName] = useState("");
// };
// const handleEmailChange = () => {
// [email, setEmail] = useState("")
// };
// const handleMessageChange = () =>{
//   [message, setMessage] = useState("")
// };
// value={{name}} onChange = {handleNameChange}
// value={email} onChange= {handleEmailChange}
// value={message} onChange = {handleMessageChange}

// value={email} onClick={email}
// value={name} onClick={name} 
// value={message} onClick={message}
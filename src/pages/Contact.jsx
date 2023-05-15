import React, { useRef } from "react";
import "../stylesheets/about.css";
import"../stylesheets/footer.css";
// import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
// import { defaults } from "gh-pages";
// import "../../styles/form.css";

// const serviceId = "default_service";
// const templateId = "template_c8segls";
// const publicKey = "rZUzDLHjPiVUuMlz3";

// export const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Checks if name is empty
//     if (form.current[0].value === "") {
//       Swal.fire("Uh oh!", "Name can't be left blank.", "error");
//       return;
//     }

//     // Checks if email is empty
//     if (form.current[1].value === "") {
//       Swal.fire("Uh oh!", "Email can't be left blank.", "error");
//       return;
//     }

//     // Checks if message is empty
//     if (form.current[2].value === "") {
//       Swal.fire("Uh oh!", "Message can't be left blank.", "error");
//       return;
//     }

//     emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
//       (result) => {
//         console.log(result.text);
//         console.log("Sent!");
//         Swal.fire("Success!", "Message was successfully sent!", "success");
//       },
//       (error) => {
//         console.log(error.text);
//         Swal.fire("Uh oh!", "An unexpected error occurred.", "error");
//       }
//     );
//   };
export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_i2zovv8', 'template_ydeqccb', form.current, '5ZeAbjvk30ZVvk5Fx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <section id="contact">
    <h1 class="headings">Contact Me</h1>
    <form ref={form} class="form" onSubmit={sendEmail}>
        <input type="text" name="user_name" class="input" placeholder="Full Name"/>
        <input type="email" name="user_email" class="input" placeholder="Email Address"/>
        <textarea name="message" id="msg" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
        <input type="submit" value="SEND" id="send"/>
    </form>
    </section>
  );
};
// }


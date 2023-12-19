import { useRef } from "react";
import "./Contact.style.scss";
import Navbar from "../Navbar/Navbar.component";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        process.env.REACT_APP_EMAIL_JS_KEY,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE,
        refForm.current,
        process.env.REACT_APP_EMAIL_JS_PUBLIC,
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          window.location.reload(true);
        },
        (error) => {
          console.log(error.text);
          alert("Message failed to send, please try again.");
        }
      );
  };
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="contact-form">
          <p className="contact-title">CONTACT ME</p>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                ></input>
              </li>
              <li>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                ></input>
              </li>

              <li>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              <li>
                <button className="flat-button" type="submit" value="Submit">
                  SUBMIT
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

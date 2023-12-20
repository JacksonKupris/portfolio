import { useRef, useState } from "react";
import "./Contact.style.scss";
import Navbar from "../Navbar/Navbar.component";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
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
          setEmail("");
          setName("");
          setSubject("");
          setMessage("");
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>
              </li>
              <li>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
              </li>
              <li>
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                ></input>
              </li>
              <li>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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

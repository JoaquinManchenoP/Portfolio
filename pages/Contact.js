import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wc7uzlw",
        "template_vel7xno",
        e.target,
        "user_yl53YgwB8IxhiNBX4fBbO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    console.log("send email trigered");
    alert("Tank you, I'll get back to you as soon as possible");
  }

  return (
    <div className="contactPage">
      <div className="getInTouch text-3xl mb-12 text-semibold  ">
        <h1>Get in touch !</h1>
      </div>
      <div className="form font-semibold text-md">
        <form onSubmit={sendEmail}>
          <label>Email:</label>
          <br />
          <input
            type="text"
            className="h-12 w-72 bg-gray-300 shadow-xl rounded-md mt-2 mb-8"
            name="email"
          ></input>
          <br />
          <label>Subject:</label>
          <br />
          <input
            type="text"
            className="h-12 w-72 bg-gray-300 shadow-xl rounded-md mt-2 mb-8"
            name="subject"
          ></input>
          <br />
          <label>Message :</label>
          <br />
          <input
            type="text"
            className="h-32 w-4/6 bg-gray-300 shadow-xl rounded-md mt-2 mb-8"
            name="message"
          ></input>
          <br />

          <motion.input
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="h-12 w-20 bg-black placeholder-white text-center text-white rounded-xl shadow-xl "
            type="submit"
            placeholder="Send"
            value="Send"
          ></motion.input>
        </form>
      </div>
    </div>
  );
}

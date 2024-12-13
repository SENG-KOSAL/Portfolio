import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qh7cn3m",
        "template_osgwhnw",
        form.current,
        "DkqQZ1OKd61yzjsWa"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );

    e.target.reset(); // Reset form fields after submission
  };
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="material-icons text-red-500">Email</span>
              <a href="mailto:contact@example.com" className="hover:underline">
                sengkosal023@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <a href="https://t.me/Jackkk_errr">
              <span className="material-icons text-red-500">Phone:</span>
              <span className="hover:underline">097 992 5420</span>
              </a>
            </div>
            <div className="flex space-x-4">
              
              <a
                href="https://github.com/SENG-KOSAL"
                className="text-gray-600 mx-3 hover:text-black-600"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://t.me/Jackkk_errr"
                className="text-gray-600 mx-3 hover:text-blue-600"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/seng-kosal-3a5574281/"
                className="text-gray-600 mx-3 hover:text-blue-600"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="mt-20 md:w-1/2">
            <a
              href="/images/CV_SENG_KOSAL.pdf"
              download="CV-SENG_KOSAL.pdf" // Desired file name
              className="p-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              <button className="w-full p-4  text-white   ">Download CV</button>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:pr-8">
          <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-2 bg-gray-600 text-white border border-gray-600 rounded"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-2 bg-gray-600 text-white border border-gray-600 rounded"
              required
            />
            <textarea
              type="Message"
              name="Message"
              placeholder="Your Message"
              className="w-full p-2 bg-gray-600 text-white border border-gray-600 rounded"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

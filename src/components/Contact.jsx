import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Toastify  from 'toastify-js'
const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3tfinni', 'template_l3humk9', form.current, {publicKey: '-4_1XVLTXkBSvoCAq'})
      .then((result) => {
          console.log(result.text);
          Toastify({
            text: "Message succesfully sended",
            className: "info",
            position: "center",
            gravity: "top",
            style: {
              fontFamily:"Poppins",
              position: "absolute",
              left: "40%",
              padding: "10px 20px",
              borderRadius: "10px",
              background: "#FB6356",
              color: "white",
            }
        }).showToast();
      }, (error) => {
          console.log(error.text);
          Toastify({
            text: "Error sending message, Try Again",
            className: "info",
            position: "center",
            style: {
              fontFamily:"Poppins",
              position: "absolute",
              left: "40%",
              padding: "10px 20px",
              borderRadius: "10px",
                background: "#FB6356",
                color: "white",
            }
        }).showToast();
      });
  };
  return (
    <section className="h-[80vh] flex items-start justify-center">
      <form ref={form}  className="flex flex-col items-center py-10 gap-8" onSubmit={handleSubmit}>
        <h3 className="font-poppins text-center text-primary text-3xl">CONTACT US</h3>
        <div className="flex items-center ">
          <label htmlFor="name" className="font-bold font-poppins w-[200px]">Name:</label>
          <input id="name" type="text" name="name" className="border border-primary rounded-md outline-none focus:shadow-sm focus:shadow-primary w-[250px]" required />
        </div>
        <div className="flex items-center ">
          <label htmlFor="email" className="font-bold font-poppins w-[200px]">Email:</label>
          <input id="email" type="email" name="email" className="border border-primary rounded-md outline-none focus:shadow-sm focus:shadow-primary w-[250px]" required />
        </div>
        <div className="flex items-start justify-end " >
          <label htmlFor="message" className="font-bold font-poppins w-[200px] ">Message:</label>
          <textarea id="message" type="text" name="message" className="border border-primary h-[100px] resize-none outline-none focus:shadow-sm focus:shadow-primary rounded-md w-[250px]" ></textarea>
        </div>
        <div className="flex items-center justify-center">
        <input type="submit" value="Submit" className="font-poppins bg-primary text-[#FFF] cursor-pointer py-2 px-8  rounded-md" />
        </div>
       
      </form>
    </section>
    
  )
}

export default Contact
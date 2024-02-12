import React from 'react'

const Contact = () => {
  return (
    <section className="h-[80vh] flex items-start justify-center">
      <form  className="flex flex-col items-center py-10 gap-8">
        <h3 className="font-poppins text-center text-primary text-3xl">CONTACT US</h3>
        <div className="flex items-center ">
          <label for="name" className="font-bold font-poppins w-[200px]">Name:</label>
          <input id="name" type="text" name="name" className="border border-primary rounded-md outline-none focus:shadow-sm focus:shadow-primary w-[250px]" required />
        </div>
        <div className="flex items-center ">
          <label for="email" className="font-bold font-poppins w-[200px]">Email:</label>
          <input id="email" type="email" name="email" className="border border-primary rounded-md outline-none focus:shadow-sm focus:shadow-primary w-[250px]" required />
        </div>
        <div className="flex items-start justify-end " >
          <label for="message" className="font-bold font-poppins w-[200px] ">Message:</label>
          <textarea id="message" type="text" name="message" className="border border-primary h-[100px] resize-none outline-none focus:shadow-sm focus:shadow-primary rounded-md w-[250px]" ></textarea>
        </div>
        <div className="flex items-center justify-center">
        <input type="submit" value="Submit" className="font-poppins bg-primary text-[#FFF] cursor-pointer py-2 px-8  rounded-md"/>
        </div>
       
      </form>
    </section>
    
  )
}

export default Contact
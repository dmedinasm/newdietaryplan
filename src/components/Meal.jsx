import React from 'react'
const Meal = ({title, image,carb,fat,protein, link}) => {

  return (
    <>
      <div className="flex flex-col items-center justify-center w-[300px] relative  m-5 rounded-xl shadow-lg pb-12 overflow-hidden " >
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-[100%] h-[200px] object-cover rounded-t-xl overflow-hidden "><img className="w-[100%] h-[200px] object-cover rounded-t-xl hover:scale-125  transition duration-500 ease-in-out  " src={image} alt="Card image cap" /></a>
        <div className="font-poppins font-bold text-primary text-center my-4 px-4 ">{title}</div>
        <div className="flex flex-col items-center justify-end ">
          <div className="flex items-center justify-between">
            <ul  className="w-[150px] font-poppins list-disc  ">
              <li className='text-primary'><span style={{'color':'black'}}>PROTEIN</span></li>
              <li className='text-primary'><span style={{'color':'black'}}>FAT</span></li>
              <li className='text-primary'><span style={{'color':'black'}}>CARB</span></li>
            </ul>
            <ul className="flex flex-col items-end font-poppins">
              <li>{protein} g</li>
              <li>{fat} g</li>
              <li>{carb} g</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Meal
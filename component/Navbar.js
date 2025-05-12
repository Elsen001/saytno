import React from 'react'
import { FaRegUser } from "react-icons/fa6";

import { AiOutlinePlus } from 'react-icons/ai'

const BottomNav = () => {
  return (
    <nav >
           <FaRegUser  />

      <FaRegUser className='l1'/>

      
      <div className='plus'>
        <AiOutlinePlus size={24} />
      </div>

      <FaRegUser className='r1'/>
      <FaRegUser />

    </nav>
  )
}

export default BottomNav

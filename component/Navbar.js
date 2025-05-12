import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import s from "./img/s.jpg"
import a from "./img/a.jpg"
import d from "./img/d.jpg"
import f from "./img/f.jpg"
import { AiOutlinePlus } from 'react-icons/ai'
import Image from 'next/image';

const BottomNav = () => {
  return (
    <nav >
           <Image src={f} alt=''/>
           <Image src={d} className='r1' alt=''/>
           <Image src={a} className='l1' alt=''/>
           <Image src={s} alt=''/>


      
      <div className='plus'>
        <AiOutlinePlus size={24} />
      </div>


    </nav>
  )
}

export default BottomNav

import Image from 'next/image'
import React from 'react'
import img from './img/images.jpeg'
import bg from './img/1.jpg'
import msg from "./img/2.png"
import poct from "./img/4.png"
import save from "./img/5.webp"
import { MdOutlineMessage } from "react-icons/md";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";


const Main = () => {
    return (
        <main>
            <div className="card">
                <div
                    className="card-header"
                    style={{
                        backgroundImage: `url(${bg.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className='top'>
                        <div className="user">
                            <Image src={img} alt="" />
                            <p>nigarsultanova</p>
                        </div>
                        <div className="dot">...</div>
                    </div>
                    <div className='test'>
                        <div className='msg'><MdOutlineMessage /><span>14</span></div>
                        <div className='poct'><IoFileTrayFullOutline />
                        </div>
                        <div className='save'><FaRegSave /></div>
                    </div>
                </div>
                <div className="card-bottom">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quidem😊👌! </p>
                    <div className="bottom">
                        <div className="shared">shared</div>
                        <div className="time">1 min.</div>
                    </div>
                </div>
            </div>
            <div className="card cd-2">
                <div
                    className="card-header"
                   
                >
                    <div className='top'>
                        <div className="user">
                            <Image src={img} alt="" />
                            <p>nigarsultanova</p>
                        </div>
                        <div className="dot">...</div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quidem😊👌! </p>

                    <div className='test'>
                        <div className='msg'><MdOutlineMessage /><span>14</span></div>
                        <div className='poct'><IoFileTrayFullOutline />
                        </div>
                        <div className='save'><FaRegSave /></div>
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="bottom">
                        <div className="shared">shared</div>
                        <div className="time">1 min.</div>
                    </div>
                </div>
            </div>
            <div className="card cd-2">
                <div
                    className="card-header"
                   
                >
                    <div className='top'>
                        <div className="user">
                            <Image src={img} alt="" />
                            <p>nigarsultanova</p>
                        </div>
                        <div className="dot">...</div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quidem😊👌! </p>

                    <div className='test'>
                        <div className='msg'><MdOutlineMessage /><span>14</span></div>
                        <div className='poct'><IoFileTrayFullOutline />
                        </div>
                        <div className='save'><FaRegSave /></div>
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="bottom">
                        <div className="shared">shared</div>
                        <div className="time">1 min.</div>
                    </div>
                </div>
            </div>
            <div  className="card">
                <div
                    className="card-header"
                    style={{
                        backgroundImage: `url(${bg.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className='top'>
                        <div className="user">
                            <Image src={img} alt="" />
                            <p>nigarsultanova</p>
                        </div>
                        <div className="dot">...</div>
                    </div>
                    <div className='test'>
                        <div className='msg'><MdOutlineMessage /><span>14</span></div>
                        <div className='poct'><IoFileTrayFullOutline />
                        </div>
                        <div className='save'><FaRegSave /></div>
                    </div>
                </div>
                <div className="card-bottom">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quidem😊👌! </p>
                    <div className="bottom">
                        <div className="shared">shared</div>
                        <div className="time">1 min.</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main

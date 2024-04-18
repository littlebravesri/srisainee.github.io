import React, { useState } from 'react'
import Me from '../assets/me.jpg';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { MdOutlinePhoneIphone } from "react-icons/md";

export const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (
        // <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center item-center p-4 ' >
        //     <form action='https://getform.io/f/lbkmppdb' method='POST' className='flex flex-col max-w-[600px] w-full'>
        //         <div className='pb-8'>
        //             <p className='text-4xl font-cold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
        //             <p className='py-4 text-gray-300'>Submit the form below or contact me in this email</p>
        //         </div>
        //         <input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6] p-2' />
        //         <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />
        //         <textArea name='message' className=' p-2 bg-[#ccd6f6]' placeholder='Message'></textArea>
        //         <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex item-center'>Lets Collaborate</button>
        //     </form>
        // </div>
        <div name='contact' className='w-full h-screen bg-[#D7CEC7] text-[#76323f]'>
            <div className='flex flex-col justify-center items-center w-full h-full '>
                <div className='max-w-[1300px] w-full grid grid-cols-2 gap-8 '>
                    <div className='pb-8 '>
                        <p className='lg:m-10 text-4xl font-semibold inline border-b-4 border-[#76323f]'>Let's Connect</p>
                    </div>
                    <div></div>
                </div>

                <div className='max-w-[1300px] px-4'>
                    <div className='text-[#76323f] p-3 flex gap-3 h-[100px]'>
                        <a href="https://github.com/srisainee" target='_blank'>
                            <button className='group text-gray-700 border-2 border-gray-900 px-6 py-3 my-2 
                    flex items-center hover:bg-[#c09f80] hover:border-[#c09f80]'> Github
                                <span className='group-hover:rotate-[360deg] duration-700'>
                                    <FaGithub className='ml-3' />
                                    {/* <HiArrowNarrowRight className='ml-3' /> */}
                                </span>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/sri-sainee-thirumurugan" target='_blank'>
                            <button className='group text-gray-700 border-2 border-gray-900 px-6 py-3 my-2 
                    flex items-center hover:bg-[#c09f80] hover:border-[#c09f80]'>My Linkedin
                                <span className='group-hover:rotate-[-360deg] duration-700'>
                                    <FaLinkedinIn className='ml-3' />
                                    {/* <HiArrowNarrowRight className='ml-3' /> */}
                                </span>
                            </button>
                        </a>
                        <a>
                            <button className='group text-gray-700 border-2 border-gray-900 px-6 py-3 my-2 
                    flex items-center hover:bg-[#c09f80] hover:border-[#c09f80]' onClick={togglePopup}>Contact me
                                <span className='group-hover:rotate-[-360deg] duration-700'>
                                    <HiOutlineMail className='ml-3' />
                                </span>
                            </button>
                        </a>
                        {showPopup && (
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-80 flex justify-center items-center">
                                <div className="bg-white p-8 rounded-md w-[400px] ">
                                    <h2 className=" flex gap-5 text-xl font-bold mb-4"><BsFillPersonLinesFill className='mt-1' /> srisainee2310@gmail.com</h2>
                                    <p className=" flex gap-5 text-xl font-bold mb-4"><MdOutlinePhoneIphone className='mt-1' />+61 413931624</p>
                                    <button onClick={togglePopup} className="text-gray-700 border border-gray-900 px-4 py-2 mt-4">Close</button>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* <div className="flex justify-center items-center">
                        <img src={Me} alt="" className='rounded-full h-[300px]' />
                    </div> */}
                </div>

            </div>
        </div>
    )
}

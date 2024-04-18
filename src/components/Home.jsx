import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#D7CEC7] '>
            {/* Container */}
            <div className='mx-auto px-8 flex flex-col justify-center h-full items-center '>
                <p className='text-[#76323f] text-7xl  '>Hello, my name is Sri!</p>
                {/* <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0] '>I'm a Data Analyst</h2> */}
                {/* <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sri Sainee Thirumurugan</h1> */}
                {/* <p className='text-[#8892b0] py-4 max-w-[700px]'>is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p> */}
                {/* <div className='text-[#76323f] p-3 mx-60 flex gap-4'>
                    <a href="https://www.linkedin.com/in/sri-sainee-thirumurugan" target='_blank'>
                        <button className='group text-gray-700 border-2 border-gray-900 px-6 py-3 my-2 
                    flex items-center hover:bg-[#c09f80] hover:border-[#c09f80]'>My Linkedin
                            <span className='group-hover:rotate-[-360deg] duration-700'>
                                <FaLinkedinIn className='ml-3' />
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </a>
                    <a href="https://github.com/srisainee" target='_blank'>
                        <button className='group text-gray-700 border-2 border-gray-900 px-6 py-3 my-2 
                    flex items-center hover:bg-[#c09f80] hover:border-[#c09f80]'>My GitHub
                            <span className='group-hover:rotate-[-360deg] duration-700'>
                                <FaGithub className='ml-3' />
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </a>

                </div> */}
            </div>
        </div>
    )
}

export default Home
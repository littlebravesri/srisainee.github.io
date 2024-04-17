import React from 'react'
import { ExperienceItem } from './ExperienceItem.jsx';
import { workHistory } from '../data/myExperience.js'
// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import ReactImg from '../assets/react.png';
// import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
// import GitHub from '../assets/github.png';
// import Tailwind from '../assets/tailwind.png';
// import Mongo from '../assets/mongo.png';

const Experience = () => {
    return (
        <div name='experience' className='w-full h-screen bg-[#D7CEC7] text-[#76323f]'>
            <div className='flex flex-col min-h-[1200px] justify-center items-center w-full h-full '>
                <h1 className=' text-4xl font-bold text-center'>Work Experience</h1>
                {workHistory.map((item, id) => (
                    <ExperienceItem key={id}
                        title={item.title}
                        description={item.description}
                        skills={item.skill} />
                ))}
            </div>
        </div>

        // <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        //     {/* Container */}
        //     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        //         <div>
        //             <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
        //             <p className='py-4'>These are my skills stack i worked with</p>
        //         </div>
        //         {/* Container for icons */}
        //         <div className='w-full grid grid-col-2 sm:grid-cols-4 gap-4 text-center py-8'>
        //             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        //                 <img src={HTML} alt="HTML" className='w-20 mx-auto' />
        //                 <p className='my-4'>HTML</p>
        //             </div>
        //             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        //                 <img src={CSS} alt="CSS" className='w-20 mx-auto' />
        //                 <p className='my-4'>HTML</p>
        //             </div>
        //             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        //                 <img src={JavaScript} alt="JavaScript" className='w-20 mx-auto' />
        //                 <p className='my-4'>HTML</p>
        //             </div>
        //             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        //                 <img src={ReactImg} alt="ReactImg" className='w-20 mx-auto' />
        //                 <p className='my-4'>HTML</p>
        //             </div>
        //             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        //                 <img src={Node} alt="Node" className='w-20 mx-auto' />
        //                 <p className='my-4'>HTML</p>
        //             </div>
        //             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        //                 <img src={FireBase} alt="FireBase" className='w-20 mx-auto' />
        //                 <p className='my-4'>HTML</p>
        //             </div>
        //             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        //                 <img src={GitHub} alt="GitHub" className='w-20 mx-auto' />
        //                 <p className='my-4'>HTML</p>
        //             </div>
        //             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        //                 <img src={Tailwind} alt="Tailwind" className='w-20 mx-auto' />
        //                 <p className='my-4'>HTML</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Experience

import React from 'react';
import Me from '../assets/me.jpg';

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#D7CEC7] text-[#76323f] '>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1200px] w-full grid grid-cols-2  gap-8'>
                    <div className='pb-8 '>
                        <p className='text-4xl font-semibold inline border-b-4 border-[#76323f]'>About</p>
                    </div>
                    <div></div>
                </div>

                <div className='max-w-[1300px] w-full grid sm:grid-cols-1 lg:grid-cols-2 px-4'>
                <div className="flex justify-center items-center">
                        {/* Set height to 100% for full-height image */}
                        <img src={Me} alt="" className='h-[500px] rounded-md' />
                    </div>
                    <div className='text-3xl flex justify-center items-center'>
                        <p>
                            I am a data enthusiast with a passion for turning numbers into stories.
                            By day, I am crunching data and building insightful dashboards.
                            By night, I am diving into side projects and exploring new ways to visualize trends.
                            When I am not glued to my screen, you will find me outdoors, soaking up the sun or with my plants.
                            I am thrilled to share my journey and projects with you here!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { projects } from "../data/data.js";
import { FaGithub } from "react-icons/fa";

const Work = () => {
  // projects file
  const project = projects;
  return (
    <div name='projects' className='bg-[#D7CEC7] text-[#76323f] '>
      <div className='max-w-[1300px] mx-auto p-4'>
        <div className='pb-8 pt-10 lg:pt-20'>
          <p className='text-4xl lg:m-10 font-semibold inline border-b-4 border-[#76323f]'>My Projects</p>
        </div>

        {/* container for projects */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-9 py-6 lg:mx-10">
          {/* Loop through each project */}
          {project.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '250px',
                  cursor: 'zoom-in',
                }}
                className="shadow-lg group container rounded-md mx-auto content-div hover:scale-[1.1] transition-transform duration-300 ease-in-out"
              ></div>
              <div className="flex flex-col justify-center items-center mt-4 lg:mt-8">
                <h2 className='text-lg lg:text-xl font-bold border-b-2 border-[#76323f] text-center'>{item.title}</h2>
                <p className='text-md lg:text-lg'>{
                  item.description.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))
                }</p><br />
                <p className='text-sm lg:text-lg'><strong>Skills: </strong>{item.skill}</p>
                <div className='text-[#76323f] p-2 lg:p-3 flex gap-3'>
                  {item.github &&
                    <a href={item.github} target="_blank" rel="noopener noreferrer" className='border-2 border-[#76323f] px-4 lg:px-6 py-2 lg:py-3 flex items-center hover:bg-[#c09f80] hover:border-[#c09f80]'>
                      GitHub
                      <FaGithub className='ml-2 lg:ml-3 ' />
                    </a>
                  }
                  {item.powerbi &&
                    <a href={item.powerbi} target="_blank" rel="noopener noreferrer" className=' border-2 border-[#76323f]  px-4 lg:px-6 py-2 lg:py-3 flex items-center hover:bg-[#c09f80] hover:border-[#c09f80]'>
                      PowerBI
                    </a>
                  }
                  {item.tableau &&
                    <a href={item.tableau} target="_blank" rel="noopener noreferrer" className='border-2 border-[#76323f]px-4 lg:px-6 py-2 lg:py-3 flex items-center hover:bg-[#c09f80] hover:border-[#c09f80]'>
                      Tableau
                    </a>
                  }
                  {item.live &&
                    <a href={item.live} target="_blank" rel="noopener noreferrer" className=' border-2 border-[#76323f] px-4 lg:px-6 py-2 lg:py-3 flex items-center hover:bg-[#c09f80] hover:border-[#c09f80]'>
                      Shiny App
                    </a>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default Work;

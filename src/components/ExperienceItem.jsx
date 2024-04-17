import React from 'react'

export const ExperienceItem = ({ title, description, skills }) => {
  return (
    <ol className='flex  border-t border-stone-600 mt-10 '>
      <li >
        <div className=' w-3 h-3 bg-[#76323f] rounded-full -mt-1.5  border-stone-600' />
        <div className=' w-3 h-3 bg-[#76323f] rounded-full -mt-3 ml-[20%]  border-stone-600' />
        <div className=' w-3 h-3 bg-[#76323f] rounded-full -mt-3 ml-[40.2%] border-stone-600' />
        <div className=' w-3 h-3 bg-[#76323f] rounded-full -mt-3 ml-[60.3%] border-stone-600' />
        <div className=' w-3 h-3 bg-[#76323f] rounded-full -mt-3 ml-[80.5%] border-stone-600' />
        <div className='flex gap-4 md:flex-col-3 items-center justify-start text-xs md:text-sm mt-4'>
          <div>
            <p className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5E] rounded-md'>{2022}</p>
            <p className='text-lg font-semibold text-[#001b5e]'>{title}</p>
            <p className='my-1 text-sm font-normal leading-none text-[#001b5E]'>{description}</p>
            <p className='my-2 text-base font-normal text-[#001b5e]'>{skills}</p>
          </div>
          <div>
            <p className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5E] rounded-md'>{2022}</p>
            <p className='text-lg font-semibold text-[#001b5e]'>{title}</p>
            <p className='my-1 text-sm font-normal leading-none text-[#001b5E]'>{description}</p>
            <p className='my-2 text-base font-normal text-[#001b5e]'>{skills}</p>
          </div>
          <div>
            <p className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5E] rounded-md'>{2022}</p>
            <p className='text-lg font-semibold text-[#001b5e]'>{title}</p>
            <p className='my-1 text-sm font-normal leading-none text-[#001b5E]'>{description}</p>
            <p className='my-2 text-base font-normal text-[#001b5e]'>{skills}</p>
          </div>
          <div>
            <p className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5E] rounded-md'>{2022}</p>
            <p className='text-lg font-semibold text-[#001b5e]'>{title}</p>
            <p className='my-1 text-sm font-normal leading-none text-[#001b5E]'>{description}</p>
            <p className='my-2 text-base font-normal text-[#001b5e]'>{skills}</p>
          </div>
          <div>
            <p className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5E] rounded-md'>{2022}</p>
            <p className='text-lg font-semibold text-[#001b5e]'>{title}</p>
            <p className='my-1 text-sm font-normal leading-none text-[#001b5E]'>{description}</p>
            <p className='my-2 text-base font-normal text-[#001b5e]'>{skills}</p>
          </div>
        </div>
      </li>
    </ol>
  )
}

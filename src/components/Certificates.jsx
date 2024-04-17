import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react'
import Azurec from '../assets/certificates/azurec.png'
import Baf from '../assets/certificates/baf.png'
import Kpmg from '../assets/certificates/kpmg.png'
import MSA from '../assets/certificates/msa.png'
import Postgre from '../assets/certificates/postgre.png'
import Sparks from '../assets/certificates/sparks.png'
import Sql from '../assets/certificates/sql.png'
import Udacity from '../assets/certificates/udacity.png'
import './Certificate.css'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const certificatesLogo = [Azurec, Baf, Kpmg, MSA, Postgre, Sparks, Sql, Udacity]


export const Certificates = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const NextArrow = ({ onClick }) => {
        return (
            <div className='arrow next' onClick={onClick}>
                <FaArrowRight className='text-3xl' />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className='arrow prev' onClick={onClick}>
                <FaArrowLeft className='text-3xl' />
            </div>
        )
    }
    const settings = {
        infinite: true, //cycles through image always like a loop
        lazyLoad: true,
        speed: 300, //in ms to transtition 
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    }
    return (
        <div name='certificate' className='w-full h-screen bg-[#D7CEC7] text-[#76323f] '>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1200px] w-full  gap-8'>
                    <div className='pb-8'>
                        <p className='text-4xl lg:m-10 font-semibold inline border-b-4 border-[#76323f]'>Certificates</p>
                    </div>
                    <Slider {...settings}>
                        {certificatesLogo.map((img, id) => (
                            <div className={id === imageIndex ? "slide activeSlide" : "slide"}>
                                <img src={img} alt={img} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>

    )
}

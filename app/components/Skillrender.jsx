

'use-client'
import Link from 'next/link';
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Skilled from "./skilled";
import {useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
 
    useEffect(()=>{
        AOS.init({duration: 2000});      
        
        }, []);
    return (
        <div className=" mt-10 grid gap-5  justify-center items-center grid-cols-1  md:grid-cols-2">

            <div  data-aos="slide-up">   <h3 className=' bg-clip-text text-transparent bg-gradient-to-r from-lightBlue to-amber1 font-bold  text-2xl  text-left  text-lightBlue py-2' >An Enthusiastic Developer Driven by creativity  </h3>


                <p className='text-ash2 text-base pt-3 font-light'>
                    Over the past 4 years, I&apos;ve dedicated myself to mastering a range of skills essential
                    for successful web development. From graphic design to SEO, my expertise has been honed through building  projects and continuous learning. With each accomplishment, I&apos;ve grown more adept at crafting compelling digital experiences that resonate with audiences and drive tangible results. These accomplished skills form the foundation of my professional journey,
                    propelling me forward as I strive for excellence in every endeavor.</p>
                <Link className='font-bolder' href='https://lasglowtech.com.ng'><button className=' font-bold text-darkBlue text-lg py-2 px-4 mt-6   shadow-white-4xl rounded-2xl bg-gradient-to-r from-amber1 via-amber1 to-amber2 hover:scale-110 '>Visit Website</button> </Link>


            </div>

            <div className='shadow-5xl rounded-3xl' data-aos="fade-in">


                <ResponsiveMasonry
                    columnsCountBreakPoint={{ 350: 2, 750: 3, 900: 3 }}
                    gutter='4x' >

                    <Masonry>

                        {Skilled.map((skilled, index) => {
                            return (
                                // <div className=" py-1 flex flex-row px-2 rounded-2xl">

                                <button className="mx-1 my-2 flex flex-row text-lightBlue border items-center shadow-2xl bg-gradient-to-tl from-darkestBlue  via-greyBlack  to-darkestBlue  border-ash2  w-100  px-2 py-2 rounded-lg" key={index}  >



                                    <Image src={skilled.picture}
                                        className=' w-auto h-auto pl-2'
                                        width={20}
                                        height={20}
                                        alt='hero-picture' />

                                    <h3 className=" text-base px-2">{skilled.title}</h3>



                                </button>



                            )
                        })}
                    </Masonry>


                </ResponsiveMasonry>
            </div>






        </div>







    );
}

export default Skills;



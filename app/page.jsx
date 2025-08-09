
"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'
import Services from './components/services'
import Skills from './components/Skillrender'
import Aboutus from './components/about'
import ScrollTop from './components/scrolltop';
import Projects from './components/project'
import Contact from './components/contact'
import { motion } from "framer-motion";
import { FaCircle } from 'react-icons/fa';
// import { motion, AnimatePresence } from "framer-motion"


export default function Home() {
  



  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1SZ78cOYrR9YDeJ2T5MKO5co1lKNB_lgL";
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);




  const handleType = (count) => {


    // access word count number
    console.log(count)
  }


  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }




  return (
    // <div className=' px-6 bg-banner bg-l w-full  bg-contain bg-no-repeat  h-[80vh] md:h-[100vh] '>

    <main className="min-h-screen p-6 md:p-20  bg-gradient-to-tr  from-darkestBlue  via-darkestBlue to-greyBlack">
      <section className='grid items-center justify-center  mt-20 grid-cols-1 px-6 md:px-20 gap-2  mx-auto md:grid-cols-2'>
{/* 
        <Image src='/PROF2.png'
          className='px-2 mx-auto  p-2 rounded-b-full '
          width={400}
          height={400}
          alt='hero-picture' />
 */}
   <div
                        className=" mt-3 flex-1 relative"
                    >
                        {/* Profile Image */}
                        <div className="md:w-[500px] bg-[#d9d9d9] rounded-2xl overflow-hidden">
                            <img
                                src='/Austinosaz.jpg'
                                alt='hero image'
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>

                        {/* Text Card */}
                        
                    </div>
                
        <div className='pt-2 md:pt-0 text-center md:text-start '>

          <h1 className='  text-4xl md:text-5xl font-medium text-ash2 pb-6' data-aos="slide-down">Hi,  I&apos;m <br></br>
          </h1>
 <div className="w-auto bg-greyblack md:border-t-2 flex  flex-col md:items-start justify-start md:border-amber1 border-e-1  md:mt-6 mt-[-50px] rounded-xl p-6 relative">
                            <h3 className=" text-4xl md:text-5xl text-ash2 font-semibold  max-w-xl uppercase leading-tight py-2">
                                Omozemoje Augustine Oisasoje
                            </h3>

                            {/* Line connecting to the image */}
                            <div className="absolute top-1/2 md:left-[-30px] w-[30px] h-[1px]  hidden md:block" />

                            <div className="h-[1px] w-full bg-amber1 my-4" />

                            <button className="bg-amber1 text-lg px-4 w-fit mx-auto md:mx-0 py-3 rounded-full hover:bg-ash2 font-medium hover:bg-Secondarycolor transition-all">
                            <Link href="https://lasglowtech.com.ng">  Founder Lasglowtech</Link> 
                            </button>
                        </div>

          {/* <h1 className=' text-4xl md:text-5xl text-ash2 font-semibold leading-tight py-2 '>Omozemoje Augustine Oisasoje</h1> */}
          <h5 className="  text-3xl font-medium text-lightBlue pt-6"> A Creative


            <span className='font-bold text-ash2'>
              <Typewriter
                words={[' Web Developer', ' Web Designer', '  Graphic Designer']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={2000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span></h5>

          <p className='text-ash2 text-lg pt-6 md:text-justify  font-light'>
            I am a motivated professional driven by my career, passion, and results, eager to secure a full-time developer position that presents professional challenges. I aim to utilize my skills effectively to achieve impactful results, furthering my career while contributing positively to a client organization, all while upholding strong work ethics and utilizing existing resources.</p>
          <button onClick={handleDownload} className=' font-bold text-darkBlue text-lg py-2 px-4 mt-6   shadow-white-4xl rounded-2xl bg-gradient-to-tr from-amber2 via-amber1 to-amber2 hover:bg-white '>Download CV</button>
        </div>

      </section>


      {/* Skills */}
      <section id="Skills" className='pt-20'   >
        <div data-aos="fade-in"><h4 className='  bg-gradient-to-r from-amber1 via-lightBlue text-transparent bg-clip-text text-3xl font-semibold mt-14  pb-3  text-center'  >Skills</h4>

          
        </div>
        <Skills />

      </section>



<section id='Services' className=" px-6 flex items-center justify-center flex-col pt-20 mb-12">
      <div className="flex mb-4 items-center justify-left flex-row ">
                         <FaCircle className="fill-amber1  h-3" />
                    <h3 className="text-2xl px-3 text-ash2 font-medium"> Services</h3>
                    </div>
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4 text-ash2">
        What I Do for My Clients
        </h2>
          
      </section>
      <Services />

    

  <section  id='Experience' className=" px-6 flex items-center justify-center flex-col mt-12">
      <div className="flex mb-4 items-center justify-left flex-row ">
                         <FaCircle className="fill-amber1  h-3" />
                    <h3 className="text-2xl px-3 text-ash2 font-medium">Resume</h3>
                    </div>
        <h2 className="text-3xl md:text-4xl text-center max-w-lg font-semibold mb-4 text-ash2">
       Demonstrated  Work Experience
        </h2>
           <div className='' data-aos="fade-up"><Aboutus /></div>
      </section>
      



      <Projects />

      {/* about me Section */}
      <section id="Contact" className='pt-20'>
        <h3 className='  bg-gradient-to-r from-amber1 via-lightBlue to-amber1 text-transparent bg-clip-text text-2xl font-bold pt-6   text-center'  >Get in Touch</h3>

        <h3 className='  text-4xl font-bold shadow-2xl   max-2xl text-center  text-ash2 py-6' id="services">I can&apos;t wait to connect with you </h3>

        <Contact />


      </section>

      <ScrollTop />











    </main>
  )
}

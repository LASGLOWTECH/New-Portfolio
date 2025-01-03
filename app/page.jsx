
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

// import { motion, AnimatePresence } from "framer-motion"

export default function Home() {

  
    const handleDownload = () => {
      window.location.href =
        "https://drive.google.com/uc?export=download&id=1SZ78cOYrR9YDeJ2T5MKO5co1lKNB_lgL";
    };

  useEffect(() => {
    AOS.init({ duration: 500 });

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
      <section className='grid items-center  mt-20 grid-cols-1  md:grid-cols-2'>

        <Image src='/PROF2.png'
          className='px-2 mx-auto  p-2 rounded-b-full '
          width={400}
          height={400}
          alt='hero-picture' />


        <div className='pt-2 md:pt-0 text-center md:text-start '>

          <h1 className='  text-4xl md:text-5xl font-medium text-ash2 pb-3' data-aos="slide-down">Hi,  I&apos;m <br></br>
          </h1>
          <h1 className=' text-4xl md:text-5xl text-ash2 font-bold py-2 '>Omozemoje Augustine Oisasoje</h1>
          <h5 className="  text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-lightBlue to-amber1 pt-2"> Your Creative


            <span className='font-bold text-lightBlue'>
              <Typewriter
                words={[' Web developer', ' Web Designer', '  Graphic designer']}
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

          <p className='text-ash2 text-lg pt-6 font-light'>
            I am a motivated professional driven by my career, passion, and results, eager to secure a full-time developer position that presents professional challenges. I aim to utilize my skills effectively to achieve impactful results, furthering my career while contributing positively to a client organization, all while upholding strong work ethics and utilizing existing resources.</p>
       <button  onClick={handleDownload} className=' font-bold text-darkBlue text-lg py-2 px-4 mt-6   shadow-white-4xl rounded-2xl bg-gradient-to-tr from-amber2 via-amber1 to-amber2 hover:scale-110 '>Download CV</button> 
        </div>

      </section>


      {/* Skills */}
      <section id="Skills" className='pt-20'   >
        <div data-aos="fade-in"><h3 className='  bg-gradient-to-r from-amber1 via-lightBlue text-transparent bg-clip-text text-3xl font-semibold pt-6   pb-3  text-center'  >Skills</h3>

          <h3 className=' font-semibold   text-3xl l text-center  text-ash2 py-2' id="services">Accomplished Skills to Date </h3>
        </div>
        <Skills />

      </section>





      {/* Services*/}
      <section id="Services" className='pt-20' >
        <h3 className='  bg-gradient-to-r from-amber1 via-lightBlue to-amber1 text-transparent bg-clip-text text-2xl font-semibold pt-6   text-center'   >Services</h3>

        <h3 className='  text-3xl font-bold  max-2xl text-center  text-ash2  py-2' id="services">What I Do for My Clients </h3>

        <Services />


      </section>



      <section id="Experience" className='pt-20   max-w-full' >
        <h3 className='  bg-gradient-to-r from-amber1 via-lightBlue to-amber1 text-transparent bg-clip-text text-2xl font-semibold pt-6   text-center'  >Resume</h3>

        <h3 className='max-w-lg text-3xl font-bold  max-2xl text-center mx-auto  text-ash2  py-2' id="services">Demonstrated Experience and  Accomplishments</h3>
       <div className='' data-aos="zoom-in"><Aboutus /></div> 
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

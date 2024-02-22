
"use client"

import Link from 'next/link'
import { BiSolidPhoneCall } from "react-icons/bi";
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai"
import Image from 'next/image'
import { motion } from "framer-motion";

import { useState } from 'react'
export default function Navbar() {


    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(show => !show)

    }

    const handleClose = () => {
        setShow(false)
    }


    const navLinks = [{ link: 'Home', to: "/" }, { link: 'Services', to: "/#Services" }, { link: 'Skills', to: "/#Skills" }, { link: 'Experience', to: "/#Experience" },   { link: 'Portfolio', to: "/#portfolio" },{ link: 'Contact', to: "/#Contact" },

    ]
    return (


        
        <div className=' z-50 fixed bg-gradient-to-tr  from-darkestBlue  via-darkestBlue to-greyBlack px-6   w-full md:px-24'>

            <div className="  mx-auto flex  justify-between  w-full items-center   py-4  ">

                <div className='text-6xl '>
                    
                        <Image src="/mylogo.png"
                            width={60}
                            height={60}
                            alt="image" />

                </div>


                <div className=' hidden  md:flex  flex-col md:flex-row  justify-end'>
                    {navLinks.map((links,index) => {
                        return (


                            <Link href={links.to} className='text-ash2 hover:text-amber1 px-3 font-medium  tracking-wider text-base ' key={index} >{links.link}</Link>


                        )
                    })}


                </div>
                <Link href="tel:+2349031821590"><BiSolidPhoneCall className="text-2xl font-bold text-amber2 "/></Link>
               
<Link  href="https://github.com/LASGLOWTECH" ><button className="  text-ash2   hover:text-darkBlue font-bold hover:bg-amber1 border border-amber1 w-100  px-2 py-2 rounded-lg">Github profile</button></Link>

                {!show && < div className=' flex items-center   hover:text-white  text-light justify-center md:hidden'>< RxHamburgerMenu className="font-bold text-lg text-white transition duration-500 rounded-4xl w-7 h-7 " onClick={handleShow} /></div>}

                {show && < div className=' flex items-center    hover:text-white   justify-center md:hidden'><AiOutlineClose className="font-bold text-lg text-white transition duration-500  rounded-4xl w-7 h-7 " onClick={handleClose} /></div>}

                
            </div>

{/* mobile view */}

{/* <motion.div
      className={fixed top-0 left-0 w-64 bg-gray-800 h-full z-50}
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    > */}

            {show && 
            
            
            <motion.div className=' flex  md:hidden flex-col pt-10 px-3 justify-start fixed top-0 left-0 w-64 bg-darkestBlue h-100 z-50 '
            
            initial={{ x: "-100%" }}
            animate={{ x: show ? "0%" : "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 80 }}>
                {navLinks.map((links,index) => {
                    return (


                        <Link href={links.to} className='text-ash2 hover:text-amber2 py-3 px-3 font-medium  tracking-wider text-base ' key={index} onClick={handleClose} >{links.link}</Link>


                    )
                })}


            </motion.div>}
            {/* </motion.div> */}
            
            {/* mobile view */}
        </div>

    )
}

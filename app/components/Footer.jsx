
"use client"


import { useState } from 'react';

 import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { BiEnvelope } from "react-icons/bi";
import { BsTelephone, } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaDribbble, FaPinterest } from "react-icons/fa"

export default function Footer () {



  const today = new Date().getFullYear();
  const [newDay] = useState(today)



  return (
    <div className='bg-gradient-to-t from-blue-100 px-6 md:px-24 mx-auto to-blue-100 py-12 '>

      <div className='grid md:grid-cols-3 justify-center grid-cols-1'>


        {/* first grid */}
        <div className='contact  md:mt-0 mt-6 flex flex-col'>
          <h3 className='text-darkBlue font-bold text-2xl'>Navigation</h3>

          <div className='flex-row my-4 '>
          <Link href= "/">  <p className='text-lg'>Home</p></Link>
          <Link href= "/#Services"><p className='text-lg'>Services</p></Link>
          <Link href= "/#portfolio"> <p className='text-lg'>Projects</p></Link>
          <Link href= "/#Skills"><p className='text-lg'>Skills</p></Link>
           <a href="https://wa.me/2349031821590" target="_blank" ><button className="text-base   rounded-md px-6  mt-3 py-3  text-white fonr-medium my-3 bg-darkestBlue" value="Submit">Contact Me</button></a>


            
          </div>
        

        </div>


        {/* second grid */}



        <div className='contact md:mt-0 mt-12 flex flex-col'>

          
          
           
            <h3 className='text-darkBlue font-bold  text-2xl'>Lasglowtech</h3>
           


          

          <p className='font-thin text-base pt-3 '>I firmly believe in the principle that any endeavor worth undertaking deserves to be executed with utmost dedication and precision.</p>



        </div>




        {/* last contact grid */}







        <div className='contact md:mt-0 mt-16 flex flex-col'>
          <h3 className='text-darkBlue font-bold text-2xl'>Contact</h3>

          <div className="flex flex-row  justify-start items-center">
            <span className=" rounded-[100%]   my-3   bg-orangeRed  text-3xl">< BsTelephone className="p-1 text-darkBlue" /></span>

            <p className="text-xl pl-6 text-black"> +234-9031-82-1590</p>
          </div>




          <div className="flex flex-row justify-start items-center">

            <span className=" rounded-[100%]   my-3  bg-orangeRed  text-3xl">   < BiEnvelope className="p-1 text-darkBlue" /></span>

            <p className="text-xl pl-6 text-black">omozemojeau@gmail.com </p>

          </div>


          

          <div className="flex flex-row justify-left items-center pt-3">

            <span className=" rounded-[100%]    bg-orangeRed  text-black text-4xl">    <MdLocationOn className=" p-1 fill-darkBlue " /></span>
            <p className="text-lg pl-6  text-black ">Dutse Abuja, Nigeria.</p>
          </div>






        </div>







      </div>



      {/* bottom links */}

      <div className='flex items-center my-10 md:flex-row md:space-x-36 justify-center flex-col '>

        <div className="flex flex-col justify-between row  md:flex-row">
          <p className=" text-center md:text-left font-lighter text-base text-black py-2">  &copy; Copyright <span className="  text-black">{newDay} </span> Lasglowtech</p>

        </div>


        <div className='Email  flex  justify-start'>
          <span className=" rounded-[100%] my-5 mx-2 text-darkBlue  bg-orangeRed text-3xl"><a href="https://linkedin.com/in/austinosaz"><BsLinkedin className="p-1" /></a></span>

          <span className=" rounded-[100%]   my-5 me-2 text-darkBlue bg-orangeRed  text-3xl"><a href="https://twitter.com/OmozemojeAugus1" target="_blank"><BsTwitter className="p-1" /></a></span>
          <span className="rounded-[100%] my-5  mx-2  text-darkBlue  text-3xl"><a href="https://m.facebook.com/omozemoje.augustineoisasoje" target="_blank"><FaFacebookF className="p-1" /></a></span>
          <span className=" rounded-[100%] my-5 mx-2 text-darkBlue  bg-orangeRed text-3xl"><a href="https://instagram.com/austineosaz/"><FaInstagram className="p-1" /></a></span>
          <span className=" rounded-[100%] my-5 mx-2 text-darkBlue  bg-orangeRed text-3xl"><a href="https://dribbble.com/Austinosaz"><FaDribbble className="p-1" /></a></span>
          <span className=" rounded-[100%] my-5 mx-2 text-darkBlue  bg-orangeRed text-3xl"><a href="htps://www.pinterest.com/lasglowtech"><FaPinterest className="p-1" /></a></span>

        </div>







      </div>
    </div>
  )
}
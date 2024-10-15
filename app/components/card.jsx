
"use-client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect } from 'react'

// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

import Link from "next/link";

const Card = ({ item }) => {

  // useEffect(()=>{
  //   AOS.init({duration: 1000});      
    
  //   }, []);

  
  return (

    



    <div className="bg-dark  grid grid-cols-1 md:grid-cols-3 items-center py-5"
    
   
    >

     

      {item.map(Val => {
        return (
      
          <div className="flex justify-center hover:scale-105 transition-all "
 


            key={Val.id}
          >
            <div className=" bg-gradient-to-tl from-darkestBlue  via-greyBlack  to-darkestBlue mx-1  my-1 justify-center shadow-2xl   flex flex-col px-3 py-6 rounded-2xl  hover:scale-105">

              <Image src={Val.img}
                className=' shadow-amber2 shadow-3xl  w-full py-5 border2 border-b-amber2 rounded-2'
                width={500}
                height={300}
                alt='hero-picture' />
              <h3 className="text-base  font-bold text-ash2">{Val.title}</h3>
              <p className="text-sm py-3  text-ash2 ">{Val.info}</p>

              <Link className=' my-4 font-bolder' href={Val.link}><button className=' font-bold text-darkBlue text-lg py-2 px-2 m shadow-white-2xl rounded-md bg-gradient-to-tr from-amber2 via-amber1 to-amber2 hover:bg-white '>{Val.button}</button> </Link>
            </div>

          </div>
        
        );
      })}


</div>
 
 
  );
};

export default Card;
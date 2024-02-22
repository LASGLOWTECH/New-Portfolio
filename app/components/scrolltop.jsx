

"use-client"


import { useState, useEffect } from "react";

import { BsFillArrowUpSquareFill } from "react-icons/bs";
const ScrollTop = () => {

   // hide the buttton by default
   const [show, setShow] = useState(false)

   //  use useEFFECT TO shoe it 
   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 500) { setShow(true) }

         else {setShow(false)}

      })

   }, [])


   const ScrolltoTop = () => {


      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }
   return (
      <div>
         {show && (
            <div className="arrow-up  ">
               <BsFillArrowUpSquareFill onClick={ScrolltoTop} className=" animate-pulse hover:scale-110 text-4xl font-bold fill-amber2" />
            </div>

         )}
      </div>
   );
}

export default ScrollTop;
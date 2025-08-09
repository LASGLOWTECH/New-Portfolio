import Pdata from "./Projectitems";
import { FaCircle } from "react-icons/fa";
import { useEffect } from "react";
const Projects  = () => {
    return (

<div className="">



{/* <section id="portfolio" className='pt-20'>
<h3 className='  bg-gradient-to-r from-amber1 via-lightBlue text-transparent bg-clip-text text-3xl font-semibold pt-6   pb-3  text-center'  >Projects</h3>

<h3 className=' font-bold   text-3xl l text-center  text-ash2 py-2' id="services">What I have done for My Clients </h3>

<Pdata/>
</section> */}

  <section id="portfolio" className=" px-6 flex items-center justify-center flex-col mt-12">
      <div className="flex mb-4 items-center justify-left flex-row ">
                         <FaCircle className="fill-amber1  h-3" />
                    <h3 className="text-2xl px-3 text-ash2 font-medium">Projects</h3>
                    </div>
        <h2 className="text-3xl md:text-4xl text-center md:max-w-lg font-semibold mb-4 text-ash2">
    What I have done for My Clients
        </h2>
        <p className=" container  py-6 mx-auto md:max-w-2xl text-ash2 leading-tight text-base text-center">Swipe through my previous projects to see the diverse range of work I have accomplished. Each project reflects my commitment to quality and innovation.</p>
                

        </section>
<Pdata/>

</div>
        
     );
}
 
export default Projects ;
    
    
    
    
    
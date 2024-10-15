'use-client'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import Profile from "./tools";

const Services = () => {
   

    return (
        <div className=" mt-6 grid  justify-center  shadow-xl  grid-cols-1 gap-3   md:grid-cols-3">

            {Profile.map((profile, index) => {
                return (
                      <div className="flex  flex-col items-center  w-full py-6 px-4 rounded-2xl shadow-2xl bg-gradient-to-tl from-darkestBlue  via-greyBlack  to-darkestBlue " key={index}>
                        
                            <profile.icon.iconTitle className=" text-amber1   hover:scale-150 p-4 text-7xl shadow-amber2 shadow-md bg-darkestBlue  rounded-full"/>
                            
                            <h3 className=" text-lg font-medium py-6 text-center   text-lightBlue">{profile.title}</h3>

                            <p className='text-ash2 text-base  text-center font-light'>{profile.info}</p>
                      
                       






                    </div>


                )
            })}



        </div>



    );
}

export default Services;
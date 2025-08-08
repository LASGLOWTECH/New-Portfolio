

import { Profile, Education } from "./experince";


// import { BsStack } from "react-icons/bs";
const Aboutus = () => {
    return (

        <>

            <div className="grid  py-10 items-start justify-start    w-full grid-cols-1 md:grid-cols-1">
                {/* work experience */}

                <div className="  flex  items-center flex-col">
                    <h3 className='  text-2xl font-semibold  text-ash2  pt-8' id="services">Experience</h3>
                    {/* experience one */}



                    {Profile.map((profile, index) => {
                        return (


                            <div className="border mt-4 border-ash2 p-5 rounded-md  shadow-sm"  >
                                < div className="flex flex-row items-center " key={index} >
                                    <  profile.icon.iconTitle className="bg-amber2  rounded-full text-4xl p-2 fill-darkBlue" />
                                    <div className="bg-amber2 w-10 h-0.5" />
                                    <div className=" py-2 flex px-3 flex-col md:flex-row items-end   md:justify-center">

                                        <h3 className='  text-base font-bold   text-ash2  ' >{profile.position}</h3>
                                        <p className=" text-amber2 text-base font-bold  px-2 ">{(profile.year)}</p>

                                    </div>

                                </div>


                                <p className=" text-lightBlue font-semibold text-base py-2 ">{profile.company}</p>
                                <p className=" text-ash2  text-[14px] py-2  max-w-md">

                                    {profile.info}
                                </p>

                            </div>


                        )
                    })}

                </div>


                <div className="  flex  items-center flex-col">
                    <h3 className='  text-2xl font-semibold  text-ash2  pt-10' id="services"> Education</h3>
                    {/* experience one */}



                    {Education.map((education, index) => {
                        return (


                            <div className="border mt-4 border-ash2 p-5 rounded-md  shadow-sm"  >
                                < div className="flex flex-row items-center " key={index}>
                                    <  education.icon.iconTitle className="bg-amber2  rounded-full text-4xl p-2 fill-darkBlue" />
                                    <div className="bg-amber2 w-10 h-0.5" />
                                    <div className=" py-2 flex px-3 flex-col md:flex-row items-end   md:justify-center">

                                        <h3 className='  text-lg font-bold   text-ash2  ' >{education.degree}</h3>
                                        <p className=" text-amber2 text-base font-bold  px-2 ">{(education.year)}</p>

                                    </div>

                                </div>


                                <p className=" text-lightBlue font-semibold text-base py-2 ">{education.institution}</p>
                                <p className=" text-ash2  text-[14px] py-2  max-w-md">

                                    {education.grade}
                                </p>

                            </div>


                        )
                    })}













                </div>










            </div>


        </>
    );
}

export default Aboutus;
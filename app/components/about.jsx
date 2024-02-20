
import { FaGraduationCap } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
// import { BsStack } from "react-icons/bs";
const Aboutus = () => {
    return (



        <>



            <div className="grid  py-10 items-start justify-start  grid-cols-1 md:grid-cols-2">
                {/* work experience */}

                <div className="  flex  items-start flex-col">
                    <h3 className='  text-3xl font-bold   text-ash2  py-8' id="services">Experience</h3>
                    {/* experience one */}


                    <div className="border border-ash2 p-5 rounded-md shadow-sm">
                        < div className="flex flex-row items-center ">
                            < FaBriefcase className="bg-amber2  rounded-full text-4xl p-2 fill-darkBlue" />
                            <div className="bg-amber2 w-10 h-0.5" />
                            <div className=" py-2 flex px-3 flex-col md:flex-row items-end   md:justify-center">

                                <h3 className='  text-lg font-bold   text-ash2  ' >Web Developer</h3>
                                <p className=" text-amber2 text-base font-bold  px-2 ">(2023-date)</p>

                            </div>

                        </div>


                        <p className=" text-lightBlue text-lg py-2 ">UR9 Group</p>
                        <p className=" text-ash2  text-base py-2  max-w-md">


                            Created a multi-page website for the company. Web design, development and maintainance.Worked with 7 creatives as a team
                            Collaborated with UI/UX, graphic designers to improve web
                            performance. Company logo design and branding
                        </p>

                    </div>

                    {/* Experience two */}

                    <div className="border my-3 border-ash2 p-5 rounded-md shadow-sm">
                        < div className="flex py-6 flex-row items-center ">
                            < FaBriefcase className="bg-amber2  rounded-full text-4xl p-2 fill-darkBlue" />
                            <div className="bg-amber1 w-10 h-0.5" />
                            <div className=" py-2 flex px-5 flex-col md:flex-row items-end   md:justify-center">
                                <h3 className='  text-lg font-bold text-end  text-ash2  ' >Graphic Designer</h3>
                                <p className=" text-amber2 text-base font-bold  px-2 ">(2023-date)</p>

                            </div>

                        </div>


                        <p className=" text-lightBlue text-lg py-2 ">PE Lifts Ghana LTD</p>
                        <p className=" text-ash2  text-base py-2  max-w-md ">

                            Company brand designer. Created logos and brand identity, Collaborated with other teams
                        </p>

                    </div>
                    {/* Experience 3 */}



                    <div className="border  border-ash2 p-5 rounded-md shadow-sm">
                        < div className="flex py-6 flex-row items-center ">
                            < FaBriefcase className="bg-amber2  rounded-full text-4xl p-2 fill-darkBlue" />
                            <div className="bg-amber1 w-10 h-0.5" />
                            <div className=" py-2 flex px-5 flex-col md:flex-row items-end   md:justify-center">
                                <h3 className='  text-lg font-bold text-end   text-ash2  ' >IT Manager</h3>
                                <p className=" text-amber2 text-base font-bold  px-2 ">(2022-2023)</p>

                            </div>

                        </div>


                        <p className=" text-lightBlue text-lg py-2 ">Vinat ICT</p>
                        <p className=" text-ash2  text-base py-2  max-w-md ">

                            Web design, graphics design, typing and printng, document
                            management, online registration, interne services, software intallation
                            and tutor
                        </p>

                    </div>




                </div>





                <div className="  flex  items-start flex-col">

                    <h3 className='  text-3xl font-bold   text-ash2   py-10 ' id="services">Education</h3>
                    {/* 1st education */}

                    <div className="border  border-ash2 p-3 mb-2 rounded-md shadow-sm">
                        < div className="flex flex-row items-center ">
                            < FaGraduationCap className="bg-amber2  rounded-full text-4xl p-2 fill-darkBlue" />
                            <div className="bg-amber1 w-10 h-0.5" />
                            <div className=" py-2 flex px-5 flex-col md:flex-row items-start   md:justify-center">
                                <h3 className='  text-lg font-bold  text-start text-ash2  ' >BSC. (Quantity Surveying)</h3>
                                <p className=" text-amber2 text-base font-bold  px-2 ">(2015-2021)</p>

                            </div>

                        </div>



                        <p className=" text-lightBlue text-lg py-1 ">University of Benin</p>
                        <p className=" text-ash2  text-base py-2  max-w-md ">

                            Second class Upper Division
                        </p>


                    </div>







                    <div className="border  border-ash2 p-5 rounded-md shadow-sm">
                        < div className="flex py-6 flex-row items-center ">
                            < FaGraduationCap className="bg-amber2  rounded-full text-4xl p-2 fill-darkBlue" />
                            <div className="bg-amber1 w-10 h-0.5" />
                            <div className=" py-2 flex px-5 flex-col md:flex-row items-end   md:justify-center">
                                <h3 className='  text-lg font-bold   text-ash2  ' >SSCE</h3>
                                <p className=" text-amber2 text-base font-bold  px-2 ">(2007-2013)</p>

                            </div>

                        </div>



                        <p className=" text-lightBlue text-lg py-1 ">Azama College</p>


                    </div>
                </div>




            </div>




        </>
    );
}

export default Aboutus;
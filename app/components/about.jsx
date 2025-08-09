import { Profile, Education } from "./experince";

const Aboutus = () => {
  return (
    <div className="grid py-10 w-full grid-cols-1">
      {/* Work Experience Section */}
      <div className="flex flex-col items-center">
        

        {Profile.map((profile, index) => (
          <div
            key={index}
            className="border mt-4 border-ash2 p-5 rounded-md shadow-sm w-full max-w-xl"
          >
            <div className="flex items-center">
              <profile.icon.iconTitle className="bg-amber2 rounded-full text-4xl p-2 fill-darkBlue" />
              <div className="bg-amber2 w-10 h-0.5 mx-2" />
              <div className="flex flex-col md:flex-row items-end md:justify-center py-2 md:px-3">
                <h3 className="text-base font-medium px-3 text-ash2">
                  {profile.position}
                </h3>
                <p className="text-amber2 text-base font-bold px-2">
                  {profile.year}
                </p>
              </div>
            </div>

            <p className="text-lightBlue font-semibold text-base py-2">
              {profile.company}
            </p>
            <p className="text-ash2 text-[14px] py-2 md:max-w-md">
              {profile.info}
            </p>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-ash2 pt-10" id="services">
          Education
        </h3>

        {Education.map((education, index) => (
          <div
            key={index}
            className="border mt-4 border-ash2 p-5 rounded-md shadow-sm w-full max-w-xl"
          >
            <div className="flex items-center">
              <education.icon.iconTitle className="bg-amber2 rounded-full text-4xl p-2 fill-darkBlue" />
              <div className="bg-amber2 w-10 h-0.5 mx-2" />
              <div className="flex flex-col md:flex-row items-end md:justify-center py-2 px-3">
                <h3 className="text-lg font-bold text-right text-ash2">
                  {education.degree}
                </h3>
                <p className="text-amber2 text-base font-bold px-2">
                  {education.year}
                </p>
              </div>
            </div>

            <p className="text-lightBlue font-semibold text-base py-2">
              {education.institution}
            </p>
            <p className="text-ash2 text-[14px] py-2 max-w-md">
              {education.grade}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutus;

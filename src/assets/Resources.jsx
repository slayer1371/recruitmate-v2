import { Fade } from "react-awesome-reveal";
import { conference } from "../data/conferenceData";

const ConferenceList = () => {
  return (
    <Fade>
      <div className="p-8 bg-blue-200">
        <h1 className="text-4xl font-bold mb-4 flex justify-center text-emerald-700">
          Recruiting Resources
        </h1>
        {conference.conferences.map((conf, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">{conf.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {conf.schools.map((school, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
                >
                  <img
                    src={school.img}
                    alt={school.name}
                    className="w-32 h-32 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold mb-1 text-stone-700">
                    {school.name}
                  </h3>
                  <p className="text-gray-600">
                    {school.city}, {school.state}
                  </p>
                  <a
                    href={school.recruit_questionnaire}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-500 hover:text-blue-700 transition-colors underline cursor-pointer"
                  >
                    Recruit Questionnaire
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Fade>
  );
};

export default ConferenceList;

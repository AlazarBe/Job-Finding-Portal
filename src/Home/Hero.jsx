import {
  MagnifyingGlassIcon,
  BriefcaseIcon,
  UsersIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 "></div>

      {/* Content container */}
      <div className="font-primary   relative z-10 h-full flex flex-col justify-between items-center text-white">
        <div className="flex flex-col items-center h-[80%] justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold ">Find Your Dream Job Today!</h1>
          <p className="text-xl mt-3 mb-4">
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </p>
        </div>
        {/* Job Search Bar */}
        <div className="w-3xl mb-8 bg-white flex justify-between rounded-lg ">
          <div className="text-black py-5 flex px-8 gap-6">
            <p className="flex gap-2">
              <span>Job title or Company </span>{" "}
              <span className="bg-gray-400 w-0.5 h-6 block"></span>
            </p>
            <div className="flex gap-2">
              <select>
                <option value="">Select Location</option>
                <option value="New York">New York</option>
                <option value="London">London</option>
                <option value="Tokyo">Tokyo</option>
              </select>
              <span className="bg-gray-400 w-0.5 h-6 block"></span>
            </div>
            <div className="flex gap-2">
              <select>
                <option value="">Select Category</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>
              <span className="bg-gray-400 w-0.5 h-6 block"></span>
            </div>
          </div>

          <button className="bg-green-400 w-[150px] justify-center gap-1 flex items-center rounded-r-lg">
            <span>
              <MagnifyingGlassIcon className="h-4 w-4 font-bold" />
            </span>
            <span>Search Jobs</span>
          </button>
        </div>
        {/*  */}
        <div className="w-lg flex justify-between mt-3">
          <div className="flex items-center gap-2">
            <div className="flex justify-center  bg-green-500 w-12 h-12 rounded-full items-center ">
              <BriefcaseIcon className="h-6 w-6 " />
            </div>

            <p className="flex flex-col font-semibold">
              <span>25,850</span> <span>Jobs</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center  bg-green-500 w-12 h-12 rounded-full items-center ">
              <UsersIcon className="h-6 w-6 " />
            </div>

            <p className="flex flex-col font-semibold">
              <span>10,250</span> <span>Candidates</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex justify-center  bg-green-500 w-12 h-12 rounded-full items-center ">
              <BuildingOffice2Icon className="h-6 w-6 " />
            </div>

            <p className="flex flex-col font-semibold">
              <span>18,400</span> <span>Companies</span>
            </p>
          </div>
        </div>
        </div>
{/* companies */}
      <div className="w-full h-20 bg-black">

      </div>
       
      </div>
      
    </div>
  );
}

export default Hero;

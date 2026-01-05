import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 "></div>

      {/* Content container */}
      <div className="font-primary   relative z-10 h-full flex flex-col justify-center items-center text-white">
        <div className="text-center">
          <h1 className="text-7xl font-bold ">Find Your Dream Job Today!</h1>
          <p className="text-xl">
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </p>
        </div>

        <div className="w-3xl bg-white flex justify-between rounded-lg ">
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
      </div>
    </div>
  );
}

export default Hero;

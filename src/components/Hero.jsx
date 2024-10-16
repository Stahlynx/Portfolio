import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.png"

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Theo Kurniady</h1>
            <span className="bg-gradient-to-r from-purple-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Informatics Undergraduate</span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 lg:p-8">
          <img className=" rounded-2xl " src={profilePic} alt="Theo Kurniady" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
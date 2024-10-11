import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <h2 className="my-20 text-center text-4xl">Organization & Events Experiences</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div 
          key={index}
          className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full lg:w-3/4 max-w-xl">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">{experience.company}</span>
                <p className="mb-4 text-neutral-500">{experience.description}</p>
              </h6>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex bg-gradient-to-r from-transparent via-purple-900 to-transparent h-1 w-full "></div>
      <div className='py-4 lg:mb-35'>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="p-4">
            <img className="size-40" src="/src/assets/kmb.png" alt="KMB ITB" />
          </div>
          <div className="p-4">
            <img className="size-40" src="/src/assets/itbjazz.png" alt="ITBJazz" />
          </div>
          <div className="p-4">
            <img className="size-40" src="/src/assets/hmif.jpeg" alt="HMIF ITB" />
          </div>
          <div className="p-4">
            <img className="size-40" src="/src/assets/itb.png" alt="ITB" />
          </div>
        </div>
      </div>
      <div className=" flex bg-gradient-to-r from-transparent via-purple-900 to-transparent h-1 w-full "></div>
    </div>
  )
}

export default Experience

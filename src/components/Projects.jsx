import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <h2 className="my-20 text-center text-purple-800 text-4xl">Tech 
        <span className="text-neutral-300"> Projects</span>
      </h2>
      <div>
          {PROJECTS.map((projects, index) => (
            <div 
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <img className="size-28 mb-4" src={projects.image} alt="" />
              </div>
              <div className="w-full lg:w-3/4 max-w-xl">
                <a href={projects.link} className="text-2xl mb-2 hover:text-purple-500 hover:cursor-pointer active:text-purple-900 font-semibold">{projects.title}</a>
                <p className="mb-4 text-neutral-500">{projects.description}</p>
                <div className="flex flex-wrap gap-2">
                  {projects.technologies.map((tech, index2) => (
                      <span
                        key={index2}
                        className="rounded-md text-purple-800 bg-neutral-900 px-2 py-1 text-sm font-medium">
                        {tech}
                      </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Projects
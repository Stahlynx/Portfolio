import { RiCss3Fill, RiCss3Line, RiHtml5Fill, RiHtml5Line, RiJavascriptLine, RiNextjsFill, RiNextjsLine, RiNodejsLine, RiReactjsLine, RiTailwindCssFill, RiTailwindCssLine } from "react-icons/ri"
import { FaC } from "react-icons/fa6"
import { FaPython } from "react-icons/fa"

const Tech = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <h2 className="my-20 text-center text-4xl">Technology</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-purple-900 p-4">
          <RiReactjsLine className="size-20 text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-purple-900 p-4 ">
          <RiHtml5Fill className="size-20 text-7xl text-orange-700"/>
        </div>
        <div className="rounded-2xl border-4 border-purple-900 p-4">
          <RiCss3Fill className="size-20 text-7xl text-cyan-500"/>
        </div>
        <div className="rounded-2xl border-4 border-purple-900 p-4">
          <RiTailwindCssFill className="size-20 text-7xl text-teal-600"/>
        </div>
        <div className="rounded-2xl border-4 border-purple-900 p-4">
          <RiJavascriptLine className="size-20 text-7xl text-yellow-400"/>
        </div>
        <div className="rounded-2xl border-4 border-purple-900 p-4">
          <RiNextjsLine className="size-20 text-7xl text-gray-600"/>
        </div>
        <div className="rounded-2xl border-4 border-purple-900 p-4">
          <img className="text-7xl text-gray-600 size-20" src="src/assets/java.png" alt="" />
        </div>
        <div className="rounded-2xl border-4 border-purple-900 p-4">
          <img className="text-7xl text-gray-600 size-20" src="src/assets/python.png" alt="" />
        </div>
        <div className="rounded-2xl border-4 border-purple-900 p-4">
          <img className="text-7xl text-gray-600 size-20" src="src/assets/c.png" alt="" />
        </div>
        <div className="rounded-2xl border-4 border-purple-900 p-4">
          <img className="text-7xl text-gray-600 size-20" src="src/assets/cpp.png" alt="" />
        </div>
        <div className="rounded-2xl border-4 border-purple-900 p-4">
          <img className="text-7xl text-gray-600 size-20" src="src/assets/mysql.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Tech

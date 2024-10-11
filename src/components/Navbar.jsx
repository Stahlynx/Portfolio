import logo from "../assets/TKlogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return <nav className="mb-10 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="w-20 l-20" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/theo-kurniady/"><FaLinkedin/></a>
      <a href="https://github.com/Stahlynx"><FaGithub/></a>
      <a href="https://www.instagram.com/yang_kau_cari_bukan_disini/"><FaInstagram/></a> 
    </div>
  </nav>
}

export default Navbar;
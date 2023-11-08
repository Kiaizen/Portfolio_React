import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase } from "react-icons/bs";
import { Link } from "react-scroll";

const NavUi = () => {
  return (
    <div className="bg-black/20 h-[64px] backdrop-blur-2x1 rounded-full max-w-fit mx-auto px-5 flex justify-between items-center text-2x1 text-white/50">
      <Link
        to="Header"
        activeClass="active"
        smooth={true}
        spy={true}
        className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
      >
        <BiHomeAlt />
      </Link>
      <Link
        to="Sobre"
        activeClass="active"
        smooth={true}
        spy={true}
        className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
      >
        <BiUser />
      </Link>
      <Link
        to="Projetos"
        activeClass="active"
        smooth={true}
        spy={true}
        className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
      >
        <BsBriefcase />
      </Link>
      <Link
        to="Footer"
        activeClass="active"
        smooth={true}
        spy={true}
        className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
      >
        <BsClipboardData />
      </Link>
    </div>
  );
};

export default NavUi;

import { Link, NavLink } from "react-router";
import Logo from "../../assets/logo-footer.png"
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10">

            <div className="Jakarta font-bold text-2xl md:text-3xl lg:text-[32px] text-white flex items-center gap-2 md:gap-4"><img className="w-9 md:w-10 lg:w-12 h-9 md:h-10 lg:h-12 " src={Logo} alt="" />Law.BD</div>
            <nav className="grid grid-flow-col gap-4 Mulish font-medium text-lg ">
                <li> <NavLink to="/" className={({ isActive }) => isActive ? "text-[#0EA106] underline" : "text-[#FFFFFF]/70"}>Home</NavLink></li>
                <li> <NavLink to="/my-bookings" className={({ isActive }) => isActive ? "text-[#0EA106] underline" : "text-[#FFFFFF]/70"}>My-Bookings</NavLink></li>
                <li> <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-[#0EA106] underline" : "text-[#FFFFFF]/70"}>Blogs</NavLink></li>
                <li> <NavLink to="/contact-us" className={({ isActive }) => isActive ? "text-[#0EA106] underline" : "text-[#FFFFFF]/70"}>Contact Us</NavLink></li>
            </nav>

            <div className="w-full border-t border-dashed border-[#FFFFFF]"></div>
            <nav>
                <div className="grid grid-flow-col gap-4 text-white">
                    <Link to="https://www.facebook.com/bijitdeb01"><FaFacebook size={24} /></Link>
                    <Link to="https://x.com/bijitdeb01">
                        <FaXTwitter size={24} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/bijit-deb/"><FaLinkedin size={24} /></Link>
                    <Link to="https://www.youtube.com/"><FaYoutube size={24} /></Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
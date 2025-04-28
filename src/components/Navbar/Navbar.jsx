import { NavLink } from "react-router";
import Logo from "../../assets/logo.png"


const Navbar = () => {
    const list = <>
        <li> <NavLink to="/" className={({ isActive }) => isActive ? "text-[#0EA106] underline" : "text-[#0F0F0F]/70"}>Home</NavLink></li>
        <li> <NavLink to="/my-bookings" className={({ isActive }) => isActive ? "text-[#0EA106] underline" : "text-[#0F0F0F]/70"}>My-Bookings</NavLink></li>
        <li> <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-[#0EA106] underline" : "text-[#0F0F0F]/70"}>Blogs</NavLink></li>
        <li> <NavLink to="/contact-us" className={({ isActive }) => isActive ? "text-[#0EA106] underline" : "text-[#0F0F0F]/70"}>Contact Us</NavLink></li>
    </>

    return (
        <div className="zbg-base-100 shadow-sm">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="Jakarta font-bold text-2xl md:text-3xl lg:text-[32px] text-[#0F0F0F] flex items-center gap-2 md:gap-4"><img className="w-9 md:w-10 lg:w-12 h-9 md:h-10 lg:h-12 " src={Logo} alt="" />Law.BD</div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-12 Mulish font-medium text-lg">
                        {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0">
                            {list}
                        </ul>
                    </div>

                    <button className="bg-[#0EA106] Mulish font-bold text-xl text-white rounded-3xl py-3 px-7 hidden lg:block cursor-pointer">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
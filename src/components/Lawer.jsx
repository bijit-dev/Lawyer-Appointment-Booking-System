import { Link } from "react-router";


const Lawer = ({ lawerData }) => {
    const { experience, image, licenseNumber, speciality, name } = lawerData;
    
    return (
        <div className="p-5 md:flex gap-5 items-center border border-[#0F0F0F]/15 rounded-2xl">
            <div className="mb-4 md:mb-0  md:w-40 md:h-36"><img className="w-full h-full border border-blue-900 rounded-xl" src= {image}alt="" /></div>
            <div className="w-full space-y-4">
                <div className="flex items-center gap-2">
                    <p className="Mulish font-medium text-xs bg-[#09982F]/10 text-[#09982F] py-1 px-3 rounded-4xl">Available</p>
                    <p className="Mulish font-medium text-xs bg-[#176AE5]/10 text-[#176AE5] py-1 px-3 rounded-4xl">{experience} Experience</p>
                </div>
                <div className=" space-y-1">
                    <h1 className="Mulish font-extrabold text-xl md:text-2xl text-[#0F0F0F]">{name}</h1>
                    <p className="Mulish font-medium text-base md:text-lg text-[#0F0F0F]/60">{speciality} Expert</p>
                    <p className="Mulish font-medium text-sm md:text-base text-[#0F0F0F]/70">&reg; License No: {licenseNumber}</p>
                </div>
                <Link to={`/lawer/${licenseNumber}`}><button  className="btn cursor-pointer text-sm md:text-base rounded-3xl w-full text-[#176AE5] border border-[#176AE5]/20">View Details</button></Link>
            </div>
        </div>
    );
};

export default Lawer;
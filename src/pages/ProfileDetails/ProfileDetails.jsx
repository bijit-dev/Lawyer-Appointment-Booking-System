import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { addBook } from "../../utils";

const ProfileDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const navgate = useNavigate()

    const heandlbook = (SingleLawer) => {
        addBook(SingleLawer)
        navgate("/my-bookings")
    }

    const SingleLawer = data.find(lawer => lawer.licenseNumber === id);
    const { image, experience, name, speciality, licenseNumber, availability, fee } = SingleLawer;

    return (
        <div className='container mx-auto space-y-4 md:space-y-8 px-2'>
            <div className="bg-[#0F0F0F]/5 border border-[#0F0F0F]/15 py-6 md:py-16 rounded-2xl mt-4 md:mt-8 px-2">
                <h1 className=' Mulish font-extrabold text-2xl md:text-3xl text-black text-center pb-4'>Lawyer's Profile Details</h1>
                <p className='max-w-[1000px] mx-auto Mulish font-medium text-sm md:text-base text-black/70 text-center pb-8'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>

            <div className="p-8 md:flex gap-10 items-center border border-[#141414]/15 rounded-2xl">
                <div className="mb-4 md:mb-0 md:w-3/12"><img className="w-full border border-blue-900 rounded-xl" src={image} alt="" /></div>
                <div className="md:w-8/12 space-y-4">
                    <div><span className="Mulish font-medium text-base bg-[#176AE5]/10 text-[#176AE5] py-1.5 px-4 rounded-4xl">{experience} Experience</span></div>

                    <h1 className="Mulish font-extrabold text-[32px] text-[#141414]">{name}</h1>

                    <div className="flex items-center gap-10">
                        <p className="Mulish font-medium text-base text-[#0F0F0F]/60">{speciality} Expert</p>
                        <p className="Mulish font-medium text-base text-[#0F0F0F]/70">&reg; License No: {licenseNumber}</p>
                    </div>

                    <ul className="flex flex-wrap gap-4 Mulish font-bold text-[#141414]/70 text-base ">
                        Availability {
                            availability.map(day => <li key={day} className="text-[#FFA000] text-xs md:text-sm bg-[#FFA000]/10 border border-[#FFA000]/20 py-1 px-2.5 rounded-4xl">{day}</li>)
                        }
                    </ul>

                    <p className="Mulish font-bold text-[#141414]/70 text-sm md:text-base ">Consultation Fee: <span className="font-extrabold text-[#0EA106]">Taka: {fee}</span></p>

                </div>
            </div>

            <div className="p-8 items-center border border-[#141414]/15 rounded-2xl mb-8">
                <div className="pb-4 border-b border-dashed border-[#141414]/20">
                    <h1 className="Mulish font-bold text-lg md:text-2xl text-center text-[#141414]">Book an Appointment</h1>
                </div>

                <div className="py-4 border-b border-[#141414]/20 flex justify-between">
                    <h3 className="Jakarta font-bold text-sm md:text-lg text-[#141414]">Availability</h3>
                    <p className="Jakarta  font-medium text-xs md:text-sm bg-[#09982F]/10 text-[#09982F] border border-[#09982F]/20 py-1 px-3 rounded-4xl"> Lawyer  Available Today</p>
                </div>
                <div className=" max-w-fit mx-auto px-5 py-2 my-4 Manrope font-medium text-xs md:text-base bg-[#FFA000]/10 text-[#FFA000] rounded-4xl">&#x1F6C8; Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</div>


                <button onClick={() => { heandlbook(SingleLawer); }} className="btn my-6 py-4 cursor-pointer rounded-3xl w-full Mulish font-bold text-base md:text-xl text-white border bg-[#0EA106]">Book Appointment Now</button>

            </div>
        </div>
    );
};

export default ProfileDetails;
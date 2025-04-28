import Banner from '../../components/Banner';
import TotalLawyer from "../../assets/success-doctor.png"
import TotalReviews from "../../assets/success-review.png"
import CasesInitiated from "../../assets/success-patients.png"
import TotalStuffs from "../../assets/success-staffs.png"
import Lawer from '../../components/Lawer';
import { useLoaderData } from 'react-router';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Home = () => {
    const lawerDatas = useLoaderData();

    const [displayLoader, setDisplayLoader] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        if (showAll) {
            setDisplayLoader(lawerDatas)
        } else {
            setDisplayLoader(lawerDatas.slice(0, 6))
        }
    }, [showAll, lawerDatas])

    return (
        <div>
            <Banner />

            {/* Our Best Lawyers part */}
            <section className='py-24 px-2 container mx-auto'>
                <h1 className=' Mulish font-extrabold text-3xl md:text-[40px] text-black text-center pb-4'>Our Best Lawyers</h1>
                <p className='max-w-[1000px] mx-auto Mulish font-normal text-sm md:text-base text-black/80 text-center pb-8'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 `}>
                    {
                        displayLoader.map(lawerData => <Lawer key={lawerData.id} lawerData={lawerData} ></Lawer>)
                    }

                </div>


                <button onClick={() => setShowAll(!showAll)} className="cursor-pointer bg-[#0EA106] Mulish font-bold text-xl text-white rounded-3xl py-3 px-7 block mx-auto mt-8">Show All Lawyer</button>
            </section>

            {/* Provide part */}
            <section className='py-24 container mx-auto'>
                <h1 className=' Mulish font-extrabold text-3xl md:text-[40px] text-black text-center pb-4'>We Provide Best Law Services</h1>
                <p className='max-w-[1000px] mx-auto Mulish font-normal text-sm md:text-base text-black/80 text-center pb-8'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6 px-2 md:px-0'>

                    <div className='bg-[#0F0F0F]/5 border border-[#0F0F0F]/15 rounded-2xl'>
                        <div className='py-10 px-12'>
                            <img className='w-10 md:w-12 lg:w-14 h-fit' src={TotalLawyer} alt="" />
                            <div className='Mulish font-extrabold text-2xl md:text-3xl lg:text-5xl text-[#0F0F0F] pt-4 pb-3'>
                                <CountUp start={0} end={199} delay={0} duration={6} enableScrollSpy={true} />+
                            </div>
                            <p className='Mulish font-medium text-base md:text-xl text-[#0F0F0F]/60'>Tatal Lawyer</p>
                        </div>
                    </div>
                    <div className='bg-[#0F0F0F]/5 border border-[#0F0F0F]/15 rounded-2xl'>
                        <div className='py-10 px-12'>
                            <img className='w-10 md:w-12 lg:w-14 h-fit' src={TotalReviews} alt="" />
                            <div className='Mulish font-extrabold text-2xl md:text-3xl lg:text-5xl text-[#0F0F0F] pt-4 pb-3'>
                                <CountUp start={0} end={467} delay={0} duration={4} enableScrollSpy={true}/>+
                            </div>
                            <p className='Mulish font-medium text-base md:text-xl text-[#0F0F0F]/60'>Total Reviews</p>
                        </div>
                    </div>

                    <div className='bg-[#0F0F0F]/5 border border-[#0F0F0F]/15 rounded-2xl'>
                        <div className='py-10 px-12'>
                            <img className='w-10 md:w-12 lg:w-14 h-fit' src={CasesInitiated} alt="" />
                            <div className='Mulish font-extrabold text-2xl md:text-3xl lg:text-5xl text-[#0F0F0F] pt-4 pb-3'>
                                <CountUp start={0} end={1900} delay={0} duration={3} enableScrollSpy={true} />+
                            </div>
                            <p className='Mulish font-medium text-base md:text-xl text-[#0F0F0F]/60'>Cases Initiated</p>
                        </div>
                    </div>
                    <div className='bg-[#0F0F0F]/5 border border-[#0F0F0F]/15 rounded-2xl'>
                        <div className='py-10 px-12'>
                            <img className='w-10 md:w-12 lg:w-14h-fit' src={TotalStuffs} alt="" />
                            <div className='Mulish font-extrabold text-2xl md:text-3xl lg:text-5xl text-[#0F0F0F] pt-4 pb-3'>
                                <CountUp start={0} end={300} delay={0} duration={5} enableScrollSpy={true}/>+
                            </div>
                            <p className='Mulish font-medium text-base md:text-xl text-[#0F0F0F]/60'>Total Stuffs</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
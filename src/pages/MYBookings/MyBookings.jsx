import React, { useEffect, useState } from 'react';
import { getBookings, removeFavorite } from '../../utils';
import LawerBooked from './LawerBooked';
import DefoldText from '../../components/DefoldText';
import Recharts from '../../components/Recharts';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        setBookings(getBookings())
    }, [])

    const handleDelete = id => {
        removeFavorite(id);
        setBookings(getBookings());
    }

    if (bookings.length < 1) return <DefoldText />;

    return (
        <div className=' container mx-auto px-2'>

            <div className='flex justify-center'><Recharts bookings={bookings} /></div>

            <div className="py-6 rounded-2xl mt-4 md:mt-8 px-2">
                <h1 className=' Mulish font-extrabold text-2xl md:text-3xl text-black text-center pb-4'>My Today Appointments</h1>
                <p className='max-w-[1000px] mx-auto Mulish font-medium text-sm md:text-base text-black/70 text-center pb-8'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>

            <div className=' space-y-16 mb-8 md:mb-16'>

                {
                    bookings.map(data => <LawerBooked key={data.id} data={data} handleDelete={handleDelete}></LawerBooked>)
                }

            </div>

        </div>
    );
};

export default MyBookings;
import React from 'react';
import { Bounce, toast } from 'react-toastify';

const LawerBooked = ({ data, handleDelete }) => {
    const { fee, speciality, name, id } = data;
    
    const notify = () => toast(`Cancel ${name} Lawer appintment`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    
    return (
        <div className='border border-[#141414]/15 p-8 rounded-2xl'>
            <div className='border-b border-dashed border-[#0F0F0F]/20 flex justify-between items-center pb-4 mb-4'>
                <div className='space-y-3'>
                    <h1 className='Mulish font-bold text-lg md:text-xl text-[#141414]'>{name} </h1>
                    <p className='Jakarta font-medium text-base md:text-lg text-[#141414]/60'>{speciality} Expert</p>
                </div>
                <p className='Jakarta font-medium text-base md:text-lg text-[#141414]/60'>Appointment Fee :  {fee} Taka</p>
            </div>
            <button onClick={() => {handleDelete(id), notify()}} className="btn py-4 cursor-pointer rounded-3xl w-full Jakarta font-bold text-base md:text-xl text-[#FF0000] border border-[#FF0000] hover:bg-red-500 hover:text-white">Cancel Appointment</button>
        </div>
    );
};

export default LawerBooked;
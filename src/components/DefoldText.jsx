import React from 'react';
import { Link } from 'react-router';

const DefoldText = () => {
    return (
        <div className="flex flex-col justify-center Mulish items-center space-y-4 my-16">
            <h2 className="font-bold text-3xl text-red-400">Not Appointment </h2>
            
            <Link to="/"><button className="btn btn-success font-bold text-xl text-white rounded-xl">Go Back Home</button></Link>
        </div>
    );
};

export default DefoldText;
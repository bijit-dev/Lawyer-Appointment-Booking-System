import ErrorImg from "../../assets/404.jpg"
import { Link } from "react-router";

const ErrorLawer = () => {
    return (
        <>
            <div className=" w-5/12 mx-auto border border-black/20 my-8 shadow-2xl">
                <img className=" w-full h-full rounded-2xl" src={ErrorImg} alt="" />
            </div>
            <div className="flex flex-col justify-center Mulish items-center space-y-4">
                <h2 className="font-bold text-3xl text-red-400">Lawer Not Found</h2>
                <p className="font-bold text-xl text-black/60">Oops! The page you're looking for doen't exist.</p>
                <Link to="/"><button className="btn btn-success font-bold text-xl text-white rounded-xl mb-8
            ">Go Back Home</button></Link>
            </div>
        </>
    );
};

export default ErrorLawer;
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';
import { Bounce, ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme="light"
                    transition={Bounce} />
            <Footer/>
        </>
    );
};

export default Root;
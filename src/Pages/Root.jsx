import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Root = () => {

    const location = useLocation()
    const isLogin = location.pathname.includes('login') || location.pathname.includes('signUp') 


    return (

        <div>
            {isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Root;
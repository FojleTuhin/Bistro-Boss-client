import { FaCalendarAlt, FaHome, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa6';
import { IoMdMenu } from 'react-icons/io';
import { MdEmail, MdGeneratingTokens } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../assets/Hooks/useCart';

const Dashboard = () => {
const [cart]= useCart();
    return (
        <div className='flex '>

            <div className='w-[20%] bg-[#d1a054] min-h-screen py-12 pl-9'>
                <p className='font-extrabold text-2xl'>BISTRO BOSS</p>
                <p className='font-bold text-xl'>Restaurant</p>
                <div className='mt-10'>
                    <ul className=''>
                        <li className='mb-3 '><NavLink to='/dashboard/userHome' className={'flex gap-3  items-center font-bold '}> <FaHome />User Home</NavLink></li>
                        <li className='mb-3 '><NavLink className={'flex gap-3  items-center font-bold '}> <FaCalendarAlt />Reservation</NavLink></li>
                        <li className='mb-3 '><NavLink className={'flex gap-3  items-center font-bold '}> <FaWallet />Payment history</NavLink></li>
                        <li className='mb-3 '><NavLink to='myCart' className={'flex gap-3  items-center font-bold '}> <FaShoppingCart />My cart<span className='badge badge-secondary'>{cart.length}</span></NavLink></li>
                        <li className='mb-3'><NavLink className={'flex gap-3  items-center font-bold '}> <MdGeneratingTokens />
                            Add review</NavLink></li>
                        <li className='mb-3'><NavLink className={'flex gap-3  items-center font-bold '}> <SlCalender />
                            My booking</NavLink></li>

                    </ul>

                    <hr className='my-5 w-[80%]' />

                    <ul>
                        <li className='mb-3 '><NavLink to='/' className={'flex gap-3  items-center font-bold '}> <FaHome /> Home</NavLink></li>
                        <li className='mb-3 '><NavLink className={'flex gap-3  items-center font-bold '}> <IoMdMenu />
                            Menu</NavLink></li>
                        <li className='mb-3 '><NavLink className={'flex gap-3  items-center font-bold '}> <FaShoppingBag />Shop</NavLink></li>
                        <li className='mb-3 '><NavLink to='/contact' className={'flex gap-3  items-center font-bold '}> <MdEmail />Contact</NavLink></li>


                    </ul>



                </div>

            </div>
            <div className='py-12 px-9 w-full bg-[#F6F6F6]'>
                <Outlet></Outlet>
            </div>





        </div>
    );
};

export default Dashboard;
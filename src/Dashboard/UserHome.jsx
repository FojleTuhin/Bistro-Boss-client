import { FaPhoneVolume, FaStar, FaStore, FaWallet } from 'react-icons/fa6';
import { IoWallet } from 'react-icons/io5';
import userImage from "../assets/others/profile.png"
import { FaCalendarAlt, FaShoppingCart } from 'react-icons/fa';

const UserHome = () => {
    return (
        <div>
            <p className='text-3xl font-semibold'>Hi, Welcome Back!</p>
            <div className='grid grid-cols-3 gap-6 mt-6 mb-8'>
                <div className='grid grid-cols-5 py-9 gap-6 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white'>
                    <div className='flex items-center justify-end col-span-2'>
                        <IoWallet className=' text-4xl' />
                    </div>
                    <div className='col-span-3'>
                        <p className='font-bold text-4xl'>205</p>
                        <p className='text-2xl'>Menu</p>
                    </div>

                </div>
                <div className='grid grid-cols-5 py-9 gap-6 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white'>
                    <div className='flex items-center justify-end col-span-2'>
                        <FaStore className=' text-4xl' />
                    </div>
                    <div className='col-span-3'>
                        <p className='font-bold text-4xl'>103</p>
                        <p className='text-2xl'>Shop</p>
                    </div>

                </div>
                <div className='grid grid-cols-5 py-9 gap-6 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white'>
                    <div className='flex items-center justify-end col-span-2'>
                        <FaPhoneVolume className=' text-4xl' />
                    </div>
                    <div className='col-span-3'>
                        <p className='font-bold text-4xl'>03</p>
                        <p className='text-2xl'>Contact</p>
                    </div>

                </div>


            </div>
            <div className='grid grid-cols-2'>
                <div className='bg-[#D1A054] py-20 flex flex-col items-center '>

                    <img className='h-[120px] w-[120px]  rounded-full' src={userImage} alt="" />
                    <p className='mt-12 text-3xl font-semibold'>Fojle Tuhin</p>

                </div>
                <div className='bg-[#FEF9C3] p-20'>
                    <p className='font-semibold text-4xl mb-8'>Your Activities</p>
                    <ul>
                        <li className='text-[#0088FE] text-2xl font-semibold flex items-center gap-2'><FaShoppingCart />Orders: 6</li>
                        <li className='text-[#00C4A1] text-2xl font-semibold flex items-center gap-2'><FaStar />Reviews: 2</li>
                        <li className='text-[#FFBB28] text-2xl font-semibold flex items-center gap-2'><FaCalendarAlt />Bookings: 1</li>
                        <li className='text-[#FF8042] text-2xl font-semibold flex items-center gap-2'><FaWallet />Payment:3</li>
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default UserHome;
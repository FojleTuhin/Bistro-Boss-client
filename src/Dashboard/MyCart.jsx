import { FaTrashAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import useCart from '../assets/Hooks/useCart';
const MyCart = () => {


    const [cart] = useCart();
    console.log(cart);

    return (
        <div className="">
            <Helmet>
                <title>Dashboard || My Cart</title>
            </Helmet>
            <p className="text-[#D99904] text-xl text-center mb-4">---My Cart---</p>
            <hr className="w-[40%] mx-auto border-2" />
            <p className="mt-5 text-[#151515] text-4xl text-center">Wanna Add More?</p>
            <hr className="w-[40%] mx-auto border-2 mb-12 mt-6" />


            <div className="bg-[#FFFFFF] w-[98%] mx-auto p-12">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-2xl font-bold">Total orders: 6</p>
                    <p className="text-2xl font-bold">Total price: $88.2</p>
                    <button className="btn bg-[#D1A054] text-white font-bold">Pay</button>

                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] mb-4 '>
                            <tr className='text-white py-6'>
                                <th> </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                       {
                        cart.map(item=>
                            <tbody key={item._id}>
                            {/* row 1 */}
                            <tr>
                                <th>  1</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name} </td>
                                <td>{item.price}</td>
                                <th>
                                    <button className="btn bg-[#B91C1C] p-3 border-none rounded-md"><FaTrashAlt className='text-white text-xl '/></button>
                                </th>
                            </tr>

                        </tbody>
                        )
                       }


                    </table>
                </div>

            </div>

        </div>
    );
};

export default MyCart;
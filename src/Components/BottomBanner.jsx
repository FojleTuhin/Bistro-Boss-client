import React from 'react';
import img from "../assets/home/featured.jpg"
import Title from '../Shared/Title';

const BottomBanner = () => {
    return (
        <div className='mt-32'>



            <div className=" min-h-screen" style={{ backgroundImage: `url(${img})` }}>

                <div className="hero-overlay bg-opacity-60"></div>
                <div className='pt-10'>
                    <Title heading={"Check it out"} subheading={"FROM OUR MENU"} ></Title>
                </div>

                <div className='grid grid-cols-2 gap-10 text-white'>
                    <div>
                        <img className='w-[50%] flex float-end' src={img} alt="" />

                    </div>
                    <div>

                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <div className="card-actions  mt-6">
                            <button className="btn text-black border-0 border-b-4 border-black">Add to cart</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BottomBanner;
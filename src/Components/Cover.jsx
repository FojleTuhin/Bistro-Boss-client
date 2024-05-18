import React from 'react';
import img from "../assets/menu/banner3.jpg"

const Cover = ({heading, subheading}) => {
    return (
        <div>
            <div className="hero h-[500px]" style={{ backgroundImage: `URL(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center text-neutral-content  w-[70%]">
                    <div className=" bg-[#15151599] ">
                        <h1 className="mb-5 text-5xl font-bold  pt-[100px]">{heading}</h1>
                        <p className="mb-5 pb-[100px]">{subheading}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
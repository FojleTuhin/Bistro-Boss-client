import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import MenuCard from "./MenuCard";

const Menu = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(item => item.category === "popular")
                setMenu(popular)
            })
    }, [])





    return (
        <div className="px-20">

            <Title heading={"Check it out"} subheading={"FROM OUR MENU"}></Title>

            <div className="grid grid-cols-2 gap-6">
                {
                    menu.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>

            <div className=" flex justify-center mb-32">
                <button className="btn mt-16 bg-none border-0 border-b-4 border-black">VIEW FULL MENU</button>
            </div>


            <div className="mb-32 bg-black">
                <p className="text-5xl font-semibold text-white text-center py-24">Call Us: +88 0192345678910</p>

            </div>

        </div>
    );
};

export default Menu;
import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import MenuCard from "./MenuCard";

const Menu = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(item => item.category === "popular")
                setMenu(popular)


            })
    }, [])





    return (
        <div className="px-20">

            <Title heading={"Check it out"} subheading={"FROM OUR MENU"}>

            </Title>

            <div className="grid grid-cols-2 gap-6">
                {
                    menu.map(item=><MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>

            <div className=" flex justify-center mb-32">
                <button className="btn mt-16 bg-none border-0 border-b-4 border-black">VIEW FULL MENU</button>
            </div>

        </div>
    );
};

export default Menu;
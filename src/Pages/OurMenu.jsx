import { useEffect, useState } from "react";
import Cover from "../Components/Cover";
import Title from "../Shared/Title";
import MenuCard from "../Components/MenuCard";
import img1 from "../assets/menu/banner3.jpg"
import img2 from "../assets/menu/dessert-bg.jpeg"
import img3 from "../assets/menu/pizza-bg.jpg"
import img4 from "../assets/menu/salad-bg.jpg"
import img5 from "../assets/menu/soup-bg.jpg"
import { Helmet } from "react-helmet-async";


const OurMenu = () => {


    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div className="">
            <Helmet>
                <title>
                    Bistro Boss || Menu
                </title>
            </Helmet>
            {/* offered menu  */}
            <div>
                <Cover heading={"OUR MENU"} subheading={"Would you like to try a dish?."} img={img1}></Cover>
                <Title heading={"Don't miss"} subheading={"TODAY'S OFFER"}></Title>
                <div className="grid grid-cols-2 gap-10 px-20">
                    {
                        menu.filter(item => item.category === "offered")
                            .map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                    }
                </div>
                <div className="flex justify-center mt-16 mx-auto">
                    <button className="btn text-[#BB8506] border-0 border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>

            {/* dessert menu  */}
            <div>
                <div className="mt-11 mb-11">
                    <Cover heading={"DESSERTS"} subheading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={img2}></Cover>
                </div>
                <div className="grid grid-cols-2 gap-10 px-20">
                    {
                        menu.filter(item => item.category === "dessert").slice(0, 6)
                            .map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                    }
                </div>
                <div className="flex justify-center mt-16 mx-auto mb-11">
                    <button className="btn text-[#BB8506] border-0 border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>

            {/* pizza menu  */}

            <div>
                <div className="mt-11 mb-11">
                    <Cover heading={"PIZZA"} subheading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."} img={img3}></Cover>
                </div>
                <div className="grid grid-cols-2 gap-10 px-20">
                    {
                        menu.filter(item => item.category === "pizza").slice(0, 6)
                            .map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                    }
                </div>
                <div className="flex justify-center mt-16 mx-auto mb-11">
                    <button className="btn text-[#BB8506] border-0 border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>

            {/* SALADS menu  */}

            <div>
                <div className="mt-11 mb-11">
                    <Cover heading={"SALADS"} subheading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."} img={img4}></Cover>
                </div>
                <div className="grid grid-cols-2 gap-10 px-20">
                    {
                        menu.filter(item => item.category === "salad").slice(0, 6)
                            .map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                    }
                </div>
                <div className="flex justify-center mt-16 mx-auto mb-11">
                    <button className="btn text-[#BB8506] border-0 border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>



            {/* SOUPS menu  */}

            <div>
                <div className="mt-11 mb-11">
                    <Cover heading={"SOUPS"} subheading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."} img={img5}></Cover>
                </div>
                <div className="grid grid-cols-2 gap-10 px-20">
                    {
                        menu.filter(item => item.category === "soup").slice(0, 6)
                            .map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                    }
                </div>
                <div className="flex justify-center mt-16 mx-auto mb-11">
                    <button className="btn text-[#BB8506] border-0 border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;
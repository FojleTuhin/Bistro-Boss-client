import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const ChefRecomands = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])


    return (
        <div className="px-20">
            <div className="flex flex-wrap justify-between">
                {
                    menu.slice(0, 3).map(item => <ChefCard key={item._id} item={item}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecomands;
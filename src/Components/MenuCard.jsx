const MenuCard = ({item}) => {
    return (
        <div className="flex gap-6">
            <div>
                <img className="w-[110px] h-[70px] rounded-tl-none rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]" src={item.image} alt="" />

            </div>
            <div>
                <p className="mb-2">{item.name} ------------------</p>
                <p>{item.recipe}</p>

            </div>
            <div>
                    <p className="text-[#BB8506] text-xl">${item.price}</p>
            </div>
        </div>
    );
};

export default MenuCard;

const ShopCard = ({ item }) => {
    return (
        <div>
            <div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl">
                    <div className="">
                       <img src={item.image} alt="" />
                       <p className="absolute top-3 right-3 px-5 py-3 bg-black text-white">${item.price}</p>
                    </div>
                    <div className="card-body bg-[#F3F3F3] text-center">
                        <h2 className="text-center text-2xl font-semibold mt-8">{item.name}</h2>
                        <p>{item.recipe}</p>
                        <div className="card-actions justify-center mb-8">
                            <button className="btn text-[#BB8506] border-0 border-b-4 border-black">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;

const ChefCard = ({item}) => {
    return (
        <div>
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="" /></figure>
                <div className="card-body bg-[#F3F3F3] text-center">
                    <h2 className="text-center text-2xl font-semibold mt-8">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions justify-center mb-8">
                        <button className="btn text-[#BB8506] border-0 border-b-4 border-black">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;
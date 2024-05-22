import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import useCart from "../assets/Hooks/useCart";




const ShopCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const [,refetch] = useCart();

    const handleAddToCart = (item) => {

        if (user && user.email) {

            const newItem = {
                name: item.name,
                category: item.category,
                image: item.image,
                itemId: item._id,
                price: item.price,
                recipe: item.recipe,
                email: user.email,
            }

            axios.post('http://localhost:5000/addToCart', newItem)
                .then(result => {
                    if (result.data.insertedId) {
                        console.log(result.data);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        //refetch the card
                        refetch()
                    }
                })

           

        }
        else {

            return Swal.fire("Please login First!");

        }

    }

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
                            <button onClick={() => handleAddToCart(item)} className="btn text-[#BB8506] border-0 border-b-4 border-black">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;
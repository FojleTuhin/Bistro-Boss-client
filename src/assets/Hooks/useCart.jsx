import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";



const useCart = () => {

    const {user} = useContext(AuthContext)
  
    const {refetch, data: cart=[] } =useQuery({
        queryKey:['cart', user?.email],
        queryFn: async()=>{
            const res = await axios(`http://localhost:5000/getFromCart?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useCart;
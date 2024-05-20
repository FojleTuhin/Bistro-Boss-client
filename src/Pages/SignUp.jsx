import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import img from "../assets/others/authentication.png"
import img1 from "../assets/others/authentication1 (1).png"


const SignUp = () => {
    return (
        <div>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="flex flex-row-reverse w-[80%] shadow-2xl shadow-gray-500 py-8 px-24 gap-20">
                <div className="w-[50%] flex justify-center items-center">
                    <img src={img1} alt="" />
                </div>
                <div className="w-[50%]">
                    <p className="text-2xl font-bold text-center">Login</p>

                    <form>

                        <div className="w-full mb-4">
                            <label >
                                <p className="text-[#444444] font-semibold mb-2">Email</p>
                                <input type="email" placeholder="Type here" className="p-3 w-full rounded-lg" />
                            </label>
                        </div>
                        <div className="w-full mb-4">
                            <label >
                                <p className="text-[#444444] font-semibold mb-2">Password</p>
                                <input type="email" placeholder="Enter your password" className="p-3 w-full rounded-lg" />
                            </label>
                        </div>
                        <div className="w-full mb-4">
                            <label >
                                <input type="email" placeholder="Type here" className="p-3 w-full rounded-lg" />
                            </label>
                        </div>
                        <button type="submit" className=" w-full btn text-white bg-[#d1a054]">Sign In</button>

                        <p className="font-medium mt-5 text-[#d1a054] text-center mb-3">New here? Create a New Account</p>
                        <p className="font-medium  text-center mb-3">Or sign in with</p>
                        <div className="flex justify-evenly">
                            <FaFacebook />
                            <FaGoogle />

                            <FaGithub />
                        </div>


                    </form>

                </div>
            </div>
        </div>

    </div>
    );
};

export default SignUp;
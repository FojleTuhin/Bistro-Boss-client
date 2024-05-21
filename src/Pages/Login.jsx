import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import img from "../assets/others/authentication.png"
import img1 from "../assets/others/authentication1 (1).png"
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";


const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const {signin}=useContext(AuthContext)

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])




    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signin(email, password)
        .then(result=>console.log(result.user));
    }




    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="flex w-[80%] shadow-2xl shadow-gray-500 py-8 px-24 gap-20">
                    <div className="w-[50%] flex justify-center items-center">
                        <img src={img1} alt="" />
                    </div>
                    <div className="w-[50%]">
                        <p className="text-2xl font-bold text-center">Login</p>

                        <form onSubmit={handleLogin}>

                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Email</p>
                                    <input type="email" name="email" required placeholder="Type here" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>
                            <div className="w-full mb-4">
                                <label >
                                    <p className="text-[#444444] font-semibold mb-2">Password</p>
                                    <input type="text" name="password" required placeholder="Enter your password" className="p-3 w-full rounded-lg" />
                                </label>
                            </div>
                            <div className="w-full mb-4">
                                <label >
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} required type="text" placeholder="Type here" className="p-3 w-full rounded-lg mt-2" />

                            </div>
                            <button disabled={disabled} type="submit" className=" w-full btn text-white bg-[#d1a054]">Sign In</button>

                            <p className="font-medium mt-5 text-[#d1a054] text-center mb-3">New here? <Link to='/signUp'>Create a New Account</Link></p>
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

export default Login;
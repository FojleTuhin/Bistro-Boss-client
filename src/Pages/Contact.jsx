import { MdLocationPin, MdOutlineTimer } from "react-icons/md";
import Cover from "../Components/Cover";
import Title from "../Shared/Title";
import img from "../assets/contact/banner.jpg"
import { FaPhoneVolume } from "react-icons/fa6";
import captha from "../assets/contact/Rectangle 76.png"
import { BiMessageRoundedDots } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss || Contact
                </title>
            </Helmet>
            <Cover heading={"CONTACT US"} subheading={"Would you like to try a dish?"} img={img}></Cover>
            <Title heading={'Visit Us'} subheading={'OUR LOCATION'}></Title>
            <div className="w-[70%] mx-auto flex justify-between">
                <div className="w-[30%]">
                    <div className="h-[60px] bg-[#D1A054] flex justify-center items-center">
                        <FaPhoneVolume className="text-2xl text-white" />

                    </div>
                    <div className="w-[90%] mx-auto bg-[#F3F3F3]">
                        <p className="pt-10 font-medium text-2xl text-center mb-4 ">PHONE</p>
                        <p className="text-center pb-20">+38 (012) 34 56 789</p>


                    </div>

                </div>
                <div className="w-[30%]">
                    <div className="h-[60px] bg-[#D1A054] flex justify-center items-center">
                        <MdLocationPin className="text-2xl text-white" />

                    </div>
                    <div className="w-[90%] mx-auto bg-[#F3F3F3]">
                        <p className="pt-10 font-medium text-2xl text-center mb-4 ">ADDRESS</p>
                        <p className="text-center pb-20">Taltola, Agargaon</p>


                    </div>

                </div>
                <div className="w-[30%]">
                    <div className="h-[60px] bg-[#D1A054] flex justify-center items-center">
                        <MdOutlineTimer className="text-2xl text-white" />

                    </div>
                    <div className="w-[90%] mx-auto bg-[#F3F3F3]">
                        <p className="pt-10 font-medium text-2xl text-center mb-4 ">WORKING HOURS</p>
                        <p className="text-center pb-20">Mon - Fri: 08:00 - 22:00</p>


                    </div>

                </div>
            </div>
            <Title heading={'Send Us a Message'} subheading={'CONTACT FORM'}></Title>
            <div className="w-[70%] mx-auto bg-[#F3F3F3] p-20 mb-52">
                <form>
                    <div className="flex justify-between mb-6">
                        <div className="w-[48%]">
                            <label >
                                <p className="text-[#444444] text-xl font-semibold mb-4">Name*</p>
                                <input type="text" placeholder="Enter your name" className="py-6 pl-9 w-full rounded-lg" />
                            </label>
                        </div>
                        <div className="w-[48%]">
                            <label >
                                <p className="text-[#444444] text-xl font-semibold mb-4">Email*</p>
                                <input type="email" placeholder="Enter your email" className="py-6 pl-9 w-full rounded-lg" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="w-full">
                            <label >
                                <p className="text-[#444444] text-xl font-semibold mb-4">Phone*</p>
                                <input type="number" placeholder="Enter your phone number" className="py-6 pl-9 w-full rounded-lg" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="w-full">
                            <label >
                                <p className="text-[#444444] text-xl font-semibold mb-4">Message*</p>
                                <textarea className="textarea textarea-bordered py-6 pl-9 w-full rounded-lg" placeholder="Write your message here"></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="mb-32">
                        <img src={captha} alt="" />
                    </div>
                    <div>
                        <div className="bg-[#835D23] w-[40%] mx-auto">
                            <p className="flex items-center text-center justify-center py-4 px-8 gap-4 text-white font-bold text-xl">Send Message <BiMessageRoundedDots /></p>
                        </div>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Contact;
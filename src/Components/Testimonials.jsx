import Title from "../Shared/Title";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { data } from "autoprefixer";



const Testimonials = () => {




    const [review, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data)
            )

    }, [])




    return (
        <div className="px-20">
            <Title heading={"What Our Clients Say"} subheading={"TESTIMONIALS"}></Title>
            <div >

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        review.map(item =>
                            <SwiperSlide key={item._id}>
                                <div className="px-20 flex flex-col items-center space-y-5 mb-32">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={item.rating}
                                        readOnly
                                    />
                                    <p></p>
                                    <p>Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <p className="text-[#CD9003] ">{item.name}</p>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
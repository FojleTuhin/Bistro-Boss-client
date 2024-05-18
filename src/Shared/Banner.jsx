import img from "../assets/home/chef-service.jpg"
const Banner = () => {
    return (
        <div className="px-20">
            <div className="hero h-[500px]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center w-[80%] mx-auto  bg-white text-black">
                    <div>
                        <h1 className="mb-2 text-5xl  pt-24">BISTRO BOSS</h1>
                        <p className="mb-5 pb-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
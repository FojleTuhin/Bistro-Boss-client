import HomeCarousel from "../Components/HomeCarousel";
import HomeSwipper from "../Components/HomeSwipper";
import Menu from "../Components/Menu";
import MenuCard from "../Components/MenuCard";
import Banner from "../Shared/Banner";

const Home = () => {
    return (
        <div>
          <HomeCarousel></HomeCarousel>
          <HomeSwipper></HomeSwipper>
          <Banner></Banner>
          <Menu></Menu>
         
        </div>
    );
};

export default Home;
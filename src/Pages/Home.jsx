import ChefRecomands from "../Components/ChefRecomands";
import HomeCarousel from "../Components/HomeCarousel";
import HomeSwipper from "../Components/HomeSwipper";
import Menu from "../Components/Menu";
import Banner from "../Shared/Banner";

const Home = () => {
    return (
        <div>
          <HomeCarousel></HomeCarousel>
          <HomeSwipper></HomeSwipper>
          <Banner></Banner>
          <Menu></Menu>
          <ChefRecomands></ChefRecomands>
         
        </div>
    );
};

export default Home;
import BottomBanner from "../Components/BottomBanner";
import ChefRecomands from "../Components/ChefRecomands";
import HomeCarousel from "../Components/HomeCarousel";
import HomeSwipper from "../Components/HomeSwipper";
import Menu from "../Components/Menu";
import Testimonials from "../Components/Testimonials";
import Banner from "../Shared/Banner";

const Home = () => {
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <HomeSwipper></HomeSwipper>
      <Banner></Banner>
      <Menu></Menu>
      <ChefRecomands></ChefRecomands>
      <BottomBanner></BottomBanner>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
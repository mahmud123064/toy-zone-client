import About from "../../About/About";
import Banner from "../../Banner/Banner";
import Gallery from "../../Gallery/Gallery";
import TopSellingProduct from "../../TopSellingProduct/TopSellingProduct";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TopSellingProduct></TopSellingProduct>
            <About></About>
        </div>
    );
};

export default Home;
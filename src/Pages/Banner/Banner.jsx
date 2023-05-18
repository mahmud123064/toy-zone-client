import { Link } from "react-router-dom";
import banner from "../../../public/toy-truck-2.jpg"
const Banner = () => {
    return (
        <div className="hero min-h-screen w-full mb-12 rounded-xl" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white  absolute rounded-xl flex items-center h-full left-16 ml-0 top-28  ">
                    <div className="space-y-7  pl-20">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Toy Truck Zone</h1>
                        <p className="mb-8 ">A toy truck website is an online platform dedicated to offering a wide range of toy trucks for children and truck enthusiasts alike. </p>
                        <Link to="/"><button className="btn btn-active btn-secondary mt-10 px-12">All Toy</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
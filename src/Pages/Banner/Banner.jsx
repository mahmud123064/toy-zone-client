import { Link } from "react-router-dom";
import banner from "../../../public/toy-truck-2.jpg"
const Banner = () => {
    return (
        <div className="hero min-h-screen w-full mb-12 rounded-xl" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-40">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white  absolute rounded-xl flex items-center h-full left-16 ml-0 top-28  ">
                        <div className="space-y-7  pl-20 ">
                            <h1 className="mb-5 text-5xl font-bold">Welcome to Toy Truck Zone</h1>
                            <p className="mb-8 ">A toy truck website is an online platform dedicated to offering a wide range of toy trucks for children and truck enthusiasts alike. </p>
                            <Link to="/"><button className="btn btn-active btn-secondary mt-10 px-12">All Toy</button></Link>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
        // bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]
    //     <div id="slide1" className="carousel-item relative w-full ">
    //     <img src={banner} className="w-full rounded-xl" />
    //     <div className="absolute rounded-xl flex items-center h-full left-0 right-5 top-0 bg-gradient-to-r from-[#ceb8b8] to-[#a39292] ">
    //         <div className="text-white space-y-7 w-1/2 pl-24">
    //             <h2 className="text-6xl font-semibold ">Affordable Price For Car Servicing</h2>
    //             <p className="font-medium">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
    //             <div>
    //                 <button className="btn btn-warning mr-5">Discover More</button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    );
};

export default Banner;
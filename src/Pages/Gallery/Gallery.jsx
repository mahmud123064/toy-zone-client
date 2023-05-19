import img1 from '../../../public/truck-1.jpg'
import img2 from '../../../public/toy-truck-2.jpg'
import img3 from '../../../public/truck-3.png'
import img4 from '../../../public/truck-4.png'
import img5 from '../../../public/truck-5.png'
import img6 from '../../../public/truck-6.png'
import { Link } from 'react-router-dom'
const Gallery = () => {
    return (
        <div className='mb-12'>
            <h2 className="text-center font-bold text-5xl ">Toy Gallery</h2>
            {/* ///////////// */}
            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className="card w-96 bg-base-100 drop-shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl h-60" />
                    </figure>
                    <div className="card-body items-center text-center mb-0">
                        <h2 className="card-title">Toy Truck</h2>
                        <div className="card-actions">
                           <Link to = "https://brudertoyshop.com/collections/commercial"> <button className="btn btn-primary">Buy Now</button></Link>
                        </div>
                    </div>
                </div>

                {/* //////////////////// */}
                {/* ///////////// */}

                <div className="card w-96 bg-base-100 drop-shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl h-60" />
                    </figure>
                    <div className="card-body items-center text-center mb-0">
                        <h2 className="card-title">Toy Truck</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                {/* //////////////////// */}
                {/* ///////////// */}

                <div className="card w-96 bg-base-100 drop-shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl  h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Toy Truck</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                {/* //////////////////// */}
                {/* ///////////// */}

                <div className="card w-96 bg-base-100 drop-shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl  h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Toy Truck</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                {/* //////////////////// */}
                {/* ///////////// */}

                <div className="card w-96 bg-base-100 drop-shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={img5} alt="Shoes" className="rounded-xl  h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Toy Truck</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>


                {/* ///////////// */}

                <div className="card w-96 bg-base-100 drop-shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={img6} alt="Shoes" className="rounded-xl  h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Toy Truck</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* //////////////////// */}
        </div>
    );
};

export default Gallery;
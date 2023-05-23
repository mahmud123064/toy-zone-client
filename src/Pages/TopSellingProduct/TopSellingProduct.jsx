import img5 from "../../../public/truck-5.png"
import img2 from "../../../public/toy-truck-2.jpg"
import img3 from "../../../public/truck-3.png"
const TopSellingProduct = () => {
    return (
        <div className="">
            <h2 className="text-center text-5xl font-bold mb-8">Our Top Selling Products</h2>
            <div  className="grid grid-cols-1 md:grid-cols-3">
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-5 mb-12">
                    <figure><img className="h-60" src = {img5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Toy Truck</h2>
                        <div className="badge badge-secondary">NEW</div>
                        <p>If you want a good toy?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-5 mb-12">
                    <figure><img className="h-60" src = {img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Toy Truck</h2>
                        <div className="badge badge-secondary">NEW</div>
                        <p>If you want a good toy?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl p-5 mb-12">
                    <figure><img className="h-60" src = {img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Toy Truck</h2>
                        <div className="badge badge-secondary">NEW</div>
                        <p>If you want a good toy?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSellingProduct;
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const AllToysDetails = () => {
    const { user } = useContext(AuthContext)

    const toyDetails = useLoaderData();
    console.log(toyDetails);
    const { seller_name,
        toy_name,
        rating,
        price,
        available_quantity,
        image_url,
        description

    } = toyDetails;


    return (
        <div className="card card-side bg-purple-100 shadow-2xl mt-12 mb-12 p-8 rounded-xl
      ">
            <figure><img className=" rounded-2xl me-5 w-1/2" src={image_url} alt="Album" /></figure>
            <div className="">
                <div className="card-body ">
                    <h2 className=" text-2xl card-title"><span className=" font-bold">Toy Name</span> : {toy_name}</h2>
                    <h4 className="  card-title"><span className="font-semibold">Seller Name</span> : {seller_name}</h4>
                    <h4 className="  card-title"><span className="font-semibold">Price</span> :$  {price}</h4>
                    <h4 className="  card-title"><span className="font-semibold">Available Quantity</span> : {available_quantity}</h4>
                    <h4 className="  card-title"><span className="font-semibold">Rating</span> : {rating}</h4>
                    <h4 className=""><span className="font-semibold">Email</span> : {user?.email}</h4>
                    <h4 className="  "><span className="font-semibold"> Description</span> : {description}</h4>
                </div>
                {/* <div className="card-actions justify-end">
                        <h4 className="  card-title "><span className="font-semibold"> Description</span> : {description}</h4>
                    </div> */}
            </div>
        </div>
    );
};

export default AllToysDetails;
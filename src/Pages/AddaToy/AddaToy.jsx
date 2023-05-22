import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const AddaToy = () => {

    // const addToyData = useLoaderData()
    // console.log(addToyData);

    const { user } = useContext(AuthContext)

    const handleAddProducts = event => {
        event.preventDefault();
        const form = event.target;
        const image_url = form.image_url.value;
        const toy_name = form.toy_name.value;
        const seller_name = user?.displayName;
        const sellerEmail = user?.email;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.available_quantity.value;
        const description = form.description.value;
        const addProduct = {
            image_url,
            toy_name,
            seller_name,
            sellerEmail,
            sub_category,
            price,
            rating,
            available_quantity,
            description,
            // toys: _id,
        }
        console.log(addProduct);

        fetch('http://localhost:5000/addatoy',{
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body : JSON.stringify(addProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    return (
        <div className='mt-12 mb-12'>
            <h2 className='text-center text-5xl font-bold'>Please Add Your Products</h2>

            <form onSubmit={handleAddProducts}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url Of Toy</span>
                        </label>
                        <input type="text" name='image_url' placeholder="Photo Url" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='toy_name' placeholder="Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='seller_name' defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name='sellerEmail' defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" name='sub_category' placeholder="Sub Category" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='available_quantity' placeholder="Available Quantity" className="input input-bordered" />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details Description</span>
                    </label>
                    <textarea className="textarea textarea-primary" name='description' placeholder="Description"></textarea>

                </div>

                <div className="form-control mt-6">
                    <input className='btn btn-primary btn-block' type="submit" value="Add Products" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>

    );
};

export default AddaToy;
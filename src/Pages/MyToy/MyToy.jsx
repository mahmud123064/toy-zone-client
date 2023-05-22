import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToy = () => {

    const [mytoys, setMytoy] = useState([]);
    const {user} = useContext(AuthContext)
    console.log(mytoys);

    useEffect(()=>{
        fetch(`http://localhost:5000/alltoyss?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMytoy(data);
        })
    },[])

    return (

        <div className='mt-12 mb-12'>
            <p>total: {mytoys.length}</p>

            <h3 className='text-center'>My Added Toys</h3>
            <table className="table table-compact w-full">
            <thead>
                <tr>
                    <th></th>
                    <th>Seller</th>
                    <th>Toy Name</th>
                    <th>Price</th>
                    <th>Available Quantity</th>
                    <th>Sub Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    mytoys.map((mytoy, index) => <tr
                        key={index + 1}
                        // { const {price} = alltoy;}

                    >
                        <td>{index + 1}</td>
                        <td>{mytoy.seller_name}</td>
                        <td>{mytoy.toy_name}</td>
                        <td>{mytoy.price}</td>
                        <td>{mytoy.available_quantity}</td>
                        <td>{mytoy.sub_category}</td>

                       {/* <Link to={`/alltoysdetails/${alltoy._id}`}> <button className="btn btn-secondary mb-2">Details</button></Link> */}

                       <div>
                        <Link><button className='btn btn-primary me-2 mb-3'>Edit</button></Link>
                        <Link><button className='btn btn-warning mb-3'>Delete</button></Link>
                       </div>

                    </tr>)
                }
            </tbody>
        </table>

        </div>
       
    );
};

export default MyToy;
import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Delete from '../Delete/Delete';


const MyToy = () => {

    const [mytoys, setMytoy] = useState([]);
    const { user } = useContext(AuthContext)
    console.log(mytoys);

    useEffect(() => {
        fetch(`https://toy-truck-server.vercel.app/alltoyss?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMytoy(data);
            })
    }, [])


    // const handleDelete = id => {
    //     console.log(_id);

    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {


    //             fetch(`http://localhost:5000/alltoyss/${id}`, {
    //                 method: "DELETE"
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your Toy data has been deleted.',
    //                             'success'
    //                         )

    //                         const remaining = mytoys.filter(mytoy => mytoy._id !== id )
    //                         setMytoy(remaining)
    //                     }
    //                 })
    //         }
    //     })
    // }



    return (

        <div className='mt-12 mb-12'>

            <h3 className='text-center font-bold text-4xl mb-8'>My Added Toys</h3>
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
                        mytoys.map((mytoy, index) => <Delete
                        key={mytoy._id }
                        index={index + 1}
                        mytoy = {mytoy}
                        setMytoy = {setMytoy}
                        // handleDelete ={handleDelete}
                     

                        >

                        </Delete>)
                    }
                </tbody>


                {/* <tbody>
              
                {
                    mytoys.map((mytoy, index) => <tr
                        key={index + 1}
                       
                    >
                        <td>{index + 1}</td>
                        <td>{mytoy.seller_name}</td>
                        <td>{mytoy.toy_name}</td>
                        <td>{mytoy.price}</td>
                        <td>{mytoy.available_quantity}</td>
                        <td>{mytoy.sub_category}</td>
        
                       

                       {/* <Link to={`/alltoysdetails/${alltoy._id}`}> <button className="btn btn-secondary mb-2">Details</button></Link> */}

                {/* <div>
                        <Link><button  className='btn btn-primary me-2 mb-3'>Edit</button></Link>
                        <Link><button  className='btn btn-warning mb-3'>Delete</button></Link>
                       </div> */}

                {/* </tr> */}
                {/* ) */}
                {/* } */}
                {/* </tbody> */}
            </table>

        </div>

    );
};

export default MyToy;
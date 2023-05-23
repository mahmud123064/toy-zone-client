import React from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2"

const Delete = ({ mytoy, index, }) => {
    console.log(mytoy);

    const { _id, seller_name, toy_name, price, available_quantity, sub_category } = mytoy;

    const handleDelete = id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/alltoyss/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            const remaining = mytoys.filter(mytoy => mytoy._id !== id )
                            Swal.fire(
                                'Deleted!',
                                'Your Toy data has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <tr>
            <td>{index}</td>
            <td>{seller_name}</td>
            <td>{toy_name}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <td>{sub_category}</td>



            <div>
                <Link><button className='btn btn-primary me-2 mb-3'>Edit</button></Link>
                <Link><button onClick={() => handleDelete(_id)} className='btn btn-warning mb-3'>Delete</button></Link>
            </div>
        </tr>
    );
};

export default Delete;
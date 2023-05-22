import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import AllToyTable from "../AllToyTable/AllToyTable";



const AllToys = () => {
    const [alltoys, setAlltoys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-truck-server.vercel.app/alltoys`)
            .then(res => res.json())
            .then(data => setAlltoys(data))
    }, [])
    return (
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
                    alltoys.map((alltoy, index) => <tr
                        key={index + 1}
                        // { const {price} = alltoy;}

                    >
                        <td>{index + 1}</td>
                        <td>{alltoy.seller_name}</td>
                        <td>{alltoy.toy_name}</td>
                        <td>{alltoy.price}</td>
                        <td>{alltoy.available_quantity}</td>
                        <td>{alltoy.sub_category}</td>

                       <Link to={`/alltoysdetails/${alltoy._id}`}> <button className="btn btn-secondary mb-2">Details</button></Link>

                    </tr>)
                }
            </tbody>
        </table>

        // <div>
        //     {
        //         alltoys?.map((alltoy) =>

        //             <div className="overflow-x-auto">
        //                 <table className="table table-compact w-full">
        //                     <thead>
        //                         <tr>
        //                             <th></th>
        //                             <th>Seller</th>
        //                             <th>Toy Name</th>
        //                             <th>Price</th>
        //                             <th>Available Quantity</th>
        //                             <th>Details</th>
        //                         </tr>
        //                     </thead>

        //                     <tbody>
        //                         <tr>
        //                             {/* <th>1</th> */}
        //                             <td>{ alltoy.price}</td>
        //                             <td>Quality Control Specialist</td>
        //                             <td>Littel, Schaden and Vandervort</td>
        //                             <td>Canada</td>
        //                             <td>12/16/2020</td>
        //                             <td>Blue</td>
        //                         </tr>

        //                     </tbody>


        //                 </table>
        //             </div>
        //             //  (
        //             // <AllToyTable alltoy ={alltoy}>

        //             // </AllToyTable>
        //             // )
        //         )
        //     }
        // </div>


    );
};

export default AllToys;
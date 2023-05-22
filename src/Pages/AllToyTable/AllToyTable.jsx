import React from 'react';

const AllToyTable = ({altoy}) => {
    console.log(altoy);
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th>1</th>
                        <td>{}</td>
                        <td>Quality Control Specialist</td>
                        <td>Littel, Schaden and Vandervort</td>
                        <td>Canada</td>
                        <td>12/16/2020</td>
                        <td>Blue</td>
                    </tr>
                    
                </tbody>


            </table>
        </div>

    );

};

export default AllToyTable;
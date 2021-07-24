import { useContext } from "react";
import React from "react";

import { Link } from "react-router-dom";
import ProductContext from "../productContext";

export default function ProductList(){
    let product = useContext(ProductContext);
    return <>
    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <a target="_blank" rel="noreferrer"
        href="https://datatables.net">official DataTables documentation</a>.</p>

        <Link to="/productcreate">Create Product</Link>

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                    <tr>
                        <th>ProductName</th>
                        <th>Brand</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>ProductName</th>
                        <th>Brand</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
                <tbody>
                {
                                product.productList.map((obj) => 
                                {
                                    return  <tr>
                                    <td>{obj.ProductName}</td>
                                    <td>{obj.Brand}</td>
                                    <td>{obj.Color}</td>
                                    <td>{obj.Price}</td>
                                    <td>
                                        <Link to="/productedit/2">Product Edit</Link>
                                    </td>
                                </tr>
                                })
                            }
                    
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}
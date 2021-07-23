import React from "react";

import { Link } from "react-router-dom";

export default function ProductList(){
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
                        <th>Processor</th>
                        <th>Battery</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {/* <tfoot>
                    <tr>
                        <th>ProductName</th>
                        <th>Brand</th>
                        <th>Processor</th>
                        <th>Battery</th>
                        <th>Price</th>
                        <th>
                            <Link to="/productedit/1">Product Edit</Link>
                        </th>
                    </tr>
                </tfoot> */}
                <tbody>
                    <tr>
                        <th>MacBook Air</th>
                        <th>Apple</th>
                        <th>1.8GHz Intel Core i5 </th>
                        <th>7150mAh</th>
                        <th>117900</th>
                        <th>
                            <Link to="/productedit/1">Product Edit</Link>
                        </th>
                    </tr>
                    <tr>
                        <th>ZenBook 14</th>
                        <th>ASUS</th>
                        <th>1.8 GHz ‎Intel ‎Core i7</th>
                        <th>‎50 Watt Hours</th>
                        <th>99200</th>
                        <th>
                            <Link to="/productedit/2">Product Edit</Link>
                        </th>
                    </tr>
                    <tr>
                        <th>Lenovo</th>
                        <th>Lenovo</th>
                        <th>‎1.8 GHz AMD ‎Ryzen 7</th>
                        <th>‎57 Watt Hours</th>
                        <th>68990</th>
                        <th>
                            <Link to="/productedit/3">Product Edit</Link>
                            </th>
                    </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}
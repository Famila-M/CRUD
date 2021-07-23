import { Link } from "react-router-dom";

export default function UserList(){
    return <>
    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <a target="_blank" rel="noreferrer"
        href="https://datatables.net">official DataTables documentation</a>.</p>

        <Link to="/usercreate">Create User</Link>

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                <th>
                                    <Link to="/useredit/1">User Edit</Link>
                                </th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <th>Tiger Nixon</th>
                                <th>System Architect</th>
                                <th>Edinburgh</th>
                                <th>61</th>
                                <th>2011/04/25</th>
                                <th>$320,800</th>
                                <th>
                                    <Link to="/useredit/2">User Edit</Link>
                                </th>
                            </tr>
                            <tr>
                                <th>Garrett Winters</th>
                                <th>Accountant</th>
                                <th>Tokyo</th>
                                <th>63</th>
                                <th>2011/07/25</th>
                                <th>$170,750</th>
                                <th>
                                    <Link to="/useredit/3">User Edit</Link>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}
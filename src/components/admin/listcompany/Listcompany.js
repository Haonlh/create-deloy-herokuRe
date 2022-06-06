import React, { Component } from 'react';
import './listcompany.css';

class Listcompany extends Component {
    render() {
        return (
            <>
                <div className="listcompany">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="input-group">
                            <input type="text" className="form-control" ref="search" placeholder="Search for..." />
                            <span className="input-group-btn">
                                <button className="btn btn-info" style={{padding:(0,6.4) }} type="button">Go!</button>
                            </span>
                        </div>
                    </div>
                    <table className="table table-hover">
                        <thead className="row-style">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Website</th>
                                <th>Adress</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Detail</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}
export default Listcompany;
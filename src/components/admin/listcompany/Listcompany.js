import React, { Component } from 'react';
import './listcompany.css';
import getTest from '../../../api/testAPI';


class Listcompany extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };
    }
    componentDidMount() {
        // Simple GET request using axios
        getTest().then((response) => this.setState({ list: response }));

    }
    render() {
        console.log("data", this.state.list);
        const { list } = this.state;
        return (

            <div className="listcompany">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="input-group">
                        <input type="text" className="form-control" ref="search" placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-info" style={{ padding: (0, 6.4) }} type="button">Go!</button>
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
                        {list.forEach((element) => {

                            <tr>
                                <td>{element}</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                                <td>#</td>
                            </tr>

                        })}
                    </tbody>

                </table>
            </div>

        );
    }
}
export default Listcompany;
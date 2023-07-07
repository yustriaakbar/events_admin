import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const AddCategory = () => {
    const [category_name, setName] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const storeCategory = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/api/category/store", { category_name }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate("/category");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <br />
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Add Category</h3>
                                    </div>
                                    <form onSubmit={storeCategory}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Category Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Category Name"
                                                    value={category_name} onChange={(e) => setName(e.target.value)}/>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <!-- /.content-wrapper --> */}
        </div>
    );
};

export default AddCategory

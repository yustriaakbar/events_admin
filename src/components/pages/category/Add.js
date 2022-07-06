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
            <div class="content-wrapper">
                <section class="content">
                    <div class="container-fluid">
                        <br />
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Add Category</h3>
                                    </div>
                                    <form onSubmit={storeCategory}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Category Name</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Enter Category Name"
                                                    value={category_name} onChange={(e) => setName(e.target.value)}/>
                                            </div>
                                        </div>

                                        <div class="card-footer">
                                            <button type="submit" class="btn btn-primary">Submit</button>
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

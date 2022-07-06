import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
    const [category_name, setName] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    const token = localStorage.getItem('token');
  
    useEffect(() => {
      getCategoryById();
    }, []);
  
    const updateCategory = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost:3001/api/category/update/${id}`, {category_name},{
          headers: {
              Authorization: `Bearer ${token}`
          },
      });
        navigate("/category");
      } catch (error) {
        console.log(error);
      }
    };
  
    const getCategoryById = async () => {
      const response = await axios.get(`http://localhost:3001/api/category/show-detail/${id}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      setName(response.data.data.name);
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
                                        <h3 class="card-title">Edit Category</h3>
                                    </div>
                                    <form onSubmit={updateCategory}>
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

export default EditCategory

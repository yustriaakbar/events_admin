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
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <br />
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Edit Category</h3>
                                    </div>
                                    <form onSubmit={updateCategory}>
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

export default EditCategory

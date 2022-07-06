import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Category = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const token = localStorage.getItem('token');

    const getCategories = async () => {
        const response = await axios.get('http://localhost:3001/api/category', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setCategories(response.data.data);
    }

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
        getCategories();
    }, []);


    const deleteCategory = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/category/destroy/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getCategories();
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
                        <h1 className="h3 mb-4 text-gray-800">List Category</h1>
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <Link
                                    to={`add`}
                                    className="btn btn-secondary btn-sm"
                                >
                                    Add Category
                                </Link>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Category Name</th>
                                                <th>Created On</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {categories.map((category, index) => (
                                                <tr key={category.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{category.name}</td>
                                                    <td>{category.createdAt}</td>
                                                    <td>
                                                        <Link
                                                            to={`edit/${category.id}`}
                                                            className="btn btn-primary btn-sm mr-3"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Button variant="danger" size="sm" onClick={() => deleteCategory(category.id)}>
                                                            Delete
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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

export default Category

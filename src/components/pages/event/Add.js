import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEvents = () => {
    const [name, setName] = useState("");
    const [category_id, setCategory] = useState();
    const [date, setDate] = useState("");
    const [hours, setHours] = useState("");
    const [min_age, setMinAge] = useState("");
    const [quota, setQuota] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const token = localStorage.getItem('token');

    const storeEvents = async (e) => {
        console.log({ category_id })
        e.preventDefault();
        try {
            await axios.post("http://localhost:3001/api/events/store",
                { name, category_id, date, hours, min_age, quota, location }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate("/events");
        } catch (error) {
            console.log(error);
        }
    };

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
                                        <h3 class="card-title">Add Events</h3>
                                    </div>
                                    <form onSubmit={storeEvents}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Name</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Enter Event Name"
                                                    value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div class="form-group">
                                                <label>Select Category</label>
                                                <select class="form-control"
                                                    value={category_id} onChange={(e) => setCategory(e.target.value)}>
                                                    {categories.map((category) => (
                                                        <option value={category.id}>{category.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Date</label>
                                                <input
                                                    type="date"
                                                    class="form-control"
                                                    value={date} onChange={(e) => setDate(e.target.value)} />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Hours</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Enter Hours"
                                                    value={hours} onChange={(e) => setHours(e.target.value)} />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Min Age</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Enter Min Age"
                                                    value={min_age} onChange={(e) => setMinAge(e.target.value)} />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Quota</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Enter Quota"
                                                    value={quota} onChange={(e) => setQuota(e.target.value)} />
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Location</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Enter Location"
                                                    value={location} onChange={(e) => setLocation(e.target.value)} />
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

export default AddEvents

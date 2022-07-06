import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Moment from 'moment';

const EditEvents = () => {
    const [name, setName] = useState("");
    const [category_id, setCategory] = useState();
    const [date, setDate] = useState("");
    const [hours, setHours] = useState("");
    const [min_age, setMinAge] = useState("");
    const [quota, setQuota] = useState("");
    const [location, setLocation] = useState("");
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const token = localStorage.getItem('token');
  
    useEffect(() => {
      getCategoryById();
    }, []);
  
    const updateEvents = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost:3001/api/events/update/${id}`, 
        { name, category_id, date, hours, min_age, quota, location },{
          headers: {
              Authorization: `Bearer ${token}`
          },
      });
        navigate("/events");
      } catch (error) {
        console.log(error);
      }
    };
  
    const getCategoryById = async () => {
      const response = await axios.get(`http://localhost:3001/api/events/show-detail/${id}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      setName(response.data.data.name);
      setCategory(response.data.data.category_id);
      setDate(Moment(response.data.data.date).format('YYYY-MM-DD'));
      setHours(response.data.data.hours);
      setMinAge(response.data.data.min_age);
      setQuota(response.data.data.quota);
      setLocation(response.data.data.location);
    };

    const getCategories = async () => {
        const response = await axios.get('http://localhost:3001/api/category', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setCategories(response.data.data);
    };

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
                                        <h3 class="card-title">Edit Events</h3>
                                    </div>
                                    <form onSubmit={updateEvents}>
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

export default EditEvents

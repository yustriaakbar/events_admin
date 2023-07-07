import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Moment from 'moment';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Sidebar from '../../layout/Sidebar';

const Events = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const token = localStorage.getItem('token');

    const getEvents = async () => {
        const response = await axios.get('http://localhost:3001/api/events' + '/?search=');
        setEvents(response.data.data);
    }

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
        getEvents();
    }, []);


    const deleteEvent = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/events/destroy/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getEvents();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <React.Fragment>
        <Header />
        <Sidebar />
        <div>
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <br/>
                        <h1 className="h3 mb-4 text-gray-800">List Events</h1>
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <Link
                                    to={`add`}
                                    className="btn btn-secondary btn-sm"
                                >
                                    Add Events
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Event Name</th>
                                                <th>Date</th>
                                                <th>Hours</th>
                                                <th>Min Age</th>
                                                <th>Quota</th>
                                                <th className="col-3">Location</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {events.map((event, index) => (
                                                <tr key={event.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{event.name}</td>
                                                    {/* <td>{event.date}</td> */}
                                                    <td>{Moment(event.date).format('D MMMM Y')}</td>
                                                    <td>{event.hours}</td>
                                                    <td>{event.min_age}</td>
                                                    <td>{event.quota}</td>
                                                    <td className="col-3">{event.location}</td>
                                                    <td>
                                                        <Link
                                                            to={`edit/${event.id}`}
                                                            className="btn btn-primary btn-sm mr-3"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Button variant="danger" size="sm"  onClick={() => deleteEvent(event.id)}>
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
        </div>
        <Footer />
        </React.Fragment>
    );
};

export default Events

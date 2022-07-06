import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Participant = () => {
    const navigate = useNavigate();
    const [participants, setParticipants] = useState([]);
    const token = localStorage.getItem('token');

    const getParticipants = async () => {
        const response = await axios.get('http://localhost:3001/api/participants', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setParticipants(response.data.data);
    }

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
        getParticipants();
    }, []);

    const deleteParticipant = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/participants/destroy/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getParticipants();
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
                        <br/>
                        <h1 className="h3 mb-4 text-gray-800">List Participants</h1>
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Full Name</th>
                                                <th>NIK</th>
                                                <th>Email</th>
                                                <th>Gender</th>
                                                <th>Created On</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {participants.map((participant, index) => (
                                                <tr key={participant.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{participant.full_name}</td>
                                                    <td>{participant.nik}</td>
                                                    <td>{participant.email}</td>
                                                    <td>{participant.gender}</td>
                                                    <td>{participant.createdAt}</td>
                                                    <td>
                                                        <Link
                                                            to={`edit/${participant.id}`}
                                                            className="btn btn-primary btn-sm mr-3"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Button variant="danger" size="sm"  onClick={() => deleteParticipant(participant.id)}>
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

export default Participant

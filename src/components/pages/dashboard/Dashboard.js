import React, {useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Sidebar from '../../layout/Sidebar';

const Dashboard = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, []);
    
    return (
        <React.Fragment>
        <Header />
        <Sidebar />
        <div>
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <br />
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>13</h3>
                                        <p>Events Active</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>Total Events</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>100</h3>
                                        <p>Total Participants</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>New Orders</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">
                                        More info <i className="fas fa-arrow-circle-right"></i>
                                    </a>
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

export default Dashboard

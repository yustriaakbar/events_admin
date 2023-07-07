import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div>
            {/* <!-- Main Sidebar Container --> */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* <!-- Brand Logo --> */}
                <a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                {/* <!-- Sidebar --> */}
                <div className="sidebar">
                    {/* <!-- Sidebar user panel (optional) --> */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Administrator</a>
                        </div>
                    </div>

                    {/* <!-- SidebarSearch Form --> */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                        </div>
                    </div>

                    {/* <!-- Sidebar Menu --> */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/dashboard'>
                                    <i className="nav-icon fa-solid fas fa-tachometer-alt" />
                                    <p>Dashboard</p>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/category'>
                                    <i className="nav-icon fas fa-th" />
                                    <p>Category</p>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/events'>
                                    <i className="nav-icon fas fa-calendar-day" />
                                    <p>Events</p>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/participant'>
                                    <i className="nav-icon fas fa-users" />
                                    <p>Participants</p>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <a className='nav-link' onClick={logout}>
                                    <i className="nav-icon fas fa-sign-out-alt" />
                                    <p>Logout</p>
                                </a>
                            </li>
                        </ul>

                    </nav>
                    {/* <!-- /.sidebar-menu --> */}
                </div>
                {/* <!-- /.sidebar --> */}
            </aside>
        </div>
    );
};

export default Sidebar

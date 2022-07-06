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
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                {/* <!-- Brand Logo --> */}
                <a href="index3.html" class="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"/>
                        <span class="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                {/* <!-- Sidebar --> */}
                <div class="sidebar">
                    {/* <!-- Sidebar user panel (optional) --> */}
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"/>
                        </div>
                        <div class="info">
                            <a href="#" class="d-block">Administrator</a>
                        </div>
                    </div>

                    {/* <!-- SidebarSearch Form --> */}
                    <div class="form-inline">
                        <div class="input-group" data-widget="sidebar-search">
                            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                                <div class="input-group-append">
                                    <button class="btn btn-sidebar">
                                        <i class="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                        </div>
                    </div>

                    {/* <!-- Sidebar Menu --> */}
                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li class="nav-item">
                                <NavLink className="nav-link" to='/dashboard'>
                                    <i className="nav-icon fa-solid fas fa-tachometer-alt" />
                                    <p>Dashboard</p>
                                </NavLink>
                            </li>
                        </ul>
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li class="nav-item">
                                <NavLink className="nav-link" to='/category'>
                                    <i className="nav-icon fas fa-th" />
                                    <p>Category</p>
                                </NavLink>
                            </li>
                        </ul>
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li class="nav-item">
                                <NavLink className="nav-link" to='/events'>
                                    <i className="nav-icon fas fa-calendar-day" />
                                    <p>Events</p>
                                </NavLink>
                            </li>
                        </ul>
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li class="nav-item">
                                <NavLink className="nav-link" to='/participant'>
                                    <i className="nav-icon fas fa-users" />
                                    <p>Participants</p>
                                </NavLink>
                            </li>
                        </ul>
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li class="nav-item">
                                <a className='nav-link' type="submit" onClick={logout}>
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

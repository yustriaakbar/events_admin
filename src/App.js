import React from 'react';
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/pages/dashboard/Dashboard';
import Footer from './components/layout/Footer';
import Category from './components/pages/category/Category';
import AddCategory from './components/pages/category/Add';
import EditCategory from './components/pages/category/Edit';
import Events from './components/pages/event/Events';
import AddEvents from './components/pages/event/Add';
import EditEvents from './components/pages/event/Edit';
import Participant from './components/pages/participant/Participant';
import Login from './components/Login';

function App() {
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      {!token ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Navigate to="/dashboard" replace={true} />
      )}
      <div class="wrapper">
        < Header />
        < Sidebar />
        <Routes>
          <Route path='/dashboard' element={< Dashboard />}/>
          <Route path='/category' element={< Category />}/>
          <Route path='/category/add' element={< AddCategory />} />
          <Route path='/category/edit/:id' element={< EditCategory />} /> 
          <Route path='/events' element={< Events />}/>
          <Route path='/events/add' element={< AddEvents />} />
          <Route path='/events/edit/:id' element={< EditEvents />} /> 
          <Route path='/participant' element={< Participant />}/>
        </Routes>
        < Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

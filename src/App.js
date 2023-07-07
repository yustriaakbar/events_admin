import React from 'react';
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/pages/dashboard/Dashboard';
import Category from './components/pages/category/Category';
import AddCategory from './components/pages/category/Add';
import EditCategory from './components/pages/category/Edit';
import Events from './components/pages/event/Events';
import AddEvents from './components/pages/event/Add';
import EditEvents from './components/pages/event/Edit';
import Participant from './components/pages/participant/Participant';
import Login from './components/Login';
import "./Style.css";

function App() {
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='dashboard' element={< Dashboard />}/>
          <Route path='category' element={< Category />}/>
          <Route path='category/add' element={< AddCategory />} />
          <Route path='category/edit/:id' element={< EditCategory />} /> 
          <Route path='events' element={< Events />}/>
          <Route path='events/add' element={< AddEvents />} />
          <Route path='events/edit/:id' element={< EditEvents />} /> 
          <Route path='participant' element={< Participant />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

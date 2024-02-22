// frontend/src/app.jsx

import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import EmployeeDashboard from './components/EmployeeDashboard';
import EmployeeDetails from './pages/EmployeeDetails';
import Home from './pages/Home';
import Timesheet from './pages/Timesheet';

const App = () => {
  return (
   
       <div> 
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Timesheet Application</h1>
        </header>
        <div className="container mx-auto px-4 py-8">
          {/* <Switch> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/employees" element={EmployeeDashboard} />
            <Route path="/employees/:id" element={EmployeeDetails} />
            <Route path="/timesheet" element={Timesheet} />
            </Routes>
          {/* </Switch> */}
        </div>
      </div> 
    
  );
};

export default App;

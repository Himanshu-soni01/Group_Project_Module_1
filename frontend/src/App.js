/* Import Section - Start */

/* React Imports - Start */

import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

/* React Imports -End */

/* Project components Imports - Start */

import Login from './components/signin-up/login';
import Signup from './components/signin-up/Signup';
import Calendar from "./components/calendar/Calendar"
import Layout from './components/layout/Layout';
import ManageEvents from './components/manageEvents/ManageEvents';
import ProjectAllocation from './components/projectAllocation/ProjectAllocation';
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

/* Project components Imports -End */

/* Import Section - End */

/* Function - Start */
function App() {
  
/* Render View Return - Start */
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Layout/> }>
              <Route path="/dashboard/" element={<ProjectAllocation/>}/>
              <Route path="/dashboard/calendar" element={<Calendar/>}/>
              <Route path="/dashboard/manageevents" element={<ManageEvents/>}/>
             
          </Route>
        </Routes>
     </BrowserRouter>
     <ToastContainer/>
    </div>
  );

  /* Render View Return - End */
}

/* Function - End */

/* Export default functionName */

export default App;

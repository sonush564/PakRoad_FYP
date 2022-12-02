import React, { useState } from "react";
import './App.css';
import {ReactDOM} from "react-dom/client";
import { createRoot } from 'react-dom/client';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import il8n from './il8Next'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import RegularDrivingLicense from './Components/LicenseModule/RegularLicense/RegularDrivingLicense';
import LearnerPermit from './Components/LicenseModule/LearnerPermit/LearnerPermit';
import InternationDrivingLicense from './Components/LicenseModule/InternationalLicense/InternationalDrivingLicense';
import DrivingLicenseRenewal from './Components/LicenseModule/RenewalLicense/DrivingLicenseRenewal';
import DuplicateDrivingLicense from './Components/LicenseModule/DuplicateLicense/DuplicateDrivingLicense';
import Menubar from './Components/Header/Menubar';
import Sign from './Components/TrafficRulesModule/Sign';
import Quiz from './Components/DrivingTestModule/SignTest/Quiz';
import QuizFinal from './Components/DrivingTestModule/SignTest/QuizFinal';
import ImportantInformation from './Components/TrafficRulesModule/ImportantInformation';
import ShareRide from './Components/NeedShareRideModule/ShareRide';
import NeedRide from './Components/NeedShareRideModule/NeedRide';
import Practical from './Components/DrivingTestModule/PracticalTest/Practical';
import TestQuiz from './Components/DrivingTestModule/SignTest/TestQuiz';
import { Radio } from '@mui/material';
import About from './Components/About/About';
import About1 from './Components/About/About1';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "./Components/Header/Header";
function App() { 
  const changeLanguage=(ln)=>{
    return()=>{
      il8n.changeLanguage(ln)
    }
  } 
  const [toggleDark, settoggleDark] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: toggleDark ? "dark" : "light",
    },
  });
  return (
    
    <header>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <div className="App">
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark} />}> </Route>
      <Route path="/headerHeader" element={< Header changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark} />}> </Route>
      <Route path="/RegularDrivingLicense" element={< RegularDrivingLicense changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/LearnerPermit" element={< LearnerPermit changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/InternationDrivingLicense" element={< InternationDrivingLicense changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/DrivingLicenseRenewal" element={< DrivingLicenseRenewal changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/menu" element={< Menubar changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/DuplicateDrivingLicense" element={< DuplicateDrivingLicense changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/Sign" element={< Sign changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/Quiz" element={< Quiz changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/QuizFinal" element={< QuizFinal changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/ImportantInformation" element={< ImportantInformation changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/ShareRide" element={< ShareRide changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/NeedRide" element={< NeedRide changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/Practical" element={< Practical changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/testquiz" element={< TestQuiz changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/radio" element={< Radio changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/about" element={< About changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
      <Route path="/about1" element={< About1 changeLanguage={changeLanguage} toggleDark={toggleDark}
      settoggleDark={settoggleDark}/>}> </Route>
    </Routes>
  </BrowserRouter>

    </div>
    </ThemeProvider>
    </header>
    
  );
}

export default App;


   
 

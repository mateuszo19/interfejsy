import React from 'react';
import Dashboard from "./pages/Dashboard/Dashboard";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FlightConditions from "./pages/FlightConditions/FlightConditions";
import History from "./pages/History/History";
import Planes from "./pages/Planes/Planes";
import Clients from "./pages/Clients/Clients";
//TODO dodac baze danych
function App() {
  return (
      <div className="h-screen w-screen flex flex-col">
            <Header/>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/planes" element={<Planes />} />
                <Route path="/history" element={<History />} />
                <Route path="/flight-conditions" element={<FlightConditions />} />
                <Route path="/clients" element={<Clients />} />
            </Routes>
            <Footer/>
      </div>
  );
}

export default App;

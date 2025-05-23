import React from 'react';
import Dashboard from "./pages/Dashboard/Dashboard";
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FlightConditions from "./pages/FlightConditions/FlightConditions";
import History from "./pages/History/History";
import Planes from "./pages/Planes/Planes";
import Clients from "./pages/Clients/Clients";
import LandingPage from "./pages/LandingPage/LandingPage";
function Home() {
    const location = useLocation();

    const pages = [
        {
            url: "/",
            element: <LandingPage/>,
            showHeader: false
        },
        {
            url: "/dashboard",
            element: <Dashboard/>,
            showHeader: true
        },
        {
            url: "/planes",
            element: <Planes/>,
            showHeader: true
        },
        {
            url: "/history",
            element: <History/>,
            showHeader: true
        },
        {
            url: "/flight-conditions",
            element: <FlightConditions/>,
            showHeader: true
        },
        {
            url: "/clients",
            element: <Clients/>,
            showHeader: true
        }
    ]

    const currentPage = pages.find(page => page.url === location.pathname);

  return (
      <div className="h-screen w-screen flex flex-col">
          {currentPage?.showHeader && <Header />}
            <Routes>
                {pages.map((page, index) => (
                    <Route path={page.url} element={page.element} key={index} />
                ))}
            </Routes>
            <Footer/>
      </div>
  );
}

export default Home;

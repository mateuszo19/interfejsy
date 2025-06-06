import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import {PageInterface} from "./interfaces/link.interface";
import Locations from "./pages/Locations/Locations";

function Home() {

    const pages: PageInterface[] = [
        {
            url: "/",
            title: "Strona główka",
            highlighted: false,
            element: <LandingPage/>,
        },
        {
            url: "/maps",
            title: "Gdzie jesteśmy?",
            highlighted: false,
            element: <Locations/>,
        },
        {
            url: "/maps",
            title: "Umów lot",
            highlighted: true,
            element: <Locations/>,
        }
    ]

  return (
      <div className="h-screen w-screen flex flex-col bg-[#0F172A] ">
            <Header links={pages.map(page => ({
                url: page.url,
                title: page.title,
                highlighted: page.highlighted,
            }))}/>
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

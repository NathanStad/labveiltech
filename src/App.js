import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import NoPage from "./pages/NoPage";
import * as React from "react";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    let scroll;

    const initializeScroll = () => {
      const scrollContainer = document.querySelector("#root");
      if (scrollContainer) {
        scroll = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        });
      }
    };

    const handlePageChange = () => {
      if (scroll) {
        scroll.update(); // Update Locomotive Scroll
      } else {
        initializeScroll();
      }
    };

    // Initialize Locomotive Scroll
    initializeScroll();

    // Run handlePageChange on every location change
    handlePageChange();

    return () => {
      if (scroll) {
        scroll.destroy(); // Destroy Locomotive Scroll instance
        scroll = undefined;
      }
    };
  }, [location]); // Run effect on every route change

  return null; // This component doesn’t render anything
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/labveiltech" element={<Home />} />

          <Route path="/article/:id" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      <ScrollManager />
    </BrowserRouter>
  );
}

export default App;

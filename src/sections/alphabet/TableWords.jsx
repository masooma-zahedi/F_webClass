import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
// import SectionLayout from '../../layouts/SectionLayout';
// import BouncingBalls from './BouncingBalls';
import { Link, Outlet } from "react-router-dom"; 
import SunWords from './sunWords';
import BrokenGlass from './BrokenGlass';
// import AnotherComponent from './AnotherComponent';





export default function TableWords() {
    const [menuItems,setMenuItems] = useState([{ label: "کلمات آفتابگردان", path: "sunWords" },{ label: "جعبه شیشه ای ", path: "brokenGlass" },])
    const [basePath,setBasePath] = useState ('TableWords')
  return (
    <>
        <div>
          {/* زیرمنو */}
          <nav className="nav nav-pills mb-3">
            {menuItems.map((item, index) => (
              <Link key={index} className="nav-link text-warning" to={`/alphabet/${basePath}/${item.path}`}>
                {item.label}
              </Link>
            ))}
          </nav>
    
          {/* محتوای صفحات داخلی */}
          <Outlet />
        </div>
    
    {/* <BouncingBalls/> */}

    <Routes>
        <Route index element={<SunWords />} />
        <Route path="sunWords" element={<SunWords />} />
        <Route path="brokenGlass" element={<BrokenGlass />} />
    </Routes>
    </>
  );
}

import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import SectionLayout from '../../layouts/SectionLayout';
import BouncingBalls from './BouncingBalls';
import { Link, Outlet } from "react-router-dom"; 
// import AnotherComponent from './AnotherComponent';





export default function AlphabetRoutes() {
    const [menuItems,setMenuItems] = useState([{ label: "بالانس کلمات", path: "bouncingBalls" },])
    const [basePath,setBasePath] = useState ('gameRoom')
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
        <Route index element={<BouncingBalls />} />
        <Route path="bouncingBalls" element={<BouncingBalls />} />
    </Routes>
    </>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SectionLayout from "./layouts/SectionLayout";

import Home from "./pages/Home";
import EducationHome from "./sections/Education/EducationHome";
import Math from "./sections/Education/Math";
import Language from "./sections/Education/Language";
import NewsHome from "./sections/News/NewsHome";
import Politics from "./sections/News/Politics";
import Sports from "./sections/News/Sports";
import Tech from "./sections/News/Tech";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* بخش آموزش */}
          <Route
            path="education"
            element={
              <SectionLayout
                basePath="/education"
                menuItems={[
                  { label: "صفحه اصلی", path: "" },
                  { label: "ریاضیات", path: "math" },
                  { label: "زبان", path: "language" }
                ]}
              />
            }
          >
            <Route index element={<EducationHome />} />
            <Route path="math" element={<Math />} />
            <Route path="language" element={<Language />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SectionLayout from "./layouts/SectionLayout";

import Home from "./pages/Home";
import EducationHome from "./sections/word/EducationHome";
import Math from "./sections/word/Math";
import Language from "./sections/word/Language";
import NewsHome from "./sections/News/NewsHome";
import Politics from "./sections/News/Politics";
import Sports from "./sections/News/Sports";
import Tech from "./sections/News/Tech";
import SentenceObject from "./sections/word/SentenceObject";
import SentenceBuilder from "./sections/word/SentenceBuilder";
import DragDropQuiz from "./sections/word/DragDropQuiz";
import TypingQAImageSlider from "./sections/word/TypingQAImageSlider";
import { CardAlphaCompo } from "./sections/alphabet/CardAlphaCompo";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* بخش آموزش */}
          {/* Alphabet pages */}
          <Route
            path="alphabet"
            element={
              <SectionLayout
                basePath="/alphabet"
                menuItems={[
                  { label: "صفحه اصلی", path: "" },
                  { label: "کارت الفبا", path: "cardAlphaCompo" },
                  { label: "جمله سازی", path: "SentenceBuilder" },
                  { label: "کامل کردن جمله", path: "dragDropQuiz" },
                  { label: "تایپ جمله", path: "typingQAImageSlider" },
                  // { label: "زبان", path: "language" }
                ]}
              />
            }
          >
            <Route index element={<EducationHome />} />
            <Route path="cardAlphaCompo" element={<CardAlphaCompo />} />
            <Route path="sentenceObject" element={<SentenceObject />} />
            <Route path="sentenceBuilder" element={<SentenceBuilder />} />
            <Route path="dragDropQuiz" element={<DragDropQuiz />} />
            <Route path="typingQAImageSlider" element={<TypingQAImageSlider />} />
            <Route path="language" element={<Language />} />
          </Route>

          {/* word pages */}
          <Route
            path="word"
            element={
              <SectionLayout
                basePath="/word"
                menuItems={[
                  { label: "صفحه اصلی", path: "" },
                  { label: "جملات و مترادف ها ", path: "sentenceObject" },
                  { label: "جمله سازی", path: "SentenceBuilder" },
                  { label: "کامل کردن جمله", path: "dragDropQuiz" },
                  { label: "تایپ جمله", path: "typingQAImageSlider" },
                  // { label: "زبان", path: "language" }
                ]}
              />
            }
          >
            <Route index element={<EducationHome />} />
            <Route path="math" element={<Math />} />
            <Route path="sentenceObject" element={<SentenceObject />} />
            <Route path="sentenceBuilder" element={<SentenceBuilder />} />
            <Route path="dragDropQuiz" element={<DragDropQuiz />} />
            <Route path="typingQAImageSlider" element={<TypingQAImageSlider />} />
            <Route path="language" element={<Language />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  );
}












          {/* بخش آموزش */}
          {/* <Route
            path="word"
            element={
              <SectionLayout
                basePath="/word"
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
          </Route> */}

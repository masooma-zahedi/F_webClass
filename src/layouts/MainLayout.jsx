import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* هدر */}
      <header className="bg-success text-white">
        <nav className="navbar navbar-expand-lg navbar-dark container">
          <Link className="navbar-brand" to="/">Farsi Class</Link>

          {/* دکمه همبرگر */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu} // کنترل توسط React
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* منو */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Alphabet</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/word" onClick={() => setIsOpen(false)}>Word</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news" onClick={() => setIsOpen(false)}>Story</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* محتوای صفحه */}
      <main className="flex-fill container border border-danger my-4">
        <Outlet />
      </main>

      {/* فوتر */}
      <footer className="bg-success text-white text-center py-3 mt-auto">
        <small>© 2025 - تمام حقوق محفوظ است.</small>
      </footer>
    </div>
  );
}

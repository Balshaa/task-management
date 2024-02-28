import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Common
import Navbar from "./components/Navbar";
import Home from "./pages/commonPages/Home";
import About from "./pages/commonPages/About";
import Footer from "./components/Footer";
import Contact from "./pages/commonPages/Contact";
import Project from "./pages/commonPages/Projects";

//Admin
import AdminHome from "./pages/adminPages/AdminHome";
import AdminNavbar from "./pages/adminPages/AdminNavbar";
import UserList from "./pages/adminPages/UserManagement/UserList";
import ProjectList from "./pages/commonPages/ProjectList";
import ProjectListT from "./pages/adminPages/projectManagement/ProjectListT";
import ProjectDetail from "./pages/adminPages/projectManagement/ProjectDetail";
import TaskList from "./pages/adminPages/taskManagement/TaskList";

//Developer
import DeveloperHome from "./pages/developerPages/DeveloperHome";
import DeveloperNavbar from "./pages/developerPages/DeveloperNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Common Pages */}
          <Route
            path="/Project-Management-System"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/Contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          />
          <Route
            path="/About"
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          />
          <Route
            path="/Projects"
            element={
              <>
                <Navbar />
                <Project />
              </>
            }
          />

          {/* Admin Pages */}
          <Route
            path="/Admin/*"
            element={
              <>
                <AdminNavbar />
                <Routes>
                  <Route path="/" element={<AdminHome />} />
                  <Route path="/UserList" element={<UserList />} />
                  <Route path="/Projects" element={<ProjectListT />} />
                  <Route path="/ProjectDetail" element={<ProjectDetail />} />
                  <Route path="/Tasks" element={<TaskList />} />
                </Routes>
              </>
            }
          />

          {/* Developer Pages */}
          <Route
            path="/Developer/*"
            element={
              <>
                <DeveloperNavbar />
                <Routes>
                  <Route path="/" element={<DeveloperHome />} />
                </Routes>
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

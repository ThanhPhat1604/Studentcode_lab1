import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JobFinderPage from "../page/SearchPage";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <Router>
      <header className="w-full bg-white shadow-sm p-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Job Finder
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-8 text-lg">
          <Link to="/" className="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1">
            Find Jobs
          </Link>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
            Browse Companies
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-6">
          <Button className="text-gray-600 hover:text-indigo-600 transition">Login</Button>
          <Button className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition">
            Sign Up
          </Button>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<JobFinderPage />} />
      </Routes>
    </Router>
  );
}

export default Navbar;

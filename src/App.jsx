import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";

function App() {
  return (
    <Router>
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-blue-600">SuperGen3D</div>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-semibold">Home</Link>
          <Link to="/demo" className="text-gray-700 hover:text-blue-600 font-semibold">Demo</Link>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

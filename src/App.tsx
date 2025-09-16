import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import UseDebounce from './pages/UseDebounce';
import About from './pages/About';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import UseMemo from './pages/UseMemo';
import UseCallback from './pages/UseCallback';
import ReactMemo from './pages/ReactMemo';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/useDebounce" element={<UseDebounce />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/useCallback" element={<UseCallback />} />
          <Route path="/reactMemo" element={<ReactMemo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

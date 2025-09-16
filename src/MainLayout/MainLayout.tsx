import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="nav-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/useDebounce">useDebounce</Link>
        <Link to="/useMemo">useMemo</Link>
        <Link to="/useCallback">useCallback</Link>
        <Link to="/reactMemo">ReactMemo</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default MainLayout;

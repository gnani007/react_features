import { Link, Routes, Route, Navigate } from 'react-router-dom'
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import UseDebounce from './pages/UseDebounce'
import UseMemo from './pages/UseMemo'
import UseFetch from "./pages/UseFetch"
import UseCallback from './pages/UseCallback'
import ReactMemo from './pages/ReactMemo'
import { useAuth } from './context/AuthContext'
import UseReducer from './pages/UseReducer'
import Recursive from "./pages/Recursive"
import TodoList from "./pages/TodoList"
import PostSearch from './pages/PostSearch'
import './App.scss'
import HandleObjectData from './pages/HandleObjectData'
import ReactPortal from './pages/ReactPortal'
import UserHOC from './HOC/UserHOC'
import InfiniteScroll from './pages/InfiniteScroll'
import ForwardRef from './pages/ForwardRef'

function App() {

  const { login, logout, user } = useAuth()

  const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
    if (!user || user.role !== "Admin") {
      return <Navigate to="/" replace />
    } else {
      return children
    }
  }

  return (
    <div className='main-container'>
      <div className='user-info'>
        {user ? <div className='action-section'>Welcome {`${user.name}`}, {`${user.role}`} &nbsp; <button onClick={logout}>Logout</button></div> :
          <div className='action-section'>
            <button onClick={() => login(1)}>Login as Gnan (Admin)</button>&nbsp;&nbsp;
            <button onClick={() => login(2)}>Login as Brahmisha (User)</button>&nbsp;&nbsp;
            <button onClick={() => login(3)}>Login as Guest (Guest)</button>
          </div>}
      </div>
      <div className='nav-links'>
        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/useDebounce">UseDebounce</Link>
          <Link to="/handleObjData">Handle Object Data</Link>
          <Link to="/reactPortal">React Portal</Link>
          <Link to="/infiniteScroll">Infinite Scroll</Link>
          <Link to="/userHOC">HOC</Link>
          <Link to="/useFetch">UseFetch</Link>
          <Link to="/useCallback">UseCallback</Link>
          <Link to="/useMemo">UseMemo</Link>
          <Link to="/reactMemo">ReactMemo</Link>
          <Link to="/recursive">Recursive</Link>
          <Link to="/useReducer">UseReducer</Link>
          <Link to="/todoList">TodoList</Link>
          <Link to="/forwardRef">ForwardRef</Link>
          <Link to="/postSearch">PostSearch</Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/dashboard' element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
          <Route path="/handleObjData" element={<HandleObjectData />} />
          <Route path='/useDebounce' element={<UseDebounce />} />
          <Route path="/reactPortal" element={<ReactPortal />} />
          <Route path="/infiniteScroll" element={<InfiniteScroll />} /> 
          <Route path='/useFetch' element={<UseFetch />} />
          <Route path="/userHOC" element={<UserHOC />} />
          <Route path="/useCallback" element={<UseCallback />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/reactMemo" element={<ReactMemo />} />
          <Route path="/recursive" element={<Recursive />} />
          <Route path="/todoList" element={<TodoList />} />
          <Route path="/postSearch" element={<PostSearch />} />
          <Route path="/useReducer" element={<UseReducer />} />
          <Route path="/forwardRef" element={<ForwardRef />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

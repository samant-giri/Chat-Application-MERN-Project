import React, {lazy} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProtectedRoute from './Components/auth/ProtectedRoute'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Chat = lazy(() => import('./pages/Chat'))
const Groups = lazy(() => import('./pages/Groups'))
const NotFound = lazy(() => import('./pages/NotFound'))

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </Route>

        <Route path='/login' element={<ProtectedRoute user={!user} redirect='/'><Login/></ProtectedRoute>} />

        <Route path="*" element={ <NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Starter from './Components/Starter/Starter'
import Home from './Pages/Home'
import Watchlist from './Components/Watchlist/Watchlist'
import AddedLikes from './Components/AddedLikes/AddedLikes'
import Vote from './Components/Vote/Vote'
import ReviewsPage from './Pages/ReviewsPage'
import Messages from './Pages/Messages'
import Details from './Components/Details2/Details/Details'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { getUser } from './services/profileService'

import { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'

function App() {
    const { user } = useContext(AuthContext)

    return (
        <Router>
            <Navbar user={user} />
            <Routes>
                <Route path="/" element={<Starter />} />
                <Route
                    path="/home"
                    element={user ? <Home /> : <Navigate to="/login" />}
                />
                <Route
                    path="/reviews"
                    element={user ? <ReviewsPage /> : <Navigate to="/login" />}
                />
                <Route
                    path="/Vote"
                    element={user ? <Vote /> : <Navigate to="/login" />}
                />
                <Route
                    path="/watchlist"
                    element={user ? <Watchlist /> : <Navigate to="/login" />}
                />
                <Route
                    path="/addedlikes"
                    element={
                        user ? (
                            <AddedLikes user={user} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/messages"
                    element={user ? <Messages /> : <Navigate to="/login" />}
                />
                <Route
                    path="/Details/:media_type/:media_id"
                    element={<Details />}
                />
                <Route
                    path="/login"
                    element={user ? <Navigate to="/home" /> : <Login />}
                />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext"
import { logoutCall } from "../../apiCalls";
import { AiFillHome } from "react-icons/ai";
import { MdRateReview, MdHowToVote, MdLocalMovies } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { RiMovieFill } from "react-icons/ri";

import "./navbarStyles.scss"

function Navbar(props) {

  console.log(props)
  // props = user => addedmovies, email, name, password, profile, watched, id


  const [userDetails, setUserDetails] = useState()
  const { user, dispatch } = useContext(AuthContext)


  const handleClick = () => {
    logoutCall(dispatch)
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-watch-movie-popcorn-illustration-image_1244707.jpg" alt='logo' />
      </div>
      <span className="web-name">
        Entertainment <br /> Central
      </span>
      {user ? (
        <>
          <div className="menu-items">
            <Link className="link-style" to="/home" ><AiFillHome />  Home </Link>
            <Link className="link-style" to="/reviews" > <MdRateReview />  Reviews</Link>
            <Link className="link-style" to="/vote" > <MdHowToVote />  Vote </Link>
            <Link className="link-style" to="/messages" ><TiMessages />  Messages</Link>
            <Link className="link-style" to="/watchlist" > <MdLocalMovies />  Watchlist </Link>
            <Link className="link-style" to="/addedlikes" ><RiMovieFill />  Added Likes </Link>
          </div>
          <div className="profile">
            <img src={user.profile.thumbnail} alt={user.name.userName} />
            <span>{user.name.userName}</span>
          </div>
          <Link to="/login">
            <button className="sign-in" onClick={handleClick}>Log Out</button>
          </Link>
        </>
      ) : (
        <Link to="/login">
          <button className="sign-in">Login</button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar
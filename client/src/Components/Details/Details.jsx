import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Slide from "../Home/Slide";
import { useParams } from 'react-router-dom'
import Credits from "./Credits";
import Recommendations from "./Recommendations";


import { addMovieToList, getMediaDetails, getUser, removeFromList } from "../../services/profileService";
import { AuthContext } from "../../Context/AuthContext";

function Details() {
  const [mediaDetails, setMediaDetails] = useState();
  const [addButton, setAddButton] = useState()
  const [ movieInList, setMovieInList] = useState();
  const { user } = useContext(AuthContext)
  console.log(user)

  let { media_type, media_id } = useParams();


  useEffect(() => {
    async function getDetails() {
      const response = await getMediaDetails(media_type, media_id);
      setMediaDetails(response);
    }

    getDetails();
  }, [media_id, media_type]);

  useEffect(() => {
    async function checkLibrary() {
      const res = await getUser(user._id)
      console.log(res.addedMovies)
      const movieList = res.addedMovies.filter(e => { return (e.media_type === media_type && e.id == media_id)})
      setMovieInList(movieList)
      console.log("HERRRRREEEEE",movieList)
      if(movieList.length > 0){
        setAddButton(true)
      } else {
        setAddButton(false)
      }
    }
    checkLibrary()
  }, [media_id],[media_type])


  if (!mediaDetails) return <div>Loading...</div>;

  const handleClick = async () => {
    if(addButton === false){
      const add_details = {...mediaDetails, media_type}
      try{
        const res = await addMovieToList(user._id, add_details)
      }catch(err){
        console.log(err)
      }
    }
    if (addButton === true) {
      try{
        const res = await removeFromList(user._id, media_id, media_type)
      }catch(err){
        console.log(err)
      }
    }
    
    setAddButton(!addButton)
  }


  return (

    <>
      <Container>
        <BgImage bg={mediaDetails.poster_path} />
        <Contents>
          <PosterImg>
            <img
              src={mediaDetails.poster_path !== null ? `https://image.tmdb.org/t/p/w500${mediaDetails.poster_path}` : "/images/image_not_available.png"}
              alt="poster"
            />
          </PosterImg>
          <Info>
            <h1>{mediaDetails.original_title || mediaDetails.name}</h1>
            <TagButtons>
              {mediaDetails.genres.map(item => (<button>{item.name}</button>))}
            </TagButtons>
            <p>
              {mediaDetails.overview !== null ? mediaDetails.overview : `No details available`}
              <br />
              <br />
              Runtime: {mediaDetails.runtime || mediaDetails.episode_run_time} mins
            </p>
            <Ratings>
              <p>
                vote average: <span>{mediaDetails.vote_average}</span>
              </p>
              <p>
                popularity: <span>{mediaDetails.popularity}</span>
              </p>
            </Ratings>
            <AdditonalButtons>
              <button>Reviews</button>
              <button onClick={handleClick}>{addButton ? "Remove from list": "Add to list"}</button>
              <button>Add to Vote</button>
            </AdditonalButtons>
            <Credits media_id={media_id} media_type={media_type} />

          </Info>
        </Contents>
        <br />
      </Container>
      <Recommendations media_id={media_id} media_type={media_type} />
    </>
  );
}
const Container = styled.div`
  width: 100vw;
  padding: 0;
  margin: 0;
  background: black;
  z-index: -1;
  overflow: hidden;
  display: flex;
  margin-left: 0;
`;


const BgImage = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 1)
    )
    ,
    url(${props => `https://image.tmdb.org/t/p/original${props.bg}`});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  filter: blur(4px) brightness(50%);
`;


const Contents = styled.div`
  top:40px;
  position: relative;
  padding: 30px 25px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

const PosterImg = styled.div`
  padding: 20px 10px;
  margin: auto;
  img {
    border: 1px solid white;
    border-radius: 4px;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0%;
    img {
      width: 100%;
    }
  }
`;


const Info = styled.div`
  position: relative;
  width: 55%;
  margin: auto;
  padding: 10px;
  color: white;
  h1 {
    font-size: 45px;
    text-transform: capitalize;
    margin-top:20px;
  }
  p {
    font-size: 20px;
    padding-left: 15px;
    padding-top: 15px;
    line-height: 25px;
    letter-spacing: 1.1px;
    width: 80%;
  }
  button{
    display:flex;
    align-content:left;
    border:1px solid white;
    padding:15px;
    border-radius: 5px;
    margin-left:10px;
    margin-bottom:10px;
    font-size:18px;
    background-color:transparent;
    color: white;
    &:hover{
      background-color:white;
      color:black;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TagButtons = styled.div`
  padding: 10px;
  font-size: 18px;
  gap: 15px;
  display: flex;
  flex-wrap: wrap;
  button{
    border: 2px solid white;
    padding: 8px 12px;
    border-radius: 20px;
  }
`;


const Ratings = styled.div`
  padding-top: 0px;
  display: flex;
  p {
    font-size: 18px;
    text-transform: capitalize;
  }
  span {
    background-color: grey;
    padding: 6px 6px 0px 6px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    span {
      padding: 0;
    }
  }
`;

const AdditonalButtons = styled.div`
  display:flex;
  flex-direction:row;
`

export default Details; 
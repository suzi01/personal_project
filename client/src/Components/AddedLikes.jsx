import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";
import { getUser, removeFromList } from "../services/profileService"
import { AuthContext } from "../Context/AuthContext";

// get image from tmdb - https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg
function AddedLikes(props) {
  const [movies, setMovies] = useState()
  const { user } = useContext(AuthContext)

  
  useEffect(() =>{
    async function getLoggedUser() {
      const response = await getUser(user._id);
      setMovies(response.addedMovies);
  }

  getLoggedUser();
  },[movies])


  const handleClick = async (e) => {
      const media_id = e.target.name
      const media_type = e.target.value
      try{
        const res = await removeFromList(user._id, media_id, media_type)
      }catch(err){
        console.log(err)
      }
    }

  const renderCard = (card) => {
    return(<FilmCard>
      <Row>
        <Col md={6} sm={4} xs={4}>
          <FilmCard.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
          />
        </Col>
        <Col md={6} sm={8} xs={8}>
          <FilmCard.Body>
            <FilmCard.Title>{card.original_title}</FilmCard.Title>
            <FilmCard.Text>
            {card.overview.length > 200 ? `${card.overview.substring(0,200)}...`: card.overview}
            </FilmCard.Text>
            <CardButtons>
              <button>Add to Vote</button>
              <button name={card.id}
              value={card.media_type}onClick={(e)=>handleClick(e)}>Remove Like</button>
            </CardButtons>
          </FilmCard.Body>
        </Col>
      </Row>
    </FilmCard>)
  }

  return (
    <>
      <Container>
        <h1>Your Like List</h1>
        <Content>
          <Films>
          {movies && movies.map((item) => renderCard(item))}
          </Films>
        </Content>
      </Container>
    </>
  );
}
const Content = styled.div`
  padding-top:80px;
  display: flex;
  justify-content: center;
  margin:auto;
  padding-left:20px;
`;


const Container = styled.div`

  // top: 80px;
  background: linear-gradient(
    112.1deg,
    rgb(32, 38, 57) 11.4%,
    rgb(63, 76, 119) 70.2%
  );
  position:relative;
  min-height:100vh;
  height: 100%;
  background-size: cover;
  h1 {
    padding-top: 100px;
    text-align: left;
    padding-left: 4%;
    color: white;
  }

  @media(max-width: 768px){
  }
`;
const Films = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 15px;
`;
const Film = styled.div`
  padding: 10% 10px 0;
  margin-bottom: 0;/
  position: relative;
  img {
    width: 100%;
    box-shadow: 11px 1px 13px 0px rgba(0, 0, 0, 0.75);
    margin-bottom: 0px;
    border-radius: 5px;
  }
  p {
    color: white;
    position: relative;
    margin: 5px 0;
  }
  
`;
const FilmCard = styled(Card)`
  width:  540px;
  background-color: #FBFAF5;
  height: 415px;
  padding:10px 10px 15px 10px;
  image {
    height:100%;
    width: 100%;
  }
  div{
    p{
    padding-top: 20px;
  }
  }
`;

const CardButtons = styled.div`
  padding-top: 10%;
  bottom:0px;
  display: flex;
  button {
    margin-right: 10px;
    height: 60px;
    width: 100px;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    background-color: black;
    transition: transform 0.5s ease-in;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
`;
export default AddedLikes;
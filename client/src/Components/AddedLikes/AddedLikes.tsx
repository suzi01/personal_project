import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getUser, removeFromList } from "../../services/profileService"
import { AuthContext } from "../../Context/AuthContext";
import './addedLikesStyles.scss'


interface Movie{
  poster_path: any; 
  original_title: any; 
  overview: string; 
  id: string | undefined; 
  media_type: string | number | readonly string[] | undefined; 
}

// get image from tmdb - https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg
function AddedLikes(props: any) {
  const [movies, setMovies] = useState<Movie[]>([])
  const { user } = useContext(AuthContext)

  
  useEffect(() =>{
    async function getLoggedUser() {
      const response = await getUser(user._id);
      setMovies(response.addedMovies);
  }

  getLoggedUser();
  },[movies])


  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      const target = e.target as HTMLButtonElement;
      const media_id = target.name
      const media_type = target.value
      try{
        const res = await removeFromList(user._id, media_id, media_type)
      }catch(err){
        console.log(err)
      }
    }

  const renderCard = (card: { poster_path: any; original_title: any; overview: string; id: string | undefined; media_type: string | number | readonly string[] | undefined; }) => {
    return(<Card className="film-card">
      <Row>
        <Col md={6} sm={4} xs={4}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
          />
        </Col>
        <Col md={6} sm={8} xs={8}>
          <Card.Body>
            <Card.Title>{card.original_title}</Card.Title>
            <Card.Text>
            {card.overview.length > 200 ? `${card.overview.substring(0,200)}...`: card.overview}
            </Card.Text>
            <div className="card-buttons">
              <button>Add to Vote</button>
              <button name={card.id}
              value={card.media_type} 
              onClick={(e)=>handleClick(e)}>Remove Like</button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>)
  }

  return (
    <>
      <div className="container-div">
        <h1>Your Like List</h1>∂
        <div className="content-div">
          <div className="films">
          {movies && movies.map((item: any) => renderCard(item))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddedLikes;
import React, { useState } from 'react'
import styled from 'styled-components'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// for this to Worker, need to use multi search to get media type and id and then use the reviews route

const SelectionSection = (props) => {
  const {data} = props

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
          <ShowSelection>
            <Img src={`https://image.tmdb.org/t/p/original${data.poster_path}` }alt={data.title} />
            <Details>
              <h1>{data.title || data.original_title}</h1>
              <Info>
                <p>Date released: {data.release_date}</p>
                <Rating>
                  <p><span>{data.vote_average}</span>Vote Average</p>
                </Rating>
                <Rating>
                  <p><span>{data.vote_count}</span>Vote Count</p>
                </Rating>
                <h2>Plot </h2>
                <br />
                <p>{data.overview}</p>
              </Info>
            </Details>
          </ShowSelection>
        
  )
}

const Container = styled.div`
  position:relative;
  width:100vw;
  min-height:100%;
  background-color:#212F3C;
  disply:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  color:white;
`

const Content = styled.div`
  padding:10px;
  position:relative;
  ${'' /* background-color:red; */}
  top:100px;
  margin-bottom:140px
 
`

const SearchBar = styled.div`
  padding:10px;
  input{
    width:70%;
    height:35px;
    border:2px solid orange;
    border-radius:15px;
    margin-right:5px;
    background-color:transparent;
    color:white;
    padding: 0 10px;
  }
  button{
    height:35px;
    border:2px solid orange;
    border-radius: 8px;
    padding:0 5px;
    background-color:transparent;
    color:orange;
  }
`

const ReviewsSection = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  margin-top:35px;
`

const ReviewsNav = styled.div`
  flex:1;
  display:flex;
  flex-direction: column;
  gap:10px;
  
  button{
    border:1px solid orange;
    background-color:transparent;
    border-radius:15px;
    color:white;

  }
`

const ShowSelection = styled.div`
  flex:5;
  display:flex;
  flex-direction:row;
  padding: 0 20px;
  position:relative;

`

const Img = styled.img`
  position:relative;
  width:30%;
  height:auto;
  padding:30px 0; 
`

const Details = styled.div`
  padding-left: 20px;
  margin-top:20px;
  h1{
    color:white;
  }
`

const Info = styled.div`
  text-align:left;
  color:white;
  h2{
    padding-top:20px;
  }
  span{
    background-color:#0E8975;
    border: 2px solid white;
    padding:20px;
    width:30px;

    border-radius:50%;
    margin-right: 20px;
  }
  p{
    font-size:18px;
  }
`

const Rating = styled.div`
  margin-top:45px;
  margin-bottom: 20px;
  p{
    font-size:20px;
  }
`

const ReviewItems = styled.div`
  margin-top:15px;
  color:black;
  text-align:left;
  display: flex;
  flex-direction:column;
  padding: 20px 0;
`

const ReviewItem = styled.div`
width:80%;
  display: flex;
  padding:20px;
  color:white;
  font-weight:bold;
  font-size:15px;
  background: #566573 ;
  margin:auto;
  border:5px solid orange;
  border-radius: 20px;
  margin-bottom:20px;
  overflow-y: auto;
  
`

const CreatedDate = styled.div`
  display:flex;
  flex-direction:column;  
  font-size: 18px;
  line-height: 30px;
  padding: 0 15px;
  width: 100%;
  span{
    color: #183EC6;
  }
`

const UserDetails = styled.div`
  display:flex;
  flex-direction:column; 
  padding-right: 20px;
  width: 25%;
  text-align:center;
  font-size: 20px;


  span{
    background-color:green;
    padding:5px 10px;
    border-radius:50%
  }
  img{
    border-radius:50%;
    width:100%;
    padding-bottom: 20px;
  } 

`
export default SelectionSection

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import './ReviewsCollectedStyles.scss'

// for this to Worker, need to use multi search to get media type and id and then use the reviews route

interface Review {
  author:string,
  author_details:{
    name:string,
    username:string,
    avatar_path: string,
    rating:number
  },
  content:string,
  created_at:string,
  updated_at:string,
  url:string
}

const ReviewsCollected = (props: { data: any; }) => {
  console.log(props)


  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const {data} = props

  // this is an example of the review data: look in trello 

  const renderReview = (rev:Review) => {
    return(
      <div className='review-item'>
          <div className='user-details'>
            <img src={rev.author_details.avatar_path} alt={rev.author} />
            <p>{rev.author}</p>
            <p>Rating: <span>{rev.author_details.rating}</span></p>
          </div>
          <div className='created-date'>
            <p>{isReadMore ? `${rev.content.substring(0, 350)}` : rev.content}
              <span onClick={toggleReadMore}>
                {isReadMore ? "...read more" : " show less"}
              </span></p>
            <p>Created : {rev.created_at}</p>
          </div>
        </div>
    )
  }


  return (
    
      <div className='review-items'>
        {data && data.map((review: Review) => renderReview(review))}
      </div>
  )
}


export default ReviewsCollected

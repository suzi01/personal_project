import React, { useState } from 'react'
import styled from 'styled-components'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './SelectionSectionStyle.scss'

// for this to Worker, need to use multi search to get media type and id and then use the reviews route

const SelectionSection = (props) => {
  const {data} = props

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
          <div className='show-selection'>
            <img className='img' src={`https://image.tmdb.org/t/p/original${data.poster_path}` }alt={data.title} />
            <div className='details'>
              <h1>{data.title || data.original_title}</h1>
              <div className='info'>
                <p>Date released: {data.release_date}</p>
                <div className='rating'>
                  <p><span>{data.vote_average}</span>Vote Average</p>
                </div>
                <div className='rating'>
                  <p><span>{data.vote_count}</span>Vote Count</p>
                </div>
                <h2>Plot </h2>
                <br />
                <p>{data.overview}</p>
              </div>
            </div>
          </div>
        
  )
}

export default SelectionSection

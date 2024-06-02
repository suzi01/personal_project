import React, { useState, useEffect } from "react";
import Slide from "../../Home/Slide"


import { getRecommendations } from "../../../services/profileService";

import './RecommendationsStyle.scss'

function Recommendations(props: { media_id: any; media_type: any; }) {
  const [recommendations, setRecommendations] = useState();
  const {media_id, media_type} = props
    

    useEffect(() => {
        async function getMediaRecommendations() {
                const response = await getRecommendations(media_type, media_id);
                setRecommendations(response);
        }

        getMediaRecommendations();
    }, [ media_id, media_type]);

  
    if (!recommendations) return <div>Loading...</div>;



  return ( 
          <div className="slide-container">
            <Slide title={'Recommendations'} Images={recommendations}/>
          </div>
  );
}


// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color:black;
//   padding: 0;
//   h1 {
//     font-size: 30px;
//     text-align: left;
//     padding-left: 5%;
//   }
//   @media (max-width: 768px) {
//     h1 {
//       font-size: 1.7rem;
//     }
//   }
// `;

export default Recommendations; 
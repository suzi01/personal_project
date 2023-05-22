import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from './Slide'

import { getPopularMovie, getPopularTV} from '../../services/profileService'

function Popular() {
    const [popImages, setPopImages] = useState(null);

    useEffect(() => {
        async function getAllPopularImgs() {
            if (!popImages) {
                const movies = await getPopularMovie();
                const tele = await getPopularTV();
                const response = tele.concat(movies)
                setPopImages(response);
            }
        }

        getAllPopularImgs();
    }, [popImages]);

    return(<Slide title={"Popular"} Images={popImages} />)
  }

  export default Popular;
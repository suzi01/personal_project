import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from './Slide'

import { getTrending} from '../../services/profileService'

function Trending() {
    const [Images, setImages] = useState(null);

    useEffect(() => {
        async function getAllTrending() {
            if (!Images) {
                const response = await getTrending();
                setImages(response);
            }
        }

        getAllTrending();
    }, [Images]);

    return(<Slide title={"Trending"} Images={Images} />)
  }


export default Trending;
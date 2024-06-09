import React from 'react'
import styled from 'styled-components'

const MissingPoster = (props) => {
    return (
        <Container key={props.title}>
            <img src="/images/no-poster-available.jpg" alt={props.title} />
            <p>{props.title}</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
    }
    p {
        text-align: center;
        font-size: 20px;
        color: white;
    }
`

export default MissingPoster

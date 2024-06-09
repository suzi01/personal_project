import React from 'react'
import './MissingPoster.style.scss'

const MissingPoster = (props: { title: string | undefined }) => {
    return (
        <div className="container" key={props.title}>
            <img src="/images/no-poster-available.jpg" alt={props.title} />
            <p>{props.title}</p>
        </div>
    )
}

export default MissingPoster

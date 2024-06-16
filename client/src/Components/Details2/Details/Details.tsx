import React, { useState, useEffect, useContext } from 'react'

import { useParams } from 'react-router-dom'
import Credits from '../Credits/Credits'
import Recommendations from '../Recommendations/Recommendations'

import {
    addMovieToList,
    getMediaDetails,
    getUser,
    removeFromList,
} from '../../../services/profileService'

import { AuthContext } from '../../../Context/AuthContext'

import './Details.styles.scss'

interface Genre {
    id: number
    name: string
}

interface MediaDetails {
    poster_path: string
    episode_run_time?: number
    genres: [Genre]
    vote_average: number
    original_title?: string
    name?: string
    popularity: number
    overview: string
    runtime?: number
}

function Details() {
    const [mediaDetails, setMediaDetails] = useState<MediaDetails>()
    const [addButton, setAddButton] = useState<boolean>()
    const [movieInList, setMovieInList] = useState()
    const { user } = useContext(AuthContext)

    let { media_type, media_id } = useParams()

    useEffect(() => {
        async function getDetails() {
            const response = await getMediaDetails(media_type, media_id)
            console.log(response)
            setMediaDetails(response)
        }

        getDetails()
    }, [media_id, media_type])

    useEffect(() => {
        async function checkLibrary() {
            const res = await getUser(user._id)
            const movieList = res.addedMovies.filter(
                (e: {
                    media_type: string | undefined
                    id: string | undefined
                }) => {
                    return e.media_type === media_type && e.id == media_id
                }
            )
            setMovieInList(movieList)
            if (movieList.length > 0) {
                setAddButton(true)
            } else {
                setAddButton(false)
            }
            console.log(mediaDetails)
        }
        checkLibrary()
    }, [media_id, media_type])

    if (!mediaDetails) return <div>Loading...</div>

    const handleClick = async () => {
        if (addButton === false) {
            const add_details = { ...mediaDetails, media_type }
            try {
                const res = await addMovieToList(user._id, add_details)
            } catch (err) {
                console.log(err)
            }
        }
        if (addButton === true) {
            try {
                const res = await removeFromList(user._id, media_id, media_type)
            } catch (err) {
                console.log(err)
            }
        }

        setAddButton(!addButton)
    }

    const backgroundImage = `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 10%,
        rgba(0, 0, 0, 1)
    ),url(https://image.tmdb.org/t/p/original${mediaDetails.poster_path}})`

    return (
        <>
            <div className="details-container">
                <div className="bg-image" style={{ backgroundImage }}></div>
                <div className="contents">
                    <div className="poster-img">
                        <img
                            src={
                                mediaDetails.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${mediaDetails.poster_path}`
                                    : '/images/image_not_available.png'
                            }
                            alt="poster"
                        />
                    </div>
                    <div className="info">
                        <h1>
                            {mediaDetails.original_title || mediaDetails.name}
                        </h1>
                        <div className="tag-buttons">
                            {mediaDetails.genres.map((item) => (
                                <button key={item.id}>{item.name}</button>
                            ))}
                        </div>
                        <p>
                            {mediaDetails.overview
                                ? mediaDetails.overview
                                : 'No details available'}
                            <br />
                            <br />
                            Runtime:{' '}
                            {mediaDetails.runtime ||
                                mediaDetails.episode_run_time}{' '}
                            mins
                        </p>
                        <div className="ratings">
                            <p>
                                vote average:{' '}
                                <span>{mediaDetails.vote_average}</span>
                            </p>
                            <p>
                                popularity:{' '}
                                <span>{mediaDetails.popularity}</span>
                            </p>
                        </div>
                        <div className="additional-buttons">
                            <button>Reviews</button>
                            <button onClick={handleClick}>
                                {addButton ? 'Remove from list' : 'Add to list'}
                            </button>
                            <button>Add to Vote</button>
                        </div>
                        <Credits media_id={media_id} media_type={media_type} />
                    </div>
                </div>
                <br />
            </div>
            <Recommendations media_id={media_id} media_type={media_type} />
        </>
    )
}

export default Details

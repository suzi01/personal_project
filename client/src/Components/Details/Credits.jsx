import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import MissingCredit from './MissingCredit'
import MissingCredit from '../Details2/MissingCredit/MissingCredit'
import { getMediaCredits } from '../../services/profileService'

function Credits(props) {
    const [credits, setCredits] = useState()
    const { media_id, media_type } = props

    useEffect(() => {
        async function getAllCredits() {
            const response = await getMediaCredits(media_type, media_id)
            setCredits(response)
        }

        getAllCredits()
    }, [credits, media_id, media_type])

    const renderCard = (credit) => (
        <CastCard>
            {credit.profile_path !== null ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                    alt={credit.original_name}
                />
            ) : (
                <MissingCredit title={credit.original_name} />
            )}

            <p>
                {credit.original_name}
                <br />
                as
                <br />
                {credit.character}
            </p>
        </CastCard>
    )

    if (!credits) return <div>Loading...</div>
    return (
        <CastCards>
            {credits.length > 0 && credits.map((credit) => renderCard(credit))}
        </CastCards>
    )
}

const CastCards = styled.div`
    padding-top: 10px;
    display: flex;
    align-content: center;
    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`

const CastCard = styled.div`
    text-align: center;
    img {
        width: 70%;
        border-radius: 8px;
    }
    p {
        text-align: center;
    }

    @media (max-width: 768px) {
        img {
            padding-top: 5px;
            width: 50%;
        }
        p {
            padding-left: 10%;
        }
    }
`

export default Credits

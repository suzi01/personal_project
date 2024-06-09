import React, { useState, useEffect } from 'react'
import MissingCredit from '../MissingCredit/MissingCredit'
import { getMediaCredits } from '../../../services/profileService'

import './Credits.style.scss'

interface Credit {
    profile_path: null | string
    original_name: string
    character: string
}

function Credits(props: { media_id: any; media_type: string }) {
    const [credits, setCredits] = useState<Credit[]>([])
    const { media_id, media_type } = props

    useEffect(() => {
        async function getAllCredits() {
            const response = await getMediaCredits(media_type, media_id)
            setCredits(response)
        }

        getAllCredits()
    }, [credits, media_id, media_type])

    const renderCard = (credit: Credit) => (
        <div className="cast-card">
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
        </div>
    )

    if (!credits) return <div>Loading...</div>
    return (
        <div className="cast-cards">
            {credits.length > 0 &&
                credits.map((credit: any) => renderCard(credit))}
        </div>
    )
}

export default Credits

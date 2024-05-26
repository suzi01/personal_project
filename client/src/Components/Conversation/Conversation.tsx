import React, { useEffect, useState } from 'react'
import { getUser } from '../../services/profileService'

import "./conversationStyles.scss"


interface Movie {
  large:string,
  movieId: number,
  movieTitle: string,
  _id:string,
  rating: number
}

interface User {
  addedMovies:string[],
  email:string,
  name: {
    userName:string
  },
  profile:{
    thumbnail:string,
    _id:string
  },
  watched:Movie[]
  _id:string
}

interface Conversation {
  createdAt:string,
  members: string[],
  updatedAt:string,
  _id:string
}

interface props {
  conversation:Conversation,
  currentUser: User
}


const Conversation = ({conversation, currentUser}:props) => {


  const [user, setUser] = useState<User| null>(null)
  useEffect(() => {
    console.log(conversation)
    const otherId = conversation.members.find((m: string) => m !== currentUser._id) as string

    const getOtherUser = async ():Promise<void> => {
      try{
        const res = await getUser(otherId)
        setUser(res)
      }catch(err){
        console.log(err)
      }
      
    }
    getOtherUser()
  }, [currentUser, conversation])

  
  if (!user) return <div>Loading...</div>;
  
  return (
        <div className='conversation'>
          <div className='conversation-details'>
            <img src={user.profile.thumbnail} alt={user.name.userName} />
            <span>{user.name.userName}</span>
          </div>
        </div>
  )
}




export default Conversation
import React, { useEffect, useState } from 'react'
// @ts-ignore
import { getUser } from '../../services/profileService'

interface chatSectionProps{
  message:any;
  own:any;
  chat:any;
  user: any;
}

const ChatSection: React.FC<chatSectionProps> = ({ message, own, chat, user }) => {
  const [other, setOther] = useState(null)

  useEffect(() => {
    const otherId = chat.members.find((m: any) => m !== user._id)

    const getOtherUser = async () => {
      try{
        const res = await getUser(otherId)
        setOther(res)
      }catch(err){
        console.log(err)
      }
      
    }
    getOtherUser()
  }, [chat])


  if (!other) return <div>Loading...</div>;
  return (
    <>
      <div className={`outer-div ${own ? 'own' : ''}`}>
        <div className={`sent-messages ${own ? 'own' : ''}`}>
          <img src={own ? user.profile.thumbnail : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fparrotprint.com%2Fblog%2Fportrait-photography-wonder-human-face-2%2F&psig=AOvVaw1_A5k9Eke47Zn5MouHMwvB&ust=1710178644665000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDJ74ae6oQDFQAAAAAdAAAAABAE"} alt=""></img>
          <p>{message.text}</p>
        </div>
        <div className='message-time'>
          <p>{message.createdAt}</p>
        </div>
      </div>
    </>



  )
}
export default ChatSection;
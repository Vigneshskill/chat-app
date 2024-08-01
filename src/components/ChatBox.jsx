import React from 'react'
import Message from './Message'

const ChatBox = () => {

    const message =[
        {
            id:1,
            text: 'Hello, how are you?',
            name:"mr x",
        },
        {
            id:2,
            text: 'I am fine, thank you. How about you?',
            name:"mr y",
        },
        {
            id:3,
            text: 'I am fine, thank you. How about you?',
            name:"mr z",
        },
    ]

  return (
    <div className='pb-44 pt-20 containerWrap'>
      {message.map(message =>(
        <Message key={message.id} message={message}/>
      ))}
    </div>
  )
}

export default ChatBox

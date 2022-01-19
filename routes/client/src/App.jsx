import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';

export default function App() {

  const [message,setMessage] = useState('');

  useEffect(() => {
    const socket = io.connect('/');
    socket.on('msg',function(msg){
      setMessage(msg);
    });
  }, [])

  return (
    <div>
      <h2>Socket IO</h2>
      <h6>From Server {message} </h6>
    </div>
  )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  return (
    <div>
      <Mailbox unreadMessages={messages} />
      <Mailbox unreadMessages={[]} />
    </div>
  );
}


export default App

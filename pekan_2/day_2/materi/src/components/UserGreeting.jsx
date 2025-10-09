import React from 'react';

function UserGreeting() {
  return <h1>Selamat datang kembali!</h1>;
}

function GuestGreeting() {
  return <h1>Silakan masuk.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Greeting;
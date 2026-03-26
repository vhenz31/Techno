import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import SignIn from './signin';

function App() {
  const [route, setRoute] = useState(() => window.location.hash.replace('#','') || '/');

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#','') || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (route === '/signin' || route === '/sign-in' || route === '/sign') return <SignIn />;
  return <LandingPage />;
}

export default App;

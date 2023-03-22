import React from 'react';
import { Spotify_Black } from '../images';
import { loginUrl } from '../spotify';

import './Login.css'

function Login() {
  return (
    <div className='login'>
      <img src={Spotify_Black} alt='' className='logo' />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;

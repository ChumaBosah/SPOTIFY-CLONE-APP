import React from 'react';
import {BsSearch} from 'react-icons/bs'
import './Header.css'


function Header() {
  return (
    <div className='header'>
      <div className='header-search'>
    <BsSearch />
    <input type={'search'} placeholder={'Search for artist, songs and ...'} id='input' />
    </div>
    <div className='shortcuts'>
    <h3 id='shortcuts'>Shortcuts</h3>
    </div>
    </div>
  );
}

export default Header;

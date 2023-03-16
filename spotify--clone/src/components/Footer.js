import React from 'react';
import './Footer.css'
import {BsRepeat} from 'react-icons/bs';
import {BsFillSkipBackwardFill} from 'react-icons/bs';
import {BsPlayCircleFill} from 'react-icons/bs';
import {BsSkipForwardFill} from 'react-icons/bs';
import {CiShuffle} from 'react-icons/ci';
import {BsVolumeDown} from 'react-icons/bs'
import {RxSlider} from 'react-icons/rx'
import {BsVolumeUp} from 'react-icons/bs'
import {RiPlayListLine} from 'react-icons/ri'
import { Sucka } from '../images';


function Footer() {
  return (
    <div className='footer'>
     <div className='footer-left'>
     <img src={Sucka} className='album-logo' />
     <div className='song-info'>
        <h4>Sucka or Sum</h4>
        <p>Rae Sremmurd</p>
     </div>
     </div>
     <div className='footer-center'>
     <div className='footer-icon'>
      <BsRepeat  id='repeat'/>
      <BsFillSkipBackwardFill  id='previous'/>
      <BsPlayCircleFill  id='play'/>
      <BsSkipForwardFill id='next'/>
      <CiShuffle  id='shuffle'/>
      </div>
     </div>
     <div className='footer-right'>
     <div className='right-icons'>
     <RiPlayListLine id='list'/>
      <BsVolumeDown id='down'/>
      <RxSlider id='slide'/>
      <BsVolumeUp id='up'/>
     </div>
     </div>
    </div>
  );
}

export default Footer;

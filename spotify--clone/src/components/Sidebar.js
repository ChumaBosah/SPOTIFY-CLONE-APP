import React from 'react';
import './Sidebar.css'
import { Spotify_Black } from '../images';
import SidebarOption from './SidebarOption';
import {BiHomeAlt} from 'react-icons/bi'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlineExplore} from 'react-icons/md'
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
   <img src= {Spotify_Black } className='logo' /> 
   <SidebarOption Icon={BiHomeAlt} title='Home' />
   <SidebarOption Icon={BiTrendingUp} title='Trend' />
   <SidebarOption Icon={MdOutlineExplore} title='Feed' />
   <br />
   <small className='side-title'>Discover</small>
   <hr />
   {playlists?.items?.map(playlist => (
    <SidebarOption title={playlist.name} />
   ))}

    </div>
  );
}

export default Sidebar;

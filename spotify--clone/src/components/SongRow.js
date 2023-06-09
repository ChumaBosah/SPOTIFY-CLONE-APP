import React from 'react';
import './SongRow.css';


function SongRow({ track, playSong}) {

    console.log(track);

  return (
    <div className='song-row' onClick={() => playSong(track.id)}>
      <img className='row-album' src={track.album.images[0].url} alt='' />
      <div className='row-info'>
        <h1>{track.name}</h1>
        <p>
            {track.artists.map((artist) => artist.name).join(", ")} -{" "}
            {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;

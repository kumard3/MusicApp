import React from 'react'

function Player({song}) {
    return (
        <div className="player" >

            {song.map((song) => (

                <div className="card-content">
                <iframe src={song.audio} allowfullscreen ></iframe>
   
                <h1> {song.name} </h1>
                  
                </div>
              ))}  
          
        </div>
    )
}

export default Player

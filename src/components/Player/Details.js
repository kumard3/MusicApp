import React from "react";

function Details(props) {
  return (
    <div className="c-player--details">
      <h3 className="details-title">{props.song.name}</h3>
    </div>
  );
}

export default Details;

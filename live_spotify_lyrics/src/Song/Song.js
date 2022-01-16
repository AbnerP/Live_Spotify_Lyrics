import React from "react";
import "./Song.css";

function Song({ title, artist, image }) {
  return (
    <div className="song">
      <img
        className="song__albumWork"
        src={image}
        width="200px"
        alt={``}
      />
      <div className="song__info">
        <h1 className="song__title">{title}</h1>
        <h2 className="song__artist">{artist}</h2>
      </div>
    </div>
  );
}

export default Song;

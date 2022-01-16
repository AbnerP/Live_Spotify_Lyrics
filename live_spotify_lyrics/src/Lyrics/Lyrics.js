import React, { useEffect, useState } from "react";
import {
  getCurrentlyPlayingTrack,
  getHashParams,
  getSongLyrics,
} from "../utils";
import { trackPromise } from 'react-promise-tracker';
import "./Lyrics.css";
import Song from "../Song/Song";

function Lyrics() {
  const [lyrics, setLyrics] = useState([]);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getNowPlaying(() => {});
  }, []);

  const getNowPlaying = (cb) => {
    const params = getHashParams();
    if (params.access_token) {
    
        trackPromise(
            getCurrentlyPlayingTrack(params.access_token).then((song) => {
              getSongLyrics(song.name, song.artists[0].name).then((res) => {
                setImage(song.album.images[0].url);
                setTitle(song.name);
                setArtist(song.artists[0].name);
                setLyrics(res.lyrics);
              })
            })
        );
    } else {
      console.warn("Error fetching currently playing track");
    }
  };

  return (
    <div className="lyrics">
      <button className="lyrics__updateBTN" onClick={getNowPlaying} >Update Song</button>

      <Song title={title} artist={artist} image={image}/>

      {lyrics.map((line, i) => {
        if (i !== lyrics.length - 2) {
          return <div className="lyrics__line" key={i}>{line}</div>;
        }
        return null;
      })}
      
    </div>
  );
}

export default Lyrics;

import axios from "axios";
const spotifyApiURL = "https://api.spotify.com/v1/";

export const getCurrentlyPlayingTrack = async (access_token) => {
  const res = await axios.get(spotifyApiURL + "me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return res.data.item;
};

export const getSongLyrics = async (song, artist) => {
  const res = await axios.post("http://localhost:8888/song_lyrics", {
    title: song,
    artist: artist,
  });
  return res.data;
};

export const getHashParams = () => {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

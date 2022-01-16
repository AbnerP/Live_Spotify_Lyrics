import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoadingSpinner from "./Loading Spinner/LoadingSpinner";
import Login from "./Login/Login";
import Lyrics from "./Lyrics/Lyrics";

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress && <LoadingSpinner />;
};

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Live Spotify Lyrics</h1>
      <div className="app__routesContainer">
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/login" />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/lyrics" element={<Lyrics />} />
          </Routes>
        </BrowserRouter>
      </div>
      <LoadingIndicator />
    </div>
  );
}

export default App;

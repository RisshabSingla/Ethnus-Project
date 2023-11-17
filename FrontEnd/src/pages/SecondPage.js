import AudioPlayer from "../components/SecondPage/AudioPlayer/AudioPlayer";
import LeftColumn from "../components/SecondPage/LeftColumn";
import NavBar from "../components/SecondPage/NavBar";
import RightColumn from "../components/SecondPage/RightColumn";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function SecondPage({ loggedInUser, loggedInID }) {
  const navigate = useNavigate();
  const [userSettings, setUserSettings] = useState([]);
  const [clicked, setClicked] = useState("1");
  const [currPlaying, setCurrPlaying] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recommendedPodcasts, setRecommendedPodcasts] = useState([]);
  const [top10Podcasts, setTop10Podcasts] = useState([]);
  const [userFavourites, setUserFavourites] = useState([]);

  function setClickedItem(id) {
    setClicked(id);
  }
  axios.defaults.headers.common["x-auth-token"] = `${loggedInUser}`;

  useEffect(() => {
    async function getAllFavourites() {
      try {
        const res = await axios.get(
          "http://ethnus-project-backend-3ou9.onrender.com/api/podcast/like"
        );
        setUserFavourites(res.data.data);
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    }
    getAllFavourites();
  }, []);

  // User Settings
  useEffect(() => {
    async function getAllSettings() {
      try {
        const res = await axios.get(
          `http://ethnus-project-backend-3ou9.onrender.com/api/users/${loggedInID}`
        );
        console.log(res.data);
        setUserSettings(res.data.data);
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    }
    getAllSettings();
  }, []);

  // Recommended Podcasts
  useEffect(() => {
    async function getAllRecommended() {
      try {
        const res = await axios.get(
          "http://ethnus-project-backend-3ou9.onrender.com/api/podcast/recommended"
        );
        setRecommendedPodcasts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getAllRecommended();
  }, []);

  // Top10Podcasts
  useEffect(() => {
    async function getTop10Podcasts() {
      const res = await axios.get(
        "http://ethnus-project-backend-3ou9.onrender.com/api/podcast/top10"
      );
      setTop10Podcasts(res.data.data);
    }
    getTop10Podcasts();
  }, []);

  return (
    <>
      {loggedInUser !== "" ? "" : navigate("/", { replace: true })}
      <div className=" bg-gradient-to-r from-blue-950 to-neutral-950">
        <NavBar userSettings={userSettings} setClicked={setClicked} />
        <div className="flex">
          <div className="fixed h-screen">
            <LeftColumn clicked={clicked} setClickedItem={setClickedItem} />
          </div>
          <div>
            <RightColumn
              current={clicked}
              setCurrPlaying={setCurrPlaying}
              currPlaying={currPlaying}
              trackIndex={trackIndex}
              setTrackIndex={setTrackIndex}
              setIsPlaying={setIsPlaying}
              userFavourites={userFavourites}
              setUserFavourites={setUserFavourites}
              recommendedPodcasts={recommendedPodcasts}
              top10Podcasts={top10Podcasts}
              userSettings={userSettings}
            />
          </div>
        </div>
        <div className="sticky inset-x-0 bottom-0 font-bold	font-serif text-lg  text-slate-50 text-center flex justify-center	backdrop-blur-sm">
          <div className={currPlaying.length === 0 ? "hidden" : ""}>
            <AudioPlayer
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              tracks={currPlaying}
              trackIndex={trackIndex}
              setTrackIndex={setTrackIndex}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondPage;

import AudioPlayer from "../components/SecondPage/AudioPlayer/AudioPlayer";
import LeftColumn from "../components/SecondPage/LeftColumn";
import NavBar from "../components/SecondPage/NavBar";
import RightColumn from "../components/SecondPage/RightColumn";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

// const Alltracks = [
//   {
//     name: "Apna Bale Le",
//     artist: "Trinix ft Rushawn",
//     img: "https://ik.imagekit.io/exu18jfr4/img.jpg?updatedAt=1699356626542",
//     podcast:
//       "https://ik.imagekit.io/exu18jfr4/That_All_Men_Be_Saved_God_s_Desire_and_Our_Role_Part_166928.mp3?updatedAt=1699356823539",
//   },
//   {
//     name: "Chaand_Baaliyan",
//     podcast: "./music/2.mp3",
//     artist: "Trinix ft Rushawn",
//     img: "",
//   },
//   {
//     name: "Apna Bale Le",
//     artist: "Trinix ft Rushawn",
//     img: "./images/3.jpeg",
//     podcast: "./music/2.mp3",
//   },
//   {
//     name: "Chaand_Baaliyan",
//     podcast: "./music/2.mp3",
//     artist: "Trinix ft Rushawn",
//     img: "./images/3.jpeg",
//   },
//   {
//     name: "Apna Bale Le",
//     artist: "Trinix ft Rushawn",
//     img: "./images/3.jpeg",
//     podcast: "./music/2.mp3",
//   },
//   {
//     name: "Chaand_Baaliyan",
//     podcast: "./music/2.mp3",
//     artist: "Trinix ft Rushawn",
//     img: "./images/3.jpeg",
//   },

//   // ...
// ];

function SecondPage({ loggedInUser, setLoggedInUser }) {
  const navigate = useNavigate();
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
  // console.log(loggedInUser);
  axios.defaults.headers.common["x-auth-token"] = `${loggedInUser}`;

  useEffect(() => {
    async function getAllFavourites() {
      try {
        const res = await axios.get("http://localhost:8080/api/podcast/like");
        // console.log(res.data.data);
        setUserFavourites(res.data.data);
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    }
    getAllFavourites();
  }, []);

  // Recommended Podcasts
  useEffect(() => {
    async function getAllRecommended() {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/podcast/recommended"
        );
        console.log(res.data.data);
        setRecommendedPodcasts(res.data.data);
      } catch (err) {
        console.log(err);
      }
      // console.log(res.data.data);
    }
    getAllRecommended();
  }, []);

  // Top10Podcasts
  useEffect(() => {
    async function getTop10Podcasts() {
      const res = await axios.get("http://localhost:8080/api/podcast/top10");
      // console.log(res.data.data);
      setTop10Podcasts(res.data.data);
    }
    getTop10Podcasts();
  }, []);

  // console.log("loggedIn:", loggedInUser);
  return (
    <>
      {loggedInUser !== "" ? "" : navigate("/", { replace: true })}
      <div className=" bg-gradient-to-r from-blue-950 to-neutral-950">
        <NavBar
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
          setClicked={setClicked}
        />
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

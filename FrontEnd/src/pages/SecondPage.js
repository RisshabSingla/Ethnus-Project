import AudioPlayer from "../components/SecondPage/AudioPlayer/AudioPlayer";
import LeftColumn from "../components/SecondPage/LeftColumn";
import NavBar from "../components/SecondPage/NavBar";
import RightColumn from "../components/SecondPage/RightColumn";
import { useState } from "react";

const Alltracks = [
  {
    name: "Apna Bale Le",
    artist: "Trinix ft Rushawn",
    img: "https://ik.imagekit.io/exu18jfr4/img.jpg?updatedAt=1699356626542",
    podcast:
      "https://ik.imagekit.io/exu18jfr4/That_All_Men_Be_Saved_God_s_Desire_and_Our_Role_Part_166928.mp3?updatedAt=1699356823539",
  },
  {
    name: "Chaand_Baaliyan",
    podcast: "./music/2.mp3",
    artist: "Trinix ft Rushawn",
    img: "",
  },
  {
    name: "Apna Bale Le",
    artist: "Trinix ft Rushawn",
    img: "./images/3.jpeg",
    podcast: "./music/2.mp3",
  },
  {
    name: "Chaand_Baaliyan",
    podcast: "./music/2.mp3",
    artist: "Trinix ft Rushawn",
    img: "./images/3.jpeg",
  },
  {
    name: "Apna Bale Le",
    artist: "Trinix ft Rushawn",
    img: "./images/3.jpeg",
    podcast: "./music/2.mp3",
  },
  {
    name: "Chaand_Baaliyan",
    podcast: "./music/2.mp3",
    artist: "Trinix ft Rushawn",
    img: "./images/3.jpeg",
  },

  // ...
];

function SecondPage() {
  const [clicked, setClicked] = useState("1");
  // const [tracks, setTracks] = useState(Alltracks);
  const [currPlaying, setCurrPlaying] = useState([]);

  function setClickedItem(id) {
    setClicked(id);
  }
  return (
    <div className=" bg-gradient-to-r from-blue-950 to-neutral-950">
      <NavBar />
      <div className="flex">
        <div className="fixed h-screen">
          <LeftColumn clicked={clicked} setClickedItem={setClickedItem} />
        </div>
        <div>
          <RightColumn
            current={clicked}
            setCurrPlaying={setCurrPlaying}
            currPlaying={currPlaying}
          />
        </div>
      </div>
      <div className="sticky inset-x-0 bottom-0 font-bold	font-serif text-lg  text-slate-50 text-center flex justify-center	backdrop-blur-sm">
        <div className={currPlaying.length === 0 ? "hidden" : ""}>
          {/* {currPlaying.length === 0 ? (
            " "
          ) : ( */}
          <AudioPlayer tracks={currPlaying} />
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default SecondPage;

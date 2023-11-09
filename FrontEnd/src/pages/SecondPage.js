import AudioPlayer from "../components/SecondPage/AudioPlayer/AudioPlayer";
import LeftColumn from "../components/SecondPage/LeftColumn";
import NavBar from "../components/SecondPage/NavBar";
import RightColumn from "../components/SecondPage/RightColumn";
import { useState } from "react";

const tracks = [
  {
    title: "Apna Bale Le",
    src: "./music/1.mp3",
    author: "Trinix ft Rushawn",
    thumbnail: "",
  },
  {
    title: "Chaand_Baaliyan",
    src: "./music/2.mp3",
    author: "Trinix ft Rushawn",
    thumbnail: "./images/3.jpeg",
  },
  // ...
];

function SecondPage() {
  const [clicked, setClicked] = useState("1");
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
          <RightColumn current={clicked} />
        </div>
      </div>
      <div className="sticky inset-x-0 bottom-0 font-bold	font-serif text-lg  text-slate-50 text-center flex justify-center	backdrop-blur-sm">
        <div>{tracks.length === 0 ? " " : <AudioPlayer tracks={tracks} />}</div>
      </div>
    </div>
  );
}

export default SecondPage;

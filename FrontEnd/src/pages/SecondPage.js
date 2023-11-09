import AudioPlayer from "../components/SecondPage/AudioPlayer/AudioPlayer";
import LeftColumn from "../components/SecondPage/LeftColumn";
import RightColumn from "../components/SecondPage/RightColumn";
import { useState } from "react";

function SecondPage() {
  const [clicked, setClicked] = useState("1");
  function setClickedItem(id) {
    setClicked(id);
  }
  return (
    <div className=" bg-gradient-to-r from-blue-950 to-neutral-950">
      <div className="flex">
        <div className="fixed h-screen">
          <LeftColumn clicked={clicked} setClickedItem={setClickedItem} />
        </div>
        <div>
          <RightColumn current={clicked} />
        </div>
      </div>
      <div className="sticky inset-x-0 bottom-0 p-3 font-bold	font-serif text-lg  text-slate-50 text-center flex justify-center	backdrop-blur-sm">
        <div>
          <AudioPlayer />
        </div>
      </div>
    </div>
  );
}

export default SecondPage;

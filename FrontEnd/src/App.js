import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState("1");
  function setClickedItem(id) {
    setClicked(id);
  }
  return (
    <div className=" bg-gradient-to-r from-blue-950 to-neutral-950">
      <div className="flex flex-row gap-1">
        <div className="fixed h-screen">
          <LeftColumn clicked={clicked} setClickedItem={setClickedItem} />
        </div>
        <div className="ml-[166px] lg:ml-[208px]	 ">
          <RightColumn />
        </div>
      </div>
    </div>
  );
}

export default App;

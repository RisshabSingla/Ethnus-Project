import NavBar from "./NavBar";
import Home from "../../pages/SecondPage/Home";
import Explore from "../../pages/SecondPage/Explore";
import Favourites from "../../pages/SecondPage/Favourites";
import Setting from "../../pages/SecondPage/Setting";
import Subscribe from "../../pages/SecondPage/Subscribe";
import LogOut from "../../pages/SecondPage/LogOut";

function RightColumn({ current }) {
  return (
    <div className="pl-[166px] lg:pl-[208px]">
      <div className="font-bold font-serif pl-3.5 text-lg text-slate-50 p-1 mt-2">
        <NavBar />
      </div>
      <div>
        {current === "1" ? <Home /> : ""}
        {current === "3" ? <Explore /> : ""}
        {current === "4" ? <Favourites /> : ""}
        {current === "5" ? <Setting /> : ""}
        {current === "6" ? <Subscribe /> : ""}
        {current === "7" ? <LogOut /> : ""}
      </div>
    </div>
  );
}

export default RightColumn;

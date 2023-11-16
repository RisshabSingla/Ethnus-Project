import Home from "../../pages/SecondPage/Home";
import Explore from "../../pages/SecondPage/Explore";
import Favourites from "../../pages/SecondPage/Favourites";
import Setting from "../../pages/SecondPage/Setting";
import LogOut from "../../pages/SecondPage/LogOut";

function RightColumn({
  current,
  setCurrPlaying,
  currPlaying,
  trackIndex,
  setTrackIndex,
  setIsPlaying,
  userFavourites,
  setUserFavourites,
  recommendedPodcasts,
  top10Podcasts,
  userSettings,
}) {
  return (
    <div className="pl-[166px] lg:pl-[208px]">
      <div>
        {current === "1" ? (
          <Home
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
        ) : (
          ""
        )}
        {current === "3" ? (
          <Explore
            setCurrPlaying={setCurrPlaying}
            currPlaying={currPlaying}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
            setIsPlaying={setIsPlaying}
            userFavourites={userFavourites}
            setUserFavourites={setUserFavourites}
          />
        ) : (
          ""
        )}
        {current === "4" ? (
          <Favourites
            setCurrPlaying={setCurrPlaying}
            currPlaying={currPlaying}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
            setIsPlaying={setIsPlaying}
            userFavourites={userFavourites}
            setUserFavourites={setUserFavourites}
            recommendedPodcasts={recommendedPodcasts}
          />
        ) : (
          ""
        )}
        {current === "5" ? <Setting userSettings={userSettings} /> : ""}
        {/* {current === "6" ? <Subscribe /> : ""} */}
        {current === "7" ? <LogOut /> : ""}
      </div>
    </div>
  );
}

export default RightColumn;

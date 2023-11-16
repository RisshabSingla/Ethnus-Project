import Carousel from "react-elastic-carousel";
import Podcast from "./Podcast";
import "./Top10Charts.css";

function Top10Charts({
  setCurrPlaying,
  currPlaying,
  trackIndex,
  setTrackIndex,
  setIsPlaying,
  userFavourites,
  setUserFavourites,
  top10Podcasts = [],
}) {
  return (
    <div className="rounded-2xl">
      <Carousel
        breakPoints={[
          { width: 1, itemsToShow: 1 },
          { width: 300, itemsToShow: 2 },
          { width: 550, itemsToShow: 3, itemsToScroll: 1 },
          { width: 850, itemsToShow: 5, itemsToScroll: 1 },
          { width: 1150, itemsToShow: 6, itemsToScroll: 1 },
          { width: 1450, itemsToShow: 7 },
          { width: 1750, itemsToShow: 8 },
        ]}
      >
        {top10Podcasts.map((data) => (
          <Podcast
            key={data._id}
            track={data}
            setCurrPlaying={setCurrPlaying}
            currPlaying={currPlaying}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
            setIsPlaying={setIsPlaying}
            userFavourites={userFavourites}
            setUserFavourites={setUserFavourites}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Top10Charts;

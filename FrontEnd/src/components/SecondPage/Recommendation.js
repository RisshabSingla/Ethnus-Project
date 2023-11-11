import Carousel from "react-elastic-carousel";
import Podcast from "./Podcast";

function Recommendation({
  setCurrPlaying,
  currPlaying,
  trackIndex,
  setTrackIndex,
  setIsPlaying,
  userFavourites,
  setUserFavourites,
  recommendedPodcasts,
}) {
  return (
    <>
      <div className="flex ml-4 pb-4 font-bold	font-serif text-4xl pl-3 mx-3 text-slate-100">
        Recommended For You
      </div>
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
          {recommendedPodcasts !== undefined &&
            recommendedPodcasts?.length !== undefined &&
            recommendedPodcasts.map((data) => (
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
          {/* <Podcast />
          <Podcast />
          <Podcast />
          <Podcast />
          <Podcast />
          <Podcast />
          <Podcast />
          <Podcast />
          <Podcast />
          <Podcast />
          <Podcast />
          <Podcast /> */}
        </Carousel>
      </div>
    </>
  );
}

export default Recommendation;

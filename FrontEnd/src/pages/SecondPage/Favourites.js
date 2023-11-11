import Podcast from "../../components/SecondPage/Podcast";
import Recommendation from "../../components/SecondPage/Recommendation";

function Favourites({
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
    <div>
      <div className="font-bold	font-serif text-lg   items-center  pl-3 mx-3">
        {userFavourites?.length !== 0 ? (
          <div>
            <div className="flex ml-4 pb-4 font-bold	font-serif text-4xl pl-3 mx-3 text-slate-100">
              Your Favourites
            </div>
            <div className="grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-3">
              {userFavourites.map((data) => (
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
            </div>
          </div>
        ) : (
          <div>
            <div className="flex ml-4 pb-4 font-bold	font-serif text-4xl pl-3 mx-3 text-slate-100">
              You don't have any Favourites.
            </div>
          </div>
        )}
        <Recommendation
          recommendedPodcasts={recommendedPodcasts}
          setCurrPlaying={setCurrPlaying}
          currPlaying={currPlaying}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          setIsPlaying={setIsPlaying}
          userFavourites={userFavourites}
          setUserFavourites={setUserFavourites}
        />
        <div className="invisible">
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
          consecteturultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
          consectetur ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
          consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse acultrices mi
          ut nisl mollis Lorem ipsum dolor sit amet, consectetur ultrices mi ut
          nisl mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse acultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse acultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
          consectetur ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
          consectetur Lorem ipsum dolor sit amet, consectetur dolor sit amet,
          consectetur adipiscing elit. Suspendisse ac est dolor sit amet,
          consectetur adipiscing elit. Suspendisse ac est tellus. Sed ultrices
          mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        </div>
      </div>
    </div>
  );
}

export default Favourites;

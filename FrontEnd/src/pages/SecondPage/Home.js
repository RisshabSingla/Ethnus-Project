import Greeting from "../../components/SecondPage/Greeting";
import Recommendation from "../../components/SecondPage/Recommendation";
import Top10Charts from "../../components/SecondPage/Top10Charts";
import Podcast from "../../components/SecondPage/Podcast";

function Home({
  setCurrPlaying,
  currPlaying,
  trackIndex,
  setTrackIndex,
  setIsPlaying,
  userFavourites,
  setUserFavourites,
  recommendedPodcasts,
  top10Podcasts,
}) {
  return (
    <div>
      <div className="flex items-center pl-3 mx-3">
        <div>
          <Greeting />
          <div>
            <Top10Charts
              setCurrPlaying={setCurrPlaying}
              currPlaying={currPlaying}
              trackIndex={trackIndex}
              setTrackIndex={setTrackIndex}
              setIsPlaying={setIsPlaying}
              userFavourites={userFavourites}
              setUserFavourites={setUserFavourites}
              top10Podcasts={top10Podcasts}
            />
          </div>

          <div>
            {userFavourites ? (
              userFavourites.length === undefined ||
              userFavourites.length < 2 ? (
                ""
              ) : (
                <div>
                  <div>
                    <div className="flex ml-4 pb-4 font-bold	 text-4xl pl-3 mx-3 text-slate-100">
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
                </div>
              )
            ) : (
              ""
            )}
          </div>

          <Recommendation
            setCurrPlaying={setCurrPlaying}
            currPlaying={currPlaying}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
            setIsPlaying={setIsPlaying}
            userFavourites={userFavourites}
            setUserFavourites={setUserFavourites}
            recommendedPodcasts={recommendedPodcasts}
          />
          <div className="invisible">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

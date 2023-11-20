import Podcast from "../../components/SecondPage/Podcast";
import Recommendation from "../../components/SecondPage/Recommendation";
import Carousel from "react-elastic-carousel";

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
      <div className="font-bold	 text-lg   items-center pl-4 mx-4">
        {userFavourites?.length !== 0 ? (
          // <div>
          //   <div className="flex ml-4 pb-4 font-bold text-4xl pl-3 mx-3 text-slate-100">
          //     Your Favourites
          //   </div>
          //   <div className="grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-3">
          //     {userFavourites.map((data) => (
          //       <Podcast
          //         key={data._id}
          //         track={data}
          //         setCurrPlaying={setCurrPlaying}
          //         currPlaying={currPlaying}
          //         trackIndex={trackIndex}
          //         setTrackIndex={setTrackIndex}
          //         setIsPlaying={setIsPlaying}
          //         userFavourites={userFavourites}
          //         setUserFavourites={setUserFavourites}
          //       />
          //     ))}
          //   </div>
          // </div>
          <div>
            {userFavourites ? (
              userFavourites.length === undefined ||
              userFavourites.length < 5 ? (
                ""
              ) : (
                <div>
                  <div>
                    <div className="flex ml-4 pb-4 font-bold	 text-4xl pl-3 mx-3 text-orange-100">
                      Your Favourites
                    </div>
                    {/* <div className="grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-3">
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
                  </div> */}
                    <div className="rounded-2xl pt-3">
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
                        {userFavourites !== undefined &&
                          userFavourites?.length !== undefined &&
                          userFavourites.map((data) => (
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
                  </div>
                </div>
              )
            ) : (
              ""
            )}
          </div>
        ) : (
          <div>
            <div className="flex ml-4 pb-4 font-bold text-4xl pl-3 mx-3 text-slate-100">
              You don't have any Favourites.
            </div>
          </div>
        )}
        <div className="pt-4">
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
        </div>
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
        </div>
      </div>
    </div>
  );
}

export default Favourites;

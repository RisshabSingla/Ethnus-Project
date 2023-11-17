import Podcast from "../../components/SecondPage/Podcast";
import { useEffect, useState } from "react";
import "./Explore.css";
import WifiLoader from "../../components/SecondPage/wifiLoader";
import axios from "axios";

function Search({ query, setQuery, setFound }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search Podcasts..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        setFound(false);
      }}
    />
  );
}

function QueryGrid({
  queryData,
  setCurrPlaying,
  currPlaying,
  trackIndex,
  setTrackIndex,
  setIsPlaying,
  userFavourites,
  setUserFavourites,
}) {
  return (
    <div className="grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {queryData?.length !== 0 ? (
        queryData?.map((data) => (
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
        ))
      ) : (
        <div className="w-full font-bold text-xl text-slate-100 p-3 mx-3">
          Sorry No PodCast Found
        </div>
      )}
    </div>
  );
}

function ExporeGrid({
  exploreData,
  setCurrPlaying,
  currPlaying,
  trackIndex,
  setTrackIndex,
  setIsPlaying,
  userFavourites,
  setUserFavourites,
}) {
  return (
    <div className="grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {exploreData
        ? exploreData?.map((data) => (
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
          ))
        : ""}
    </div>
  );
}

function Explore({
  setCurrPlaying,
  currPlaying,
  trackIndex,
  setTrackIndex,
  setIsPlaying,
  userFavourites,
  setUserFavourites,
}) {
  const [query, setQuery] = useState("");
  const [found, setFound] = useState(false);
  const [exploreData, setExploreData] = useState([]);
  const [queryData, setQueryData] = useState([]);
  const [gotExploreData, setGotExploreData] = useState(false);

  useEffect(function () {
    // get all podcast
    async function getExploreData() {
      const res = await axios.get(
        "http://ethnus-project-backend-3ou9.onrender.com/api/podcast"
      );
      setExploreData(() => {
        setGotExploreData(true);
        return res.data.data;
      });
      // console.log(res.data.data);
    }
    getExploreData();
  }, []);

  useEffect(
    function () {
      async function FindPodcasts() {
        const res = await axios.get(
          `http://ethnus-project-backend-3ou9.onrender.com/api/?search=${query}`
        );
        setQueryData(() => {
          setFound(true);
          // console.log(res);
          // console.log(res.data);
          // console.log(res.data?.podcasts);
          return res.data?.podcasts;
        });
      }
      FindPodcasts();
    },
    [query]
  );
  //   <WifiLoader
  //   background={"transparent"}
  //   text={"Please Wait...."}
  //   backColor="#E8F2FC"
  //   frontColor="#4645F6"
  // />
  return (
    <div>
      <div className="pl-7">
        <Search query={query} setQuery={setQuery} setFound={setFound} />
      </div>
      <div className="font-bold text-lg  pl-3 mx-3">
        {query === "" ? (
          ""
        ) : (
          <div>
            {found ? (
              <div>
                <div className="font-bold text-xl text-slate-100 p-3 mx-3">
                  Found these results
                </div>
                <QueryGrid
                  queryData={queryData}
                  setCurrPlaying={setCurrPlaying}
                  currPlaying={currPlaying}
                  trackIndex={trackIndex}
                  setTrackIndex={setTrackIndex}
                  setIsPlaying={setIsPlaying}
                  userFavourites={userFavourites}
                  setUserFavourites={setUserFavourites}
                />
              </div>
            ) : (
              <div className="font-bold text-xl text-slate-100 p-3 mx-3">
                Searching...
              </div>
            )}
          </div>
        )}
      </div>
      <div className="font-bold	 text-lg  pl-3 mx-3">
        {gotExploreData ? (
          <div className="font-bold text-xl text-slate-100 p-3 mx-3">
            <div>Take a look at some of the lastest Podcasts </div>
            <ExporeGrid
              exploreData={exploreData}
              setCurrPlaying={setCurrPlaying}
              currPlaying={currPlaying}
              trackIndex={trackIndex}
              setTrackIndex={setTrackIndex}
              setIsPlaying={setIsPlaying}
              userFavourites={userFavourites}
              setUserFavourites={setUserFavourites}
            />
          </div>
        ) : (
          <div>
            <WifiLoader
              background={"transparent"}
              text={"Please Wait...."}
              backColor="#E8F2FC"
              frontColor="#4645F6"
            />

            <div className="invisible">
              amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
              ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
              ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
              est tellus. Sed Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        )}

        <div className="invisible">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
        </div>

        {/* <div className="invisible">
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur Lorem ipsum dolor sit Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur Lorem ipsum dolor sit Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur Lorem ipsum dolor sit Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
          mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
          consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse ac est
          tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse ac est tellus. Sed ultrices
          mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis
        </div> */}
      </div>
    </div>
  );
}

export default Explore;

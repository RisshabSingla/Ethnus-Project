import Podcast from "../../components/SecondPage/Podcast";
import { useEffect, useState } from "react";
import "./Explore.css";
import WifiLoader from "../../components/SecondPage/wifiLoader";
import axios from "axios";

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search Podcasts..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function ExporeGrid({
  exploreData,
  setCurrPlaying,
  currPlaying,
  trackIndex,
  setTrackIndex,
  setIsPlaying,
}) {
  return (
    <div className="grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {exploreData
        ? exploreData?.map((data) => (
            <Podcast
              track={data}
              setCurrPlaying={setCurrPlaying}
              currPlaying={currPlaying}
              trackIndex={trackIndex}
              setTrackIndex={setTrackIndex}
              setIsPlaying={setIsPlaying}
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
}) {
  const [query, setQuery] = useState("");
  const [found, setFound] = useState(false);
  const [exploreData, setExploreData] = useState([]);
  const [gotExploreData, setGotExploreData] = useState(false);

  useEffect(function () {
    async function getExploreData() {
      const res = await axios.get("http://localhost:8080/api/podcast");
      setExploreData(() => {
        setGotExploreData(true);
        return res.data.data;
      });
      console.log(res.data.data);
    }
    getExploreData();
  }, []);

  useEffect(
    function () {
      async function FindPodcasts() {
        const data = axios
          .get(`http://localhost:8080/api/?search=${query}`)
          .then((res) => res)
          .catch((res) => console.log(res));
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
        <Search query={query} setQuery={setQuery} />
      </div>
      <div className="font-bold	font-serif text-lg  pl-3 mx-3">
        {query === "" ? (
          ""
        ) : (
          <div>
            {" "}
            {found ? (
              <div>Found</div>
            ) : (
              <div className="font-bold	font-serif text-xl text-slate-100 p-3 mx-3">
                Searching...
              </div>
            )}
          </div>
        )}
      </div>
      <div className="font-bold	font-serif text-lg  pl-3 mx-3">
        {gotExploreData ? (
          <div className="font-bold	font-serif text-xl text-slate-100 p-3 mx-3">
            <div>Here are some recommendations </div>
            <ExporeGrid
              exploreData={exploreData}
              setCurrPlaying={setCurrPlaying}
              currPlaying={currPlaying}
              trackIndex={trackIndex}
              setTrackIndex={setTrackIndex}
              setIsPlaying={setIsPlaying}
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

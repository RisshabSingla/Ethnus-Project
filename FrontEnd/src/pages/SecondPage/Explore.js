import Podcast from "../../components/SecondPage/Podcast";
import { useEffect, useState } from "react";
import "./Explore.css";
import XlviLoader from "../../components/SecondPage/XlviLoader";
import WifiLoader from "../../components/SecondPage/wifiLoader";
// import BookLoader from "../../components/SecondPage/BookLoader";

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

function ExporeGrid() {
  return (
    <div className="grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
      <Podcast />
      <Podcast />
      <Podcast />
      <Podcast />
      <Podcast />
      <Podcast />
    </div>
  );
}

function Explore() {
  const [query, setQuery] = useState("");
  const [found, setFound] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [exploreData, setExploreData] = useState([]);

  useEffect(
    function () {
      async function FindPodcasts() {
        setFetching(true);
        // const res = fetch();
        // const data = await res.json();

        const data = [];
        setExploreData(data);
        // setFound(true);
        setTimeout(() => {
          setFetching(false);
        }, 10000);
      }
      FindPodcasts();
    },
    [query]
  );
  return (
    <div>
      <div className="pl-7">
        <Search query={query} setQuery={setQuery} />
      </div>
      {/* <BookLoader /> */}
      <div className="font-bold	font-serif text-lg  pl-3 mx-3">
        {query === "" ? (
          <ExporeGrid />
        ) : fetching ? (
          <div className="flex justify-center h-screen">
            {/* <BookLoader text="Please Wait..." /> */}
            {/* <XlviLoader boxColors={["#EF4444", "#F59E0B", "#6366F1"]} /> */}
            <WifiLoader
              background={"transparent"}
              text={"Please Wait...."}
              backColor="#E8F2FC"
              frontColor="#4645F6"
            />
          </div>
        ) : found ? (
          " "
        ) : (
          <div>
            <div className="font-bold	font-serif text-xl text-slate-100 p-3 mx-3">
              <div>Sorry could not find the requested Podcast</div>
              <div>Here are some recommendations </div>
            </div>
            <ExporeGrid />
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

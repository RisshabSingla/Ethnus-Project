import Carousel from "react-elastic-carousel";
import Podcast from "./Podcast";
import "./Top10Charts.css";

const Alltracks = [
  {
    name: "Apna Bale Le",
    artist: "Trinix ft Rushawn",
    img: "https://ik.imagekit.io/exu18jfr4/img.jpg?updatedAt=1699356626542",
    podcast:
      "https://ik.imagekit.io/exu18jfr4/That_All_Men_Be_Saved_God_s_Desire_and_Our_Role_Part_166928.mp3?updatedAt=1699356823539",
  },
  {
    name: "Apna Bale Le",
    artist: "Trinix ft Rushawn",
    img: "./images/3.jpeg",
    podcast: "./music/2.mp3",
  },
  {
    name: "Chaand_Baaliyan",
    podcast: "./music/2.mp3",
    artist: "Trinix ft Rushawn",
    img: "",
  },
  {
    name: "Apna Bale Le",
    artist: "Trinix ft Rushawn",
    img: "./images/3.jpeg",
    podcast: "./music/2.mp3",
  },
  {
    name: "Chaand_Baaliyan",
    podcast: "./music/2.mp3",
    artist: "Trinix ft Rushawn",
    img: "./images/3.jpeg",
  },
  {
    name: "Apna Bale Le",
    artist: "Trinix ft Rushawn",
    img: "./images/3.jpeg",
    podcast: "./music/2.mp3",
  },
  {
    name: "Chaand_Baaliyan",
    podcast: "./music/2.mp3",
    artist: "Trinix ft Rushawn",
    img: "./images/3.jpeg",
  },
];

function Top10Charts({
  setCurrPlaying,
  currPlaying,
  trackIndex,
  setTrackIndex,
}) {
  // sm:min-w-[300px] md:min-w-[500px] lg:min-w-[700px] xl:min-w-[1000px]
  // sm:min-w-[300px] min-[730px]:min-w-[500px]  min-[920px]:min-w-[700px] xl:min-w-[1000px]
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
        {/* {tracks.map((track) => (
          <Podcast track={track} setCurrPlaying={setCurrPlaying} currPlaying={currPlaying}/>
        ))} */}

        {Alltracks.map((track) => (
          <Podcast
            track={track}
            setCurrPlaying={setCurrPlaying}
            currPlaying={currPlaying}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
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
  );
}

export default Top10Charts;

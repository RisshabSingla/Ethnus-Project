import axios from "axios";
import { useState } from "react";

function Podcast({
  track,
  setCurrPlaying,
  currPlaying,
  setTrackIndex,
  setIsPlaying,
  userFavourites,
  setUserFavourites,
}) {
  const [favouriteAnimation, setFavouriteAnimation] = useState(false);
  const [addQueue, setAddQueue] = useState(false);
  const [addFront, setAddFront] = useState(false);
  const [addFavourite, setAddFavourite] = useState(
    userFavourites?.filter((data) => data._id === track._id).length === 0
      ? false
      : true
  );
  function handleQueueAdd() {
    setAddQueue(addQueue ? false : true);
    if (!addQueue) {
      setCurrPlaying([...currPlaying, track]);
    }
    if (addQueue) {
      setCurrPlaying(currPlaying.filter((t) => t !== track));
    }
  }
  function handleFrontAdd() {
    setAddFront(addFront ? false : true);
    if (!addFront) {
      if (currPlaying.length > 0 && currPlaying[0] !== track) {
        setCurrPlaying([track, ...currPlaying]);
      }
      if (currPlaying.length === 0) {
        setCurrPlaying([track]);
      }
      setTimeout(() => {
        setTrackIndex(0);
        setIsPlaying(true);
      }, 100);
    }
  }

  function handleFavouriteAdd(track) {
    setAddFavourite((prev) => !prev);
    setFavouriteAnimation(true);
    axios
      .put(
        `http://ethnus-project-backend-3ou9.onrender.com/api/podcast/like/${track._id}`
      )
      .then(() => {
        !addFavourite
          ? setUserFavourites([...userFavourites, track])
          : setUserFavourites(
              userFavourites?.filter((data) => data._id !== track._id)
            );
      });
    setTimeout(() => {
      setFavouriteAnimation(false);
    }, 500);
  }

  return (
    <>
      <div className="p-4 flex-shrink-0 font-bold text-lg border rounded-3xl text-left m-3 h-full w-full  bg-gradient-to-tr from-black to-transparent border-2 ">
        <img
          className="rounded-3xl border-2 m-3 min-w-[150px] min-h-[150px] max-h-[150px]"
          width="150px"
          height="150px"
          src={track?.img ? track.img : "./images/3.jpeg"}
          alt=""
        />

        <div className="flex justify-center text-orange-100">
          <marquee>{track?.name ? track.name : "Title"}</marquee>
        </div>
        <div className="flex justify-center text-orange-200">
          {track?.artist
            ? track.artist
                .slice(0, Math.min(track.artist.length, 15))
                .padEnd(15, " ")
            : "Artist"}
        </div>

        <div className="flex justify-center">
          <button className="px-2" onClick={handleFrontAdd}>
            {addFront ? (
              <img width="50px" src="./images/play/3.svg" alt="" />
            ) : (
              <img width="50px" src="./images/play/1.svg" alt="" />
            )}
          </button>
          <button onClick={handleQueueAdd}>
            {addQueue ? (
              <img width="50px" src="./images/queue/4.svg" alt="" />
            ) : (
              <img width="50px" src="./images/queue/1.svg" alt="" />
            )}
          </button>
          <button
            onClick={() => {
              handleFavouriteAdd(track);
              // console.log(track);
            }}
            className={`px-2 ${favouriteAnimation ? "animate-ping" : ""}`}
          >
            {addFavourite ? (
              <img width="50px" src="./images/favourite/2.svg" alt="" />
            ) : (
              <img width="50px" src="./images/favourite/4.svg" alt="" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Podcast;

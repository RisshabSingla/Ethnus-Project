import axios from "axios";
import { useState } from "react";

function Podcast({
  track,
  setCurrPlaying,
  currPlaying,
  trackIndex,
  setTrackIndex,
  setIsPlaying,
  userFavourites,
  setUserFavourites,
}) {
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
    setAddFavourite(addFavourite ? false : true);
    console.log(track);
    console.log(track._id);
    axios
      .put(`http://localhost:8080/api/podcast/like/${track._id}`)
      .then(() => {
        !addFavourite
          ? setUserFavourites([...userFavourites, track])
          : setUserFavourites(
              userFavourites?.filter((data) => data._id !== track._id)
            );
      });
  }

  return (
    <>
      <div className=" p-4 flex-shrink-0 font-bold font-serif text-lg border rounded-3xl text-left m-3   ">
        <img
          className="rounded-3xl border-2 m-3 min-w-[150px] min-h-[150px] max-h-[150px]"
          width="150px"
          height="150px"
          src={track?.img ? track.img : "./images/3.jpeg"}
          alt=""
        />

        <div className="flex justify-center text-slate-100">
          {track?.name ? track.name : "Title"}
        </div>
        <div className="flex justify-center text-slate-300">
          {track?.artist ? track.artist : "Artist"}
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

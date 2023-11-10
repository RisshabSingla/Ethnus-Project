import { useState } from "react";

function Podcast({ track, setCurrPlaying, currPlaying }) {
  const [addQueue, setAddQueue] = useState(false);
  const [addFront, setAddFront] = useState(false);
  const [addFavourite, setAddFavourite] = useState(false);
  function handleQueueAdd() {
    setAddQueue(addQueue ? false : true);
    setCurrPlaying([...currPlaying, track]);
  }
  function handleFrontAdd() {
    setAddFront(addFront ? false : true);
    setCurrPlaying([track, ...currPlaying]);
  }

  function handleFavouriteAdd() {
    setAddFavourite(addFavourite ? false : true);
  }

  return (
    <>
      <div className=" p-4 flex-shrink-0 font-bold font-serif text-lg border rounded-3xl text-left m-3">
        <img
          className="rounded-3xl border-2 m-3"
          width="150px"
          height="150px"
          src={track?.img ? track.img : "./images/3.jpeg"}
          alt=""
        />

        <div className="flex justify-center text-slate-100">
          {track?.name ? track.name : "Title"}
        </div>
        <div className="flex justify-center text-slate-100">
          {track?.artist ? track.artist : "Artist"}
        </div>

        <div className="flex justify-center">
          <button className="px-2" onClick={handleFrontAdd}>
            {addFront ? (
              <img width="50px" src="./images/play/3.svg" />
            ) : (
              <img width="50px" src="./images/play/1.svg" />
            )}
          </button>
          <button onClick={handleQueueAdd}>
            {addQueue ? (
              <img width="50px" src="./images/queue/4.svg" />
            ) : (
              <img width="50px" src="./images/queue/1.svg" />
            )}
          </button>
          <button onClick={handleFavouriteAdd}>
            {addFavourite ? (
              <img width="50px" src="./images/favourite/2.svg" />
            ) : (
              <img width="50px" src="./images/favourite/4.svg" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Podcast;

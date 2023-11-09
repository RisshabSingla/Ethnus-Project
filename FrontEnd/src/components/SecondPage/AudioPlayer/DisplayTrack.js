import { BsMusicNoteBeamed } from "react-icons/bs";

function DisplayTrack({
  currentTrack,
  audioRef,
  progressBarRef,
  setDuration,
  handleNext,
}) {
  const onLoadedMetadata = () => {
    // console.log(audioRef.current.duration);
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="audio-info">
        {/* audio-image */}

        {currentTrack.thumbnail ? (
          <img
            className="rounded-2xl"
            width="50px"
            src={currentTrack.thumbnail}
            alt="audio avatar"
          />
        ) : (
          <div className="icon-wrapper">
            <span className="audio-icon">
              <BsMusicNoteBeamed />
            </span>
          </div>
        )}

        <div className="text">
          <p className="title">{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayTrack;

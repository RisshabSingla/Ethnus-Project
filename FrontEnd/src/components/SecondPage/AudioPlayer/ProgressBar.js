

function ProgressBar({ progressBarRef, audioRef, timeProgress, duration }) {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  const calculateProgressBarWidth = () => {
    if (duration && timeProgress) {
      return `${(timeProgress / duration) * 100}%`;
    }
    return "0%";
  };

  const calculateTimePosition = () => {
    if (duration && timeProgress) {
      return `calc(${(timeProgress / duration) * 100}% - 1.5rem)`;
    }
    return "0";
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="progress relative w-4/5">
        <div className="progress-wrapper h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="progress-bar h-full bg-green-400 rounded-full transition-all duration-300"
            style={{ width: calculateProgressBarWidth() }}
          />
        </div>
        <input
          className="progress-input absolute w-full h-full cursor-pointer font-roboto"
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
        />
        <div
          className="time-indicator absolute text-white-400 transition-all duration-300 font-sans " 
          style={{
            top: "-1.5rem",
            left: calculateTimePosition(),
            transform: "translateX(-50%)",
          }}
        >
          {formatTime(timeProgress)}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;

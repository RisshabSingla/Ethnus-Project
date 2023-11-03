import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

function App() {
  return (
    <div className="bg-black">
      <div className="flex flex-row h-screen gap-1">
        <div className="basis-1/5 bg-gray-900">
          <LeftColumn />
        </div>
        <div className="basis-4/5 bg-neutral-950">
          <RightColumn />
        </div>
      </div>
    </div>
  );
}

export default App;

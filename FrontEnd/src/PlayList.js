import Podcast from "./Podcast";

function PlayList({ title }) {
  return (
    <div>
      <div className="border-2 p-4 rounded-3xl ">
        <div>
          <div className="text-left p-6 font-bold font-serif text-lg  text-slate-50">
            <span> {title ? title : "Title"}</span>
          </div>
        </div>
        <div className="flex gap-x-4 overflow-x-scroll ">
          <Podcast />
          <Podcast />
          <Podcast />
          <Podcast />
          {/* <Podcast />
          <Podcast />
          <Podcast />
          <Podcast />
          <Podcast /> */}
        </div>
      </div>
    </div>
  );
}

export default PlayList;

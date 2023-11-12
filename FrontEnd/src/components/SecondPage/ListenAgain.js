import Carousel from "react-elastic-carousel";
import Podcast from "./Podcast";

function ListenAgain() {
  return (
    <>
      <div className="flex ml-4 pb-4 font-bold	font-serif text-4xl pl-3 mx-3 text-slate-100">
        Listen Again
      </div>
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
        </Carousel>
      </div>
    </>
  );
}

export default ListenAgain;

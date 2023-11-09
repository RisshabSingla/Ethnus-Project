import Carousel from "react-elastic-carousel";
import Podcast from "./Podcast";
import "./Top10Charts.css";

function Top10Charts() {
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
  );
}

export default Top10Charts;

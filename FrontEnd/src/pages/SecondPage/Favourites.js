import Podcast from "../../components/SecondPage/Podcast";
import Recommendation from "../../components/SecondPage/Recommendation";

function Favourites({ hasFavourites = true, setTracks }) {
  return (
    <div>
      <div className="font-bold	font-serif text-lg   items-center  pl-3 mx-3">
        {hasFavourites ? (
          <div>
            <div className="flex ml-4 pb-4 font-bold	font-serif text-4xl pl-3 mx-3 text-slate-100">
              Your Favourites
            </div>
            <div className="grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
              <Podcast />
              <Podcast />
              <Podcast />
              <Podcast />
            </div>
            <div className="invisible">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
              est tellus. Sed
            </div>
          </div>
        ) : (
          <div>
            <div className="flex ml-4 pb-4 font-bold	font-serif text-4xl pl-3 mx-3 text-slate-100">
              You don't have any Favourites.
            </div>
            <Recommendation />
            <div className="invisible">
              ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
              consecteturultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
              consectetur ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
              consectetur Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse acultrices mi ut nisl mollis Lorem ipsum dolor sit
              amet, consectetur ultrices mi ut nisl mollis Lorem ipsum dolor sit
              amet, consectetur Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut
              nisl mollis Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse acultrices mi ut nisl mollis Lorem ipsum dolor
              sit amet, consectetur ultrices mi ut nisl mollis Lorem ipsum dolor
              sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut
              nisl mollis Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse acultrices mi ut nisl mollis Lorem ipsum dolor
              sit amet, consectetur ultrices mi ut nisl mollis Lorem ipsum dolor
              sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              dolor sit amet, consectetur adipiscing elit. Suspendisse ac est
              dolor sit amet, consectetur adipiscing elit. Suspendisse ac est
              tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
              consectetur
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favourites;

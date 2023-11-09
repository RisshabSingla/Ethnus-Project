import Greeting from "../../components/SecondPage/Greeting";
import ListenAgain from "../../components/SecondPage/ListenAgain";
import Recommendation from "../../components/SecondPage/Recommendation";
import Top10Charts from "../../components/SecondPage/Top10Charts";

function Home({ hasEnoughSongs = false }) {
  return (
    <div>
      <div className="flex items-center pl-3 mx-3">
        <div>
          <Greeting />
          <div>
            <Top10Charts />
          </div>

          {hasEnoughSongs ? (
            <div>
              <ListenAgain />
            </div>
          ) : (
            <div>
              <Recommendation />
            </div>
          )}

          <div className="invisible">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
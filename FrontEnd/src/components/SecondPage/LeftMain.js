import ColumnItem from "./ColumnItem";

function LeftMain({ clicked, setClickedItem }) {
  return (
    <div>
      <ColumnItem
        id="1"
        imageSrc="./images/home/1.svg"
        ItemName="Home"
        onClickImage="./images/home/2.svg"
        setClicked={setClickedItem}
        currentClicked={clicked}
      />
      {/* <ColumnItem
        id="2"
        imageSrc="./images/microphone/1.svg"
        ItemName="Podcasts"
        onClickImage="./images/microphone/2.svg"
        setClicked={setClickedItem}
        currentClicked={clicked}
      /> */}
      <ColumnItem
        id="3"
        imageSrc="./images/explore/1.svg"
        ItemName="Explore"
        onClickImage="./images/explore/2.svg"
        setClicked={setClickedItem}
        currentClicked={clicked}
      />

      <ColumnItem
        id="4"
        imageSrc="/images/favourites/1.svg"
        ItemName="Favourites"
        onClickImage="./images/favourites/2.svg"
        setClicked={setClickedItem}
        currentClicked={clicked}
      />
    </div>
  );
}

export default LeftMain;

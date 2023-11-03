import ColumnItem from "./ColumnItem";

function LeftMain() {
  return (
    <div>
      <ColumnItem imageSrc="./images/microphone/2.svg" ItemName="Podcasts" />
      <ColumnItem imageSrc="./images/explore/1.svg" ItemName="Explore" />
      <ColumnItem imageSrc="/images/favourites/1.svg" ItemName="Favourites" />
    </div>
  );
}

export default LeftMain;

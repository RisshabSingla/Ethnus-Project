import Logo from "./Logo";
import LeftMain from "./LeftMain";
import ColumnItem from "./ColumnItem";

function LeftColumn({ clicked, setClickedItem }) {
  return (
    <div>
      <div className="p-3">
        <div className="font-bold	 text-lg  text-slate-50 text-center ">
          Menu
        </div>
      </div>
      <LeftMain clicked={clicked} setClickedItem={setClickedItem} />
      <div className="p-3">
        <div className="font-bold text-lg  text-slate-50 text-center p-3">
          General
        </div>
      </div>

      <ColumnItem
        id="5"
        imageSrc="./images/setting/1.svg"
        ItemName="Settings"
        onClickImage="./images/setting/2.svg"
        setClicked={setClickedItem}
        currentClicked={clicked}
      />

      {/* <ColumnItem
        id="6"
        imageSrc="./images/subscribe/1.svg"
        ItemName="Subscribe"
        onClickImage="./images/subscribe/2.svg"
        setClicked={setClickedItem}
        currentClicked={clicked}
      /> */}

      <ColumnItem
        id="7"
        imageSrc=".//images/logout/1.svg"
        ItemName="Log Out"
        onClickImage="./images/logout/2.svg"
        setClicked={setClickedItem}
        currentClicked={clicked}
      />
    </div>
  );
}

export default LeftColumn;

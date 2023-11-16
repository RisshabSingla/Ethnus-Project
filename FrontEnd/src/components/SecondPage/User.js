import DropDown from "./DropDown";

function User({ userSettings, setClicked }) {
  return (
    <div>
      <div className="flex p-3 text-orange-100">
        <div>
          <img
            width="40px"
            height="40px"
            src={
              userSettings?.gender === "male"
                ? "./images/userImage/1.svg"
                : "./images/userImage/2.svg"
            }
            alt=""
          />
        </div>
        <div className="text-base font-serif pl-3.5 text-left	">
          <div> {userSettings?.name ? userSettings.name : "Loading"}</div>
          {/* <div className="text-xs font-serif">
            {isPremium ? "Premium" : "Hello"}
          </div> */}
        </div>
        <div>
          <DropDown setClicked={setClicked} />
        </div>
      </div>
    </div>
  );
}

export default User;

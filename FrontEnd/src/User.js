import DropDown from "./DropDown";

function User({ name, profileImage, isPremium = true }) {
  return (
    <div>
      <div className="flex p-3 text-orange-100">
        <div>
          <img width="40px" height="40px" src={profileImage} alt="" />
        </div>
        <div className="text-base font-serif pl-3.5 text-left	">
          <div> {name ? name : "Risshab Singla"}</div>
          <div className="text-xs font-serif">
            {isPremium ? "Premium" : "Hello"}
          </div>
        </div>
        <div>
          <DropDown />
        </div>
      </div>
    </div>
  );
}

export default User;

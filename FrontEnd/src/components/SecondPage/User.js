// import { useState, useEffect } from "react";
import DropDown from "./DropDown";
// import axios from "axios";

function User({
  loggedInUser,
  name,
  profileImage = "./images/userImage/1.svg",
  setClicked,
}) {
  // const [name, setName] = useState("");
  // useEffect(() => {
  //   async function getName() {
  //     const data = await axios.get("http://localhost:8080/api/users/:id");
  //     console.log(data);
  //   }
  //   getName();
  // }, []);
  return (
    <div>
      <div className="flex p-3 text-orange-100">
        <div>
          <img width="40px" height="40px" src={profileImage} alt="" />
        </div>
        <div className="text-base font-serif pl-3.5 text-left	">
          <div> {name ? name : "Risshab Singla"}</div>
          {/* <div className="text-xs font-serif">
            {isPremium ? "Premium" : "Hello"}
          </div> */}
        </div>
        <div>
          <DropDown loggedInUser={loggedInUser} setClicked={setClicked} />
        </div>
      </div>
    </div>
  );
}

export default User;

import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";
import axios from "axios";

function User({ loggedInUser, name, profileImage = "./images/userImage/1.svg" }) {
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
        <div className="text-base pl-3.5 text-left">
          <div>{name ? name : "Shivam Dave"}</div>
        </div>
        <div>
          <DropDown loggedInUser={loggedInUser} />
        </div>
      </div>
    </div>
  );
}

export default User;

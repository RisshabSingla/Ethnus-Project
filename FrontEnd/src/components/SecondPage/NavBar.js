import BreadCrumb from "./BreadCrumb";
import Logo from "./Logo";
import User from "./User";

function NavBar({ loggedInUser, setLoggedInUser }) {
  return (
    <div className="sticky inset-x-0 top-0 font-bold font-sans text-lg text-slate-50  backdrop-blur-sm z-10">
      <div className="flex justify-between pt-2 px-2">
        <div className="pl-2">
          <Logo />
        </div>
        <div>
          <BreadCrumb />
        </div>
        <div>
          <User loggedInUser={loggedInUser} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

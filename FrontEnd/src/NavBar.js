import BreadCrumb from "./BreadCrumb";
import User from "./User";

function NavBar() {
  return (
    <div>
      <div className="flex justify-between py-3">
        <div>
          <BreadCrumb />
        </div>
        <div>
          <User />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

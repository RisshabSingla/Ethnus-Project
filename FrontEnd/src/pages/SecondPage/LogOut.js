import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

function LogOut() {
  // const navigate = useNavigate();
  const [isLogoutConfirmed, setIsLogoutConfirmed] = useState(false);

  useEffect(() => {
    if (isLogoutConfirmed) {
      // Perform any necessary logout actions
      logout();
    }
  }, [isLogoutConfirmed]);

  const logout = () => {
    // Perform any additional logout actions if needed
    localStorage.clear();
    // Redirect to the login page
    window.location.href = "/";
  };

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to log out?");
    if (isConfirmed) {
      // Set the state to true to trigger the useEffect
      setIsLogoutConfirmed(true);
    }
  };

  return (
    <div>
      {!isLogoutConfirmed && <div>{/* Your other content here */}</div>}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white font-semibold py-2 px-4 focus:outline-none"
      >
        Logout
      </button>
      <div className="invisible">
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac est
        tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Suspendisse ac est tellus.
        Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac est
        tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
        consectetur ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
        consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Suspendisse ac est tellus.
        Sed Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        ac est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac est
        tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Suspendisse ac est tellus.
        Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
        mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
        est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi
        ut nisl mollis Lorem ipsum dolor sit amet, consectetur ultrices mi ut
        nisl mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
        mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
        mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
        est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi
        ut nisl mollis Lorem ipsum dolor sit amet, consectetur ultrices mi ut
        nisl mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
        mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
        mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
        est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi
        ut nisl mollis Lorem ipsum dolor sit amet, consectetur ultrices mi ut
        nisl mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
        mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
        mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
        est tellus. Sed ultrices mi ut nisl mollis Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi
        ut nisl mollis Lorem ipsum dolor sit amet, consectetur ultrices mi ut
        nisl mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
        mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Suspendisse ac est tellus. Sed
        ultrices mi ut nisl mollis Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse ac est tellus. Sed ultrices mi ut nisl
        mollis Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
}

export default LogOut;

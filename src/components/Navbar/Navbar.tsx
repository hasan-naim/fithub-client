import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function Navbar() {
  //   const { user, logOut } = useContext(AuthContext);

  const user: { email: string; displayName: string; photoURL: string } = {
    email: "",
    displayName: "",
    photoURL: "",
  };

  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/meals"}>Meals</Link>
      </li>
      <li>
        <Link to={"/myreviews"}>My Reviews</Link>
      </li>
      <li>
        <Link to={"/addmeal"}>Add Meal</Link>
      </li>
      <li>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://hasan-naim.netlify.app/"
        >
          Portfolio
        </a>
      </li>
    </>
  );

  //   const handleLogOut = () => {
  //     logOut()
  //       .then((res) => {
  //         toast.success("You are successfully loged out!");
  //       })
  //       .catch((err) => toast.error(err.message));
  //   };

  return (
    <div className="bg-white sticky top-0 left-0 w-full z-10 shadow-md">
      <div className="container">
        <div className="navbar p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 text-neutral w-5"
                  fill="#000"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 space-y-1"
              >
                {navItems}
              </ul>
            </div>
            <Link
              to={"/"}
              className="translate-y-0 flex items-center duration-300 h-full ml-3 lg:ml-0 hover:bg-white hover:-translate-y-2 hover:cursor-pointer normal-case text-xl"
            >
              {/* <img className="w-6 sm:w-10 mr-2 md:mr-2" src={""} alt="" /> */}
              <span className="sm:text-2xl lg:text-3xl"> 💪 </span>
              <h1 className="text-xl sm:text-2xl cursor-pointer font-black md:text-2xl lg:text-2xl font-sans text-shadeBlack">
                FitHub
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-2">{navItems}</ul>
          </div>
          <div className="navbar-end space-x-4">
            {user ? (
              <>
                {user?.photoURL ? (
                  <>
                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="profile" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {user?.displayName ? (
                      <>
                        <div className="avatar placeholder">
                          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs uppercase">
                              {user?.displayName.slice(0, 1)}
                            </span>
                          </div>
                        </div>{" "}
                      </>
                    ) : (
                      <>
                        <div className="avatar placeholder">
                          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs uppercase">
                              {user?.email?.slice(0, 1)}
                            </span>
                          </div>
                        </div>{" "}
                      </>
                    )}
                  </>
                )}
                <PrimaryButton
                  //   onClick={handleLogOut}
                  txt="Log Out"
                  className="py-2 shadow-none"
                ></PrimaryButton>
              </>
            ) : (
              <Link to={"/login"} className="btn btn-primary text-white">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

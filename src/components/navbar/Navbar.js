import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pages/images/stmLogo.jpg";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false); // change and update states
  const setDropdown = useState(false);
  const handleClick = () => setClick(!click); // acts as a toggle
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav class="flex items-center flex-wrap lg:justify-between bg-white p-6 shadow-2xl">
      <div class="sm:block sm:visible text-black fill-current hover:text-cyan-300">
        <button
          onClick={handleClick}
          className="text-black hover:bg-white transform overflow-hidden hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 fill-current visible lg:hidden mr-4 flex items-center flex-wrap px-3 py-2 shadow-xl rounded"
        >
          <FontAwesomeIcon icon={click ? faXmark : faBars} />
        </button>
      </div>
      <Link to="/" onClick={closeMobileMenu}>
        <div class="flex justify-start items-start shrink-0 text-black">
          <img
            class="shadow-xl fill-current h-8 w-12 lg:w-24 md:w-20 mr-2"
            viewBox="0 0 54 54"
            src={logo}
          ></img>
          <span class="font-semibold text-base md:text-xl tracking-tight">
            Spiritual Topography Map
          </span>
        </div>{" "}
      </Link>
      <div
        className={
          click
            ? "visible flex flex-col space-y-16 justify-center items-center w-screen h-screen z-50 hover:transition-all"
            : "sm:hidden block flex-grow lg:flex lg:items-center w-auto justify-end"
        }
      >
        <div>
          <Link
            to="/about-us"
            className={
              click
                ? "visible shadow-xl lg:inline-block text-4xl leading-none rounded text-black hover:text-cyan-300 hover:bg-white mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 col-start-2 row-span-1 p-4"
                : "hidden lg:visible shadow-xl lg:inline-block text-sm px-4 py-2 leading-none rounded text-black hover:text-cyan-300 hover:bg-white mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 col-start-2 row-span-1"
            }
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
        </div>
        <div>
          <Link
            to="/stm"
            className={
              click
                ? "visible shadow-xl lg:inline-block text-4xl leading-none rounded text-black hover:text-cyan-300 hover:bg-white mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 col-start-2 row-span-1 p-4"
                : "hidden lg:visible shadow-xl lg:inline-block text-sm px-4 py-2 leading-none rounded text-black hover:text-cyan-300 hover:bg-white mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 col-start-2 row-span-1"
            }
            onClick={closeMobileMenu}
          >
            What is a STM?
          </Link>
        </div>
        <div>
          <Link
            to="/github"
            className={
              click
                ? "visible shadow-xl lg:inline-block text-4xl leading-none rounded text-black hover:text-cyan-300 hover:bg-white mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 col-start-2 row-span-1 p-4"
                : "hidden lg:visible shadow-xl lg:inline-block text-sm px-4 py-2 leading-none rounded text-black hover:text-cyan-300 hover:bg-white mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 col-start-2 row-span-1"
            }
            onClick={closeMobileMenu}
          >
            Github
          </Link>
        </div>
        <div>
          <Link
            to="/contact-us"
            className={
              click
                ? "visible shadow-xl lg:inline-block text-4xl leading-none rounded text-black hover:text-cyan-300 hover:bg-white mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 col-start-2 row-span-1 p-4"
                : "hidden lg:visible shadow-xl lg:inline-block text-sm px-4 py-2 leading-none rounded text-black hover:text-cyan-300 hover:bg-white mt-4 lg:mt-0 transform overflow-hidden hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 col-start-2 row-span-1"
            }
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

//   return (
//     <>
//       <div className="shadow-2xl bg-white z-50 h-14 w-fdivl">
//         <nav className="navbar h-14 w-fdivl">
//           <div className="menu-icon" onClick={handleClick}>
// <i
//   className={
//     click ? "text-black fas fa-times" : " text-black fas fa-bars"
//   }
// />
//           </div>
//           <Link to="/" className="navbar-logo h-14 w-fdivl">
//             <div>
//               Spiritual Topography Map{" "}
//               <img className="logo" src={logo} alt="STM logo" />
//             </div>
//           </Link>
//           <div className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
// <Link
//   to="/about-us"
//   className="nav-links"
//   onClick={closeMobileMenu}
// >
//   About Us
// </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/stm" className="nav-links" onClick={closeMobileMenu}>
//                 What is a STM?
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/github"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Github
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/contact-us"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Contact Us
//               </Link>
//             </li>
//             {/* <Button /> */}
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }

export default Navbar;

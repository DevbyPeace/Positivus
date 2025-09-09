import logo from "../assets/Logo.svg";
import { useState } from "react";
import { X, Menu } from "lucide-react";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  function toggleMobileDrawer() {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
    <nav className="sticky top-0 z-50 pt-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container m-auto relative">
        <div className="flex justify-between items-center p-4 max-w-[97vw] mx-auto">
          <img className="w-30 lg:w-45" src={logo} alt="Logo" />

          <div>
            <ul className="hidden lg:flex justify-between items-center gap-7 ">
              <li>
                <a className="hover:border-b-3" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:border-b-3" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:border-b-3" href="#">
                  Use Cases
                </a>
              </li>
              <li>
                <a className="hover:border-b-3" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:border-b-3" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="border p-2 rounded-xl hover:bg-black hover:text-white hover:scale-300" href="#">
                  Request a quote
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMobileDrawer}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

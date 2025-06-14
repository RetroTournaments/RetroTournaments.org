import { Link } from "@remix-run/react";

// https://daisyui.com/components/navbar/

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                Information
                <ul className="p-2">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/sta">STA Format</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </li>
              <li>
                Results
                <ul className="p-2">
                  <li>
                    <Link to="/persons/">Persons</Link>
                  </li>
                  <li>
                    <Link to="/tournaments/">Tournaments</Link>
                  </li>
                  <li>
                    <Link to="/events/">Events</Link>
                  </li>
                </ul>
              </li>
              <li>
                Community
                <ul className="p-2">
                  <li>
                    <a
                      href="https://www.youtube.com/flibidydibidy"
                      className="after:content-['_↗']"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/kpYYyw8B5P"
                      className="after:content-['_↗']"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Technology
                <ul className="p-2">
                  <li>
                    <a
                      href="https://github.com/RetroTournaments/"
                      className="after:content-['_↗']"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl no-animation">
            RetroTournaments.org
          </Link>
        </div>
        <div className="navbar-end">
          <div className="hidden md:flex">
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1 no-animation">
                Information
              </div>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/sta">STA Format</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1 no-animation">
                Results
              </div>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <Link to="/persons/">Persons</Link>
                </li>
                <li>
                  <Link to="/tournaments/">Tournaments</Link>
                </li>
                <li>
                  <Link to="/events/">Events</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1 no-animation">
                Community
              </div>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <a
                    href="https://www.youtube.com/flibidydibidy"
                    className="after:content-['_↗']"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/kpYYyw8B5P"
                    className="after:content-['_↗']"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1 no-animation">
                Technology
              </div>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <a
                    href="https://github.com/RetroTournaments/"
                    className="after:content-['_↗']"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/support" className="btn btn-sm btn-accent px-5">
            Support
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

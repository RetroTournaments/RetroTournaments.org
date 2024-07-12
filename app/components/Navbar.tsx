import { Link } from '@remix-run/react';

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
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              Information
              <ul className="p-2">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a>Regulations</a></li>
                <li><a>FAQ</a></li>
              </ul>
            </li>
            <li>
              Results
              <ul className="p-2">
                <li><a>Persons</a></li>
                <li><a>Tournaments</a></li>
                <li><a>Events</a></li>
              </ul>
            </li>
            <li>
              Community
              <ul className="p-2">
                <li><a>Social</a></li>
                <li><a href="https://www.youtube.com/flibidydibidy">YouTube</a></li>
                <li><a href="https://discord.gg/kpYYyw8B5P">Discord</a></li>
              </ul>
            </li>
            <li>
              Technology
              <ul className="p-2">
                <li><a>Blog</a></li>
                <li><a>Argos</a></li>
                <li><a>Github</a></li>
              </ul>
            </li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl no-animation">RetroTournaments.org</Link>
      </div>
      <div className="navbar-end">
        <div className="hidden md:flex">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 no-animation">Information</div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a>Regulations</a></li>
              <li><a>Frequently Asked Questions</a></li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 no-animation">Results</div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Persons</a></li>
              <li><a>Tournaments</a></li>
              <li><a>Events</a></li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 no-animation">Community</div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Social</a></li>
              <li><a href="https://www.youtube.com/flibidydibidy">YouTube</a></li>
              <li><a href="https://discord.gg/kpYYyw8B5P">Discord</a></li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 no-animation">Technology</div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Blog</a></li>
              <li><a>Argos</a></li>
              <li><a>Github</a></li>
            </ul>
          </div>
        </div>
        <Link to="/support" className="btn btn-sm btn-accent px-5">Support</Link>
      </div>
    </div>
  </>
  );
}

export default Navbar;

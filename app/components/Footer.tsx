import MailingListForm from './MailingListForm'
import { Link, Form } from '@remix-run/react';

function Footer({ newsletterInfo }) {
  return (
  <>
    <div className="flex bg-base-200 justify-center">
      <footer className="footer bg-base-200 text-base-content p-10 max-w-4xl justify-between">
        <nav>
          <h6 className="footer-title">Information</h6>
          <Link to="/about" className="link link-hover">About</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Results</h6>
          <Link to="/persons/">Persons</Link>
          <Link to="/tournaments/">Tournaments</Link>
          <Link to="/events/">Events</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Community</h6>
          <Link to="/support" className="link link-hover text-accent">Support</Link>
          <a href="https://www.youtube.com/flibidydibidy" className="link link-hover">YouTube↗</a>
          <a href="https://discord.gg/kpYYyw8B5P" className="link link-hover">Discord↗</a>
        </nav>

        <MailingListForm newsletterInfo={newsletterInfo}/>

      </footer>
    </div>
  </>
  );
}

export default Footer;

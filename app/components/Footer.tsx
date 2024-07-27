import MailingListForm from './MailingListForm'
import { Link, Form } from '@remix-run/react';

function Footer({ newsletterInfo }) {
  return (
  <>
    <div className="flex bg-base-200 justify-center">
      <footer className="footer bg-base-200 text-base-content p-10 max-w-6xl">
        <nav>
          <h6 className="footer-title">Information</h6>
          <Link to="/about" className="link link-hover">About</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
          <Link to="/regulations">Regulations</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Results</h6>
          <Link to="/persons/">Persons</Link>
          <a className="link link-hover">Tournaments</a>
          <a className="link link-hover">Events</a>
        </nav>
        <nav>
          <h6 className="footer-title">Community</h6>
          <a className="link link-hover">Social</a>
          <a href="https://www.youtube.com/flibidydibidy" className="link link-hover">YouTube↗</a>
          <a href="https://discord.gg/kpYYyw8B5P" className="link link-hover">Discord↗</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to="/termsofuse" className="link link-hover">Terms of use</Link>
          <Link to="/privacypolicy" className="link link-hover">Privacy policy</Link>
          <Link to="/support"> <h6 className="footer-title text-accent">Support</h6> </Link>
        </nav>

        <MailingListForm newsletterInfo={newsletterInfo}/>

      </footer>
    </div>
  </>
  );
}

export default Footer;

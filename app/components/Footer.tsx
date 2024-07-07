import { Link, Form } from '@remix-run/react';

function Footer({ newsletterInfo }) {
  return (
  <>
    <div className="flex bg-base-200 justify-center">
      <footer className="footer bg-base-200 text-base-content p-10 max-w-6xl">
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Regulations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Results</h6>
          <a className="link link-hover">Persons</a>
          <a className="link link-hover">Tournaments</a>
          <a className="link link-hover">Events</a>
        </nav>
        <nav>
          <h6 className="footer-title">Community</h6>
          <a className="link link-hover">Social</a>
          <a className="link link-hover">YouTube</a>
          <a className="link link-hover">Discord</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <Link to="/support"> <h6 className="footer-title text-accent">Support</h6> </Link>
        </nav>
          <Form method="post">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <div className="join">
              <input type="text" name="newsletteremail" id="newsletteremail" placeholder="example@domain.com" className="input input-bordered join-item" />
              <button type="submit" name="newsletter" value="True" className="btn btn-primary join-item">Subscribe</button>
            </div>
            {newsletterInfo? (
              <span className="font-medium pt-2"> {newsletterInfo} </span>
            ) : 
              null
            }
          </fieldset>
        </Form>
      </footer>
    </div>
  </>
  );
}

export default Footer;

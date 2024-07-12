import { Form } from '@remix-run/react';

function MailingListForm({ newsletterInfo }) {
  return (
  <>
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
  </>
  );
}

export default MailingListForm;


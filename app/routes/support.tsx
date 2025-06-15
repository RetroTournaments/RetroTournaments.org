import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { isNewsletterSignup } from "../util/newsletter";
import { useActionData } from "@remix-run/react";
import supportGif from "../img/2-support.gif";
import stripe from "../util/stripe";

export async function action({ request }) {
  const formData = await request.formData();
  if (formData.get("newsletter")) {
    return await isNewsletterSignup(formData);
  }

  // Check if Stripe is available
  if (!stripe) {
    console.warn("Stripe API key not configured - payment processing disabled");
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1RV5RPE6IdosAkGC9ZeftkAL",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: process.env.BASE_URL + "/support",
  });
  return redirect(session.url);
}

export default function Support() {
  const actionData = useActionData();

  return (
    <div className="flex flex-col items-center justify-center mx-auto p-4 w-full max-w-4xl">
      <div className="w-full">
        <article className="prose p-4 max-w-4xl">
          <h1>Support</h1>
          <p>
            Thank you for considering supporting the Retro Tournaments
            Organization. There are a few things you can do.
          </p>
          <h2>Donate directly</h2>
          <p>
            Donating directly is the absolute best way to support the project
            and ensure that there are more events, more work to extend the
            software to additional games, better content surrounding the events,
            and more opportunities.
          </p>
          <p>
            All funds are used to further the project by paying for retro
            equipment, funding the prize pools, software development, and other
            expenses. Contributors who donate over $50 USD will be included in
            future vignettes like the one at the bottom of this page.
          </p>

          <div className="flex flex-col items-center justify-center mx-auto p-4 w-full max-w-4xl">
            <div className="card bg-primary text-primary-content w-96">
              <div className="card-body">
                <h2 className="card-title">Over $4,000 in prize pools!</h2>
                <p>
                  Our tournaments have given over 4,000 dollars in winnings to
                  speedrunners competing in our events. Contribute now to bring
                  that number even higher!
                </p>
                <div className="card-actions justify-end">
                  <Form method="post">
                    <button
                      className="btn"
                      type="submit"
                      name="support"
                      value="True"
                    >
                      Support Now
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>

          <h2>Donate your old hardware</h2>
          <p>
            We will always accept mostly-working consoles for any of our events.
            Currently Nintendo Entertainment Systems! Additionally, reasonable
            quality CRTs are always in high demand, just get{" "}
            <Link to="/contact">in touch!</Link>
          </p>
          <h2>Get in touch by email</h2>
          <p>
            For one time contributions, sponsorships, etc. just head over the
            the <Link to="/contact">contact page</Link> and shoot us an email.
          </p>
          <img src={supportGif} />
        </article>
      </div>
    </div>
  );
}

import { Link } from "@remix-run/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { newsletterOnlyAction } from "../util/newsletter";
import { useActionData } from "@remix-run/react";

export async function action({ request }) {
  return newsletterOnlyAction(request);
}

export default function About() {
  const actionData = useActionData();

  return (
    <>
      <Navbar />

      <div className="flex flex-row items-center justify-center mx-auto p-4">
        <article className="prose max-w-3xl">
          <h1>Who we are</h1>
          <p>
            We are a group of speedrunners, and speedrunning enthusiasts, who
            are working to celebrate retro gaming, friendly competition, and the
            joy that comes from achieving your goals.
          </p>
          <p>
            Retrotournaments.org is entirely ran by volunteers coordinating on
            our{" "}
            <a href="https://discord.gg/kpYYyw8B5P" className="link link-hover">
              Discord↗
            </a>
            , we rely on your <Link to="/support">support</Link> in order to
            develop these competitions and expand around the globe. Our
            competitions provide incredible experiences and opportunities for
            our competitors while simultaneously working to preserve retro
            technologies for future generations. We are very early in this
            process, but with your support we hope to get there sooner rather
            than later. Thank you for joining us for this fun and wild ride!
          </p>
          <blockquote>
            <h3> Our Goal </h3>
            Our goal is to create the funnest, fairest, and most incredible
            speedrunning competitions in the world where we provide meaningful
            opportunities and foster lifelong connections.
          </blockquote>

          <h2> How you can help </h2>
          <p>
            Check out the <Link to="/support">support</Link> page and chip in
            with your time or experience! We are always looking for better ways
            to improve future events, consider{" "}
            <Link to="/contact">getting in touch</Link>.
          </p>
        </article>
      </div>

      <Footer newsletterInfo={actionData?.newsletterInfo} />
    </>
  );
}

import { Link } from '@remix-run/react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { newsletterOnlyAction } from '../util/newsletter'
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
            <Link to="/">RetroTournaments.org</Link> is the home of two initiatives: the Competitive Retro Gaming Association is devoted to organizing, governing, and <Link to="/tournaments">documenting</Link> the greatest retro speedrunning competitions in the world, and <Link to="/argos">Argos</Link> is the open-source technology stack which supports those competitions and other simultaneous time attack tournaments.
            We are a group of speedrunners, and speedrunning enthusiasts, who are working to celebrate retro gaming, friendly competition, and the joy that comes from achieving your goals.
        </p>
        <p>
            The CRGA and Argos are both entirely ran by volunteers, we rely on your <Link to="/support">support</Link> in order to develop these competitions and expand around the globe.
            Our competitions provide incredible experiences and opportunities for our competitors while simultaneously working to preserve retro technologies for future generations.
            We are very early in this process, but with your support we hope to get there sooner rather than later.
            Thank you for joining us for this fun and wild ride!
        </p>
        <blockquote>
            <h3> Our Goal </h3>
            Our goal is to create the funnest, fairest, and most incredible speedrunning competitions in the world where we provide meaningful opportunities and foster lifelong connections.
        </blockquote>

        <h1> Organization </h1>
        <p>
            We're just getting started here, so the CRGA is ran by two dedicated volunteers and a small community on <a href="https://discord.gg/kpYYyw8B5P">Discord</a>.
            Matthew Deutsch (the one currently writing this) is an engineer with experience in mathematical optimization and mining engineering.
            What is speedrunning except for an applied optimization problem? A natural fit.
        </p>

        <p>
            Anthony is a videographer with a broad skillset encompassing all of the filming, editing, and mastering of the produced content.
            Both Anthony and Matthew have a strong connection to and affinity for retro gaming and competition.
        </p>

        <h2> What's next for us </h2>
        <p>
            Honestly we're still trying to find our audience and create a sustainable platform!
            The feedback from competitors and those who have been able to attend events is incredible, but that good feedback is not enough to sustain future events.
            With the help from our growing community we hope to expand to additional speedrunning events and create more exciting opportunities.
        </p>

        <h2> How you can help </h2>
        <p>
            Check out the <Link to="/support">support</Link> page and chip in with your time or experience!
            We are always looking for better ways to improve future events, consider <Link to="/contact">getting in touch</Link>.
        </p>

      </article>
      </div>

      <Footer newsletterInfo={actionData?.newsletterInfo}/>
    </>
  )
}

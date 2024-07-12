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
        <article className="prose max-w-3xl min-h-screen">
        <h1> Contact </h1>
        <p>
            The primary contact for all matters associated with the project is <a href="mailto:matthew@retrotournaments.org">matthew@retrotournaments.org</a>.
            It would be great to hear from you!
        </p>

        <p>
            You can also join the <a href="https://discord.gg/kpYYyw8B5P">Discord</a>, and leave a message in the relevant channel.
        </p>
        </article>
      </div>

      <Footer newsletterInfo={actionData?.newsletterInfo}/>
    </>
  )
}


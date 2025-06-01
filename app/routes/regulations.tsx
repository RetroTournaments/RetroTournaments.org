import { Link } from "@remix-run/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { newsletterOnlyAction } from "../util/newsletter";
import { useActionData } from "@remix-run/react";

export async function action({ request }) {
  return newsletterOnlyAction(request);
}

export default function Regulations() {
  const actionData = useActionData();

  return (
    <>
      <Navbar />

      <div className="flex flex-row items-center justify-center mx-auto p-4">
        <article className="prose max-w-3xl">
          <h1>RetroTournaments Regulations</h1>

          <p>
            The regulations are hosted in the public github repository:{" "}
            <a href="https://github.com/RetroTournaments/regulations">
              https://github.com/RetroTournaments/regulations
            </a>
            . They are currently under construction.
          </p>
        </article>
      </div>

      <Footer newsletterInfo={actionData?.newsletterInfo} />
    </>
  );
}

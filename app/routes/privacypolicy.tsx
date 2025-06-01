import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { newsletterOnlyAction } from "../util/newsletter";
import { useActionData } from "@remix-run/react";

export async function action({ request }) {
  return newsletterOnlyAction(request);
}

export default function TermsOfUse() {
  const actionData = useActionData();

  return (
    <>
      <Navbar />

      <div className="flex flex-row items-center justify-center mx-auto p-4">
        <article className="prose max-w-3xl">
          <h1> Privacy Policy </h1>
          <p>This privacy policy is under construction.</p>
        </article>
      </div>

      <Footer newsletterInfo={actionData?.newsletterInfo} />
    </>
  );
}

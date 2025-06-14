import Footer from "../components/Footer";
import PersonHeading from "../components/PersonHeading.tsx";
import PersonSummary from "../components/PersonSummary.tsx";
import PersonRandom from "../components/PersonRandom.tsx";
import PersonRecords from "../components/PersonRecords.tsx";
import PersonTournaments from "../components/PersonTournaments.tsx";
import { useLoaderData, useActionData } from "@remix-run/react";
import { getPerson, randomPersonCRGAId } from "../util/person.tsx";
import { getEventLeaderboard } from "../util/event.tsx";
import { redirect } from "@remix-run/node";
import { newsletterOnlyAction } from "../util/newsletter";

export async function action({ request }) {
  return newsletterOnlyAction(request);
}

export const loader = async ({ params }) => {
  if (params.crgaid == "random") {
    return redirect("/persons/" + (await randomPersonCRGAId()));
  }
  const res = await getPerson(params.crgaid);
  if (res == null) {
    return redirect("/persons/");
  }
  return res;
};

export default function Persons() {
  const actionData = useActionData();
  const person = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center mx-auto p-4 w-full max-w-4xl">
      <div className="w-full">
        <PersonHeading person={person} />
        <PersonSummary person={person} />
        <PersonTournaments person={person} />
        <PersonRecords person={person} />
        <PersonRandom />
      </div>
    </div>
  );
}

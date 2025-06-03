import Footer from "../components/Footer";
import { useLoaderData, useActionData } from "@remix-run/react";
import { newsletterOnlyAction } from "../util/newsletter";
import { redirect } from "@remix-run/node";
import { getTournament } from "../util/tournament.tsx";
import TournamentSummary from "../components/TournamentSummary.tsx";
import TournamentFinalStandings from "../components/TournamentFinalStandings.tsx";
import TournamentRoundResults from "../components/TournamentRoundResults.tsx";

export async function action({ request }) {
  console.log(request);
  return newsletterOnlyAction(request);
}

export const loader = async ({ params }) => {
  const res = await getTournament(params.shortname);
  if (res == null) {
    return redirect("/tournaments/");
  }
  return res;
};

export default function Tournaments() {
  const tournament = useLoaderData();
  const actionData = useActionData();
  return (
    <div className="flex flex-col items-center justify-center mx-auto p-4 w-full max-w-4xl">
      <div className="w-full">
        <TournamentSummary tournament={tournament} />
        <TournamentFinalStandings tournament={tournament} />
        <TournamentRoundResults tournament={tournament} />
      </div>
    </div>
  );
}

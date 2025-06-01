import Footer from '../components/Footer'
import { getTournamentsTable } from '../util/tournament.tsx';
import { useLoaderData } from 'react-router-dom';
import { Link, useActionData } from '@remix-run/react';
import { newsletterOnlyAction } from '../util/newsletter'
import TournamentGrid from '../components/TournamentGrid.tsx';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export async function action({ request }) {
  console.log(request)
  return newsletterOnlyAction(request);
}

export async function loader({ request }) {
    return await getTournamentsTable();
}

export default function PersonsIndex() {
    const rowData = useLoaderData();
  const actionData = useActionData();

    return (
      <>
        <div className="flex flex-col items-center justify-center mx-auto p-4 w-full max-w-4xl">
          <div className="w-full">
            <article className="prose p-4">
              <h1> Tournaments </h1>
            </article>
          </div>

          <TournamentGrid rowData={rowData} />
        </div>
      <Footer newsletterInfo={actionData?.newsletterInfo}/>
      </>
    )
}


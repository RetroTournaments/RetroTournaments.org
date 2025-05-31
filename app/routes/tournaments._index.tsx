import { getTournamentsTable } from '../util/tournament.tsx';
import { useLoaderData } from 'react-router-dom';
import { Link } from '@remix-run/react';
import TournamentGrid from '../components/TournamentGrid.tsx';

export async function loader({ request }) {
    return await getTournamentsTable();
}

export default function PersonsIndex() {
    const rowData = useLoaderData();

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
      </>
    )
}


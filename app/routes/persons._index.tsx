import { getPersonsTable } from '../util/person.tsx';
import { useLoaderData } from 'react-router-dom';
import { Link } from '@remix-run/react';
import PersonGrid from '../components/PersonGrid.tsx';

export async function loader({ request }) {
    return await getPersonsTable();
}

export default function PersonsIndex() {
    const rowData = useLoaderData();

    return (
      <>
        <div className="flex flex-col items-center justify-center mx-auto p-4 w-full">
          <div className="w-[800px]">
            <article className="prose p-4">
              <h1> Persons </h1>
            </article>
          </div>

          <PersonGrid rowData={rowData} />
        </div>
      </>
    )
}

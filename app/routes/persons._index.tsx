import Footer from '../components/Footer'
import { getPersonsTable } from '../util/person.tsx';
import { useLoaderData } from 'react-router-dom';
import { Link, useActionData } from '@remix-run/react';
import PersonGrid from '../components/PersonGrid.tsx';
import PersonRandom from '../components/PersonRandom.tsx';
import { newsletterOnlyAction } from '../util/newsletter'

export async function action({ request }) {
  return newsletterOnlyAction(request);
}

export async function loader({ request }) {
    return await getPersonsTable();
}

export default function PersonsIndex() {
    const actionData = useActionData();
    const rowData = useLoaderData();

    return (
      <>
        <div className="flex flex-col items-center justify-center mx-auto p-4 w-full max-w-4xl">
          <div className="w-full">
            <article className="prose p-4">
              <h1> Persons </h1>
            </article>
          </div>

          <PersonGrid rowData={rowData} />
          <article className="prose p-4">
            <PersonRandom />
          </article>
        </div>
        <Footer newsletterInfo={actionData?.newsletterInfo}/>
      </>
    )
}

import { getEventsTable } from '../util/event.tsx';
import { useLoaderData } from 'react-router-dom';
import { Link } from '@remix-run/react';
import EventGrid from '../components/EventGrid.tsx';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export async function loader({ request }) {
    return await getEventsTable();
}

export default function PersonsIndex() {
    const rowData = useLoaderData();

    return (
      <>
        <div className="flex flex-col items-center justify-center mx-auto p-4 w-full max-w-4xl">
          <div className="w-full">
            <article className="prose p-4">
              <h1> Events </h1>
            </article>
          </div>

          <EventGrid rowData={rowData} />
        </div>
      </>
    )
}

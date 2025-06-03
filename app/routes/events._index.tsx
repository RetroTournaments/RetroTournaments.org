import Footer from "../components/Footer";
import { getEventsTable } from "../util/event.tsx";
import { useLoaderData } from "react-router-dom";
import { Link, useActionData } from "@remix-run/react";
import { newsletterOnlyAction } from "../util/newsletter";
import EventGrid from "../components/EventGrid.tsx";

export async function action({ request }) {
  return newsletterOnlyAction(request);
}

export async function loader({ request }) {
  return await getEventsTable();
}

export default function PersonsIndex() {
  const actionData = useActionData();
  const rowData = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center mx-auto p-4 w-full max-w-4xl">
      <div className="w-full">
        <article className="prose p-4">
          <h1> Events </h1>
        </article>
      </div>

      <EventGrid rowData={rowData} />
    </div>
  );
}

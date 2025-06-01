import Footer from "../components/Footer";
import { useLoaderData, useActionData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { getEvent } from "../util/event.tsx";
import EventTournaments from "../components/EventTournaments.tsx";
import EventPersonalBests from "../components/EventPersonalBests.tsx";

export async function action({ request }) {
  return newsletterOnlyAction(request);
}

export const loader = async ({ params }) => {
  const res = await getEvent(params.uriname);
  if (res == null) {
    return redirect("/events/");
  }
  return res;
};

export default function Events() {
  const actionData = useActionData();
  const event = useLoaderData();
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto p-4 w-full max-w-4xl">
        <div className="w-full">
          <article className="prose p-4 max-w-4xl">
            <h1>{event.name}</h1>
          </article>
          <EventTournaments event={event} />
          <EventPersonalBests event={event} />
        </div>
      </div>
      <Footer newsletterInfo={actionData?.newsletterInfo} />
    </>
  );
}

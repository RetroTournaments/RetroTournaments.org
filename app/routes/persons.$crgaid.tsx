import PersonHeading from '../components/PersonHeading.tsx';
import PersonSummary from '../components/PersonSummary.tsx';
import PersonRandom from '../components/PersonRandom.tsx';
import { useLoaderData } from "@remix-run/react";
import { getPerson, randomPersonCRGAId } from '../util/person.tsx';
import { redirect } from "@remix-run/node";

export const loader = async ({ params }) => {
    if (params.crgaid == 'random') {
        return redirect("/persons/" + await randomPersonCRGAId())
    }
    const res = await getPerson(params.crgaid)
    if (res == null) {
        return redirect("/persons/")
    }
    return res;
}

export default function Persons() {
  const person = useLoaderData();
  return (
    <>
        <div className="flex flex-row items-center justify-center mx-auto p-4 w-full">
          <div className="w-[800px]">
            <article className="prose p-4">
                <PersonHeading person={person} />
                <PersonSummary person={person} />
                <PersonRandom />
            </article>
          </div>
        </div>
    </>
  )
}

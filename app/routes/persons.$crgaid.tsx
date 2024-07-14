import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
    console.log(params.crgaid)
    return null
}

export default function Persons() {
  const person = useLoaderData();
  return (
    <>
    </>
  )
}

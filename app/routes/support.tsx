import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { newsletterOnlyAction } from '../util/newsletter'
import { useActionData } from "@remix-run/react";

export async function action({ request }) {
  return newsletterOnlyAction(request);
}

export default function Support() {
  const actionData = useActionData();

  return (
    <>
      <Navbar />
      <Footer newsletterInfo={actionData?.newsletterInfo}/>
    </>
  )
}

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { newsletterOnlyAction } from '../util/newsletter'
import { useActionData, Outlet } from "@remix-run/react";

export async function action({ request }) {
  return newsletterOnlyAction(request);
}

export default function Persons() {
  const actionData = useActionData();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer newsletterInfo={actionData?.newsletterInfo}/>
    </>
  )
}

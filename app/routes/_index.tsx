import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import MailingListSuccessAlert from '../components/MailingListSuccessAlert'
import { newsletterOnlyAction } from '../util/newsletter'
import { useActionData } from "@remix-run/react";

export async function action({ request }) {
  return newsletterOnlyAction(request);
}

export default function Index() {
  const actionData = useActionData();

  return (
    <>
      <MailingListSuccessAlert />
      <Navbar />
      <LandingPage />
      <Footer newsletterInfo={actionData?.newsletterInfo}/>
    </>
  )
}

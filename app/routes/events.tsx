import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { newsletterOnlyAction } from '../util/newsletter'
import { useActionData, Outlet } from "@remix-run/react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export async function action({ request }) {
  return newsletterOnlyAction(request);
}

export default function Events() {
  const actionData = useActionData();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer newsletterInfo={actionData?.newsletterInfo}/>
    </>
  )
}



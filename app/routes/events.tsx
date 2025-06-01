import Navbar from '../components/Navbar'
import { Outlet } from "@remix-run/react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export default function Events() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}



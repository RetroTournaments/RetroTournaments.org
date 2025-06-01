import Navbar from "../components/Navbar";
import { Outlet } from "@remix-run/react";

export default function Events() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

import Navbar from "../components/Navbar";
import { Outlet } from "@remix-run/react";

export default function Tournaments() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

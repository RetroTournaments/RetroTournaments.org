import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useActionData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "./tailwind.css?url";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { isNewsletterSignup } from "./util/newsletter";

export async function action({ request }) {
  const formData = await request.formData();
  return await isNewsletterSignup(formData);
}

export default function App() {
  ModuleRegistry.registerModules([AllCommunityModule]);
  const actionData = useActionData();

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
          <Navbar />
          <div className="py-6">
            <Outlet />
          </div>
          <Footer newsletterInfo={actionData?.newsletterInfo} />
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "./tailwind.css?url";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

export default function App() {
  ModuleRegistry.registerModules([AllCommunityModule]);
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

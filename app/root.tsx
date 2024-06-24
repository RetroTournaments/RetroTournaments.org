import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>

        <ul>
          <li>
            <Link to={`/person/1`}>Person</Link>
          </li>
        </ul>
        <div>
          <Outlet />
        </div>
        <Scripts />
      </body>
    </html>
  );
}

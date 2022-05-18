import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useEffect,
  ScrollRestoration,
} from "@remix-run/react";
import Tracker from '@openreplay/tracker/cjs';

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});


const tracker = new Tracker({
  projectKey: "e14PGJjMoUvCQl0fk7X2",  
});

export default function App() {
  useEffect(() => { // use componentDidMount in case of React Class Component
    tracker.start();
  }, []);
 
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

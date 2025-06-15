import { Link } from "@remix-run/react";
import { useEffect } from "react";
import MailingListForm from "./MailingListForm";

function WelcomeTextHero() {
  return (
    <>
      <div className="hero pt-6">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">WELCOME TO RETRO TOURNAMENTS</h1>
            <p className="pt-6">
              Home of the{" "}
              <Link to="/sta" className="font-bold italic text-accent">
                Simultaneous Time Attack
              </Link>
              . A fresh new competitive speedrunning format where multiple
              runners compete on identical setups combined onto the{" "}
              <b>
                <i>same screen</i>
              </b>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function YoutubeVideoHighlights() {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-3xl w-full pb-4">
          <div className="divider"></div>
          <h1 className="text-2xl font-bold">
            Check out these highlights from a past event
          </h1>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "0",
              paddingBottom: "56.25%",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/3WRWz7XG3Os?si=eZmOm2_juYXavVcq"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

function CountdownToNext() {
  useEffect(() => {
    const interval = setInterval(() => {
      let now = new Date();
      let next_date = new Date("2025-06-06T13:00:00");

      let seconds = Math.floor((next_date - now) / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);

      hours = hours - days * 24;
      minutes = minutes - (days * 24 * 60 + hours * 60);
      seconds = seconds % 60;

      let span = document.getElementById("countdown-days");
      span.textContent = `${days}`;
      span.setAttribute("style", `--value: ${days}`);

      span = document.getElementById("countdown-hours");
      span.textContent = `${hours}`;
      span.setAttribute("style", `--value: ${hours}`);

      span = document.getElementById("countdown-minutes");
      span.textContent = `${minutes}`;
      span.setAttribute("style", `--value: ${minutes}`);

      span = document.getElementById("countdown-seconds");
      span.textContent = `${seconds}`;
      span.setAttribute("style", `--value: ${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-center pb-4">
        <div className="max-w-2xl w-full">
          <div className="divider"></div>
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold">
              Countdown to{" "}
              <Link
                to="/tournaments/WarpzoneInvitational2025AnyQualifiers"
                className="link link-hover text-accent"
              >
                WarpZone Invitational 2025!!
              </Link>
            </h1>
          </div>

          <div className="flex gap-5 justify-center pt-4">
            <div>
              <span className="countdown font-mono text-4xl">
                <span id="countdown-days" style={{ "--value": 0 }}>
                  0
                </span>
              </span>
              &nbsp;days
            </div>
            <div>
              <span className="countdown font-mono text-4xl">
                <span id="countdown-hours" style={{ "--value": 0 }}>
                  0
                </span>
              </span>
              &nbsp;hours
            </div>
            <div>
              <span className="countdown font-mono text-4xl">
                <span id="countdown-minutes" style={{ "--value": 0 }}>
                  0
                </span>
              </span>
              &nbsp;minutes
            </div>
            <div>
              <span className="countdown font-mono text-4xl">
                <span id="countdown-seconds" style={{ "--value": 0 }}>
                  0
                </span>
              </span>
              &nbsp;seconds
            </div>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </>
  );
}

function LandingPage() {
  return (
    <>
      <WelcomeTextHero />
      <YoutubeVideoHighlights />
    </>
  );
}

export default LandingPage;

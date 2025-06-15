import { Link } from "@remix-run/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { newsletterOnlyAction } from "../util/newsletter";
import { useActionData } from "@remix-run/react";
import liveEventPicture from "../img/live-events.png";
import comparisonVideo from "../img/comparison.webm";

export async function action({ request }) {
  return newsletterOnlyAction(request);
}

export default function STA() {
  return (
    <div className="flex flex-row items-center justify-center mx-auto p-4">
      <article className="prose max-w-3xl">
        <h1>Simultaneous Time Attack</h1>
        <p>
          A 'time attack', or 'time trial', is a competition format where
          individuals compete against the clock and try to complete some task in
          the shortest amount of time. The most common form of speedrunning is{" "}
          <b>Real Time Attack</b>, or <b>RTA</b>, where speedrunners race
          through their games as fast as they can without stopping or pausing
          and measure their completed time based on wall time.
        </p>
        <p>
          Generally these time attacks are completed on your own time with
          unlimited resets and as much intervening practice as you like.
          Speedrunners compete <i>asynchronously</i> from their homes, recording
          their attempts and submitting them to a centralized leaderboard. This
          style of speedrunning competition has lead to some incredible stories
          that can span decades.
        </p>
        <p>
          However, their is another form of speedrunning competition that has
          some distinct differences. <b>Simultaneous Time Attack</b>, or
          <b>STA</b>, speedrunning competitions are characterized by having
          multiple speedrunners competing at the same time on individual setups.
          Each speedrunner starts their attempt simultaneously with their
          competitors, and the winner is the one who finished the speedrun
          first. No resets are allowed, so runners are forced to adapt their
          strategies and tactics to this fundamentally different format where
          consistency is king.
        </p>
        <p>
          In a RTA environment the speedruns are characterized by continuously
          incorporating riskier and more difficult strategies to bring down the
          overall time. A RTA speedrunner at the highest level might incorporate
          hundreds of small improvements to their runs that all have a non-zero
          probability of failure due to randomness inherent in the game or
          operator error. This leads to hundreds or thousands of resets when
          just one trick goes wrong. But in a simultaneous time attack
          environment resets are off the table, and if a trick goes wrong you
          have to know how to adapt and continue on.
        </p>

        <h2>STA for live events</h2>

        <img src={liveEventPicture} />

        <p>
          The Simultaneous time attack format is well suited to live
          speedrunning events when a group of speedrunners congregate and want
          to engage in some friendly competition. By having runners compete
          simultaneously new strategies are warranted and a different skillset
          is engaged. Strong nerves, and the ability to handle pressure are
          required. It can be a much more intense environment where the stakes
          are higher.
        </p>

        <blockquote>
          <p>
            "The last events have been an absolute blast and attending them was
            the most fun I've had in a very long time!" -Niftski
          </p>
        </blockquote>

        <p>
          Success in a simultaneous time attack tournament requires a wide
          skillset and the ability to adapt to how the other competitor's
          speedruns are progressing. Past competitors have described
          simultaneous time attack tournaments as incredible rewarding,
          challenging, and most of all: Fun! This is in part because of the
          strong potential for incredible comebacks, upsets, and exciting
          moments.
        </p>

        <p>
          Live simultaneous time attack tournaments can also offer additional
          opportunities and rewards for speedrunners that may have a substantial
          prize pool. This creates exciting opportunities for rivalries and
          extended competition over many years.
        </p>

        <h2>The technological challenges</h2>

        <p>
          There are practical and technological challenges with the simultaneous
          time attack format. Chiefly, it can be very hard to watch - unless
          custom technology is used to improve the experience. It is simply not
          viable to display each runner's individual game capture side by side.
        </p>

        <figure>
          <video
            controls
            loop
            width="100%"
            onclick="this.paused ? this.play() : this.pause(); arguments[0].preventDefault();"
          >
            Add commentMore actions
            <source src={comparisonVideo} type="video/webm"></source>
          </video>
          <figcaption>
            Comparing a conventional three player race view (left) with the
            Simultaneous Time Attack combined view (right).
          </figcaption>
        </figure>

        <p>
          Unless you have an extremely intimate understanding of the speedrun
          route and are paying extremely close attention you will be unable to
          follow everything that is going on. Putting a bunch of individual game
          captures up on screen and expecting the audience to follow, let alone
          enjoy, the experience is unrealistic. Therefore it is vital to
          synthesize and combine that information into a format that is
          approachable, understandable, and exciting.
        </p>

        <p>
          This is the motivation behind{" "}
          <a
            href="https://github.com/RetroTournaments/static"
            className="link link-hover after:content-['_↗']"
          >
            Static
          </a>
          , which is an open source platform for simultaneous time attack
          events. We are continuously improving and developing Static to make
          the simultaneous time attack format possible.
        </p>

        <h2> Why not just call it 'racing'? </h2>

        <p>
          Yes, I admit the 'Simultaneous Time Attack' name is a little bit
          strange when people have been doing this for years and calling it
          racing, of course without the custom technology.
        </p>

        <p>
          The fundamental difference between a simultaneous time attack and a
          race is that in essentially every kind of race the competitors are
          able to directly influence one another. That is, in a car race you can
          literally cut infront of someone and force them to adapt because if
          they don't slow down or turn they're going to hit you. But in a STA
          the speedrunners are competing on individual isolated setups which do
          not interact directly. Each runner is playing the game as if they were
          just completing a normal speedrun at home.
        </p>

        <p>
          However, there are interactions between the runners outside the game
          as they respond to what is happening in the game. A runner who knows
          that they are ahead of the competition might decide to adopt a safer,
          but slower, path through a level in order to maintain their lead
          without risking it all for a second or two. Conversely a runner who
          knows they are just a bit behind their friend might decide to risk the
          faster, but less consistent, tactic in a last minute bid to win.
        </p>

        <p>
          So, because speedrunners in this format are limited to only indirect
          interaction with one another and because we want to emphasize our
          connection with the real time attack format, 'simultaneous time
          attack' seems like a great option. But yeah, racing isn't wrong
          either.
        </p>

        <h2> The live time attack format </h2>

        <p>
          Another great time attack format that is well suited to certain live
          competitions is the <b>Live Time Attack</b> format. In a live time
          attack event speedrunners are given a set amount of time within which
          they must complete a faster speedrun than their fellow competitors.
          They are allowed to reset as much as they want, just as if they were
          at home doing a normal RTA. The alloted time for the LTA generally far
          exceeds the normal time of a single speedrun, to that they can
          complete several runs and bring their times down over the course of
          the event.
        </p>

        <p>
          A live time attack tournament is a great way to showcase riskier
          strategies and more impressive tricks while still retaining the
          competitiveness and excitement of live events. It's not uncommon for a
          speedrunner to put up a reasonable time quickly and then work to
          defend it over the rest of the tournaments as other speedrunners
          increasingly go for more difficult routs in order to beat it. Whereas
          a STA is will suited to a more general audience a LTA requires a
          longer time investment to enjoy, potentially several hours.
        </p>

        <h2> What now </h2>

        <p>
          So are you interested in being part of a simultaneous time attack
          event? You can join the{" "}
          <a
            href="https://discord.gg/kpYYyw8B5P"
            className="link link-hover after:content-['_↗']"
          >
            Discord
          </a>
          , or get in{" "}
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          . Throw your email in the mailing list as well to ensure you're
          notified of upcoming events.
        </p>
      </article>
    </div>
  );
}

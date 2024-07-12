import { Link } from '@remix-run/react';
import MailingListForm from './MailingListForm'

function WelcomeTextHero() {
  return (
  <>
    <div className="hero bg-base-100 min-h-80">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">WELCOME TO RETRO TOURNAMENTS</h1>
          <p className="py-6">
            Welcome to the home of the <Link className="link link-primary" to="/about">Competitive Retro Gaming Association (CRGA)</Link>: A group of people working towards funner, and fairer, retro speedrunning competitions.
            And also to the home of <Link className="link link-primary" to="/argos">Argos</Link>: the original open-source technology stack for simultaneous time attack tournaments.
            We hope to see you at the next event!
          </p>
        </div>
      </div>
    </div>
  </>
  );
}

function SimulTimeAttackHero() {
  return (
  <>
  <div className="hero bg-base-100 min-h-96">
    <div className="hero-content flex-col sm:flex-row">
      <img
        src="/sta_1.png"
        className="max-w-sm rounded-lg shadow-2xl" />
      <div className="max-w-3xl pl-8">
        <h4 className="text-3xl">Home of the</h4> 
        <h1 className="text-5xl font-bold"><span className="text-primary"><i>Simultaneous Time Attack</i></span></h1>
        <p className="py-6">
            A fresh new competitive speedrunning format where multiple runners compete simultaneously on identical setups combined onto the <i>same screen</i>.
            This format is more exciting, easier to follow, and way funner!
        </p>
        <Link to="/about"><button className="btn btn-primary">Learn more</button></Link>
      </div>
    </div>
  </div>
  </>
  );
}

function LandingPage() {
  return (
    <>
    <WelcomeTextHero />
    <SimulTimeAttackHero />
    </>
  );
}

export default LandingPage;

import { dateFormatted } from '../util/datefmt.tsx'

function TournamentSummary({ tournament }) {
    return (
    <>
        <article className="prose p-4 max-w-4xl">
            <h1>
                { tournament.name }
            </h1>
            <ul>
            <li> Date: <b>{dateFormatted(tournament.date)}</b> </li>
            <li> Event: <b>{tournament.event.name}</b></li>
            </ul>
        </article>
    </>
    );
}
export default TournamentSummary;

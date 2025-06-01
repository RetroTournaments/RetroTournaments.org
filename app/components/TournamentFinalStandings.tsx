import { Link } from '@remix-run/react';
import { AgGridReact } from 'ag-grid-react';
import { smb_time_format } from '../util/smb'
import { ordinal } from '../util/ordinal'
import { personLink } from '../util/person'
import { getTheme } from '../util/aggridtheme';

function TournamentFinalStandings({ tournament }) {
    const summary = {}
    for (const rnd of tournament.results) {
        const crgaid = rnd.person.crgaid;
        if (!(crgaid in summary)) {
            summary[crgaid] = {
                points: 0,
                best: "DNF",
                best_time: 0
            }
        }

        summary[crgaid].points += rnd.accruedPoints;
        if (summary[crgaid].best == "DNF" ||
            (rnd.resultCode == 0 && rnd.elapsedMilliseconds < summary[crgaid].best_time)) {
            summary[crgaid].best = smb_time_format(rnd.elapsedMilliseconds)
            summary[crgaid].best_time = rnd.elapsedMilliseconds
        }
    }
    const colDefs = [
        { headerName: 'Standing', field: 'standing', flex: 0.5,
        cellRenderer: (p) => {
            return ordinal(p.value);
        }
        },
        { headerName: 'Person', valueGetter: 'data.person.alias', flex: 2,
        cellRenderer: (p) => {
            return personLink(p.data.person.crgaid, p.value);
        },
        },
        { headerName: 'Best Time', flex: 1,
        cellRenderer: (p) => {
            return (
            <>
                {summary[p.data.person.crgaid].best}
            </>
            )
        }, sortable: false
        },
        { headerName: 'Total Points', flex: 1,
        cellRenderer: (p) => {
            return (
            <>
                {summary[p.data.person.crgaid].points}
            </>
            )
        }, sortable: false
        },
    ]
    return (
    <>
        <article className="prose p-4 max-w-4xl">
            <h2>
                Final Standings
            </h2>
        </article>
        <div className="ag-theme-quartz-auto-dark" style={{ width:"100%"}} >
            <AgGridReact
                theme={getTheme()}
                rowData={tournament.standings}
                columnDefs={colDefs}
                domLayout='autoHeight'
            />
        </div>
    </>
    );
}
export default TournamentFinalStandings;

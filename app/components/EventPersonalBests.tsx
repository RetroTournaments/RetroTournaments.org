import { Link } from '@remix-run/react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { personLink } from '../util/person';
import { ordinal } from '../util/ordinal'
import { dateCellRenderer } from '../util/datefmt'
import { smb_time_format } from '../util/smb'

function EventPersonalBests({ event }) {
    const colDefs = [
        { headerName: 'Standing', flex: 0.8, field: "standing",
        cellRenderer: (p) => {
            return ordinal(p.value);
        }},
        { headerName: 'Person', flex: 1.3, cellRenderer: (p) => {
            return personLink(p.data.person.crgaid, p.data.person.alias);
        }},
        { headerName: 'Tournament', flex: 2.0, cellRenderer: (p) => {
            return (<>
                <Link to={`/tournaments/${p.data.tournament.shortName}`}> 
                    <span className="underline">  Round {p.data.result.roundNumber} - {p.data.tournament.name} </span>
                </Link>
            </>)
        }},
        { headerName: 'Date', flex: 1.0, valueGetter: "data.tournament.date", 
            cellRenderer: dateCellRenderer
        },
        { headerName: 'Best Time', flex: 1.0, valueGetter: 'data.result.elapsedMilliseconds',
        cellRenderer: (p) => {
            return smb_time_format(p.value)
        }},
        //{ headerName: 'Date', flex: 0.8, sortable: true, 
        //  sort: 'desc', sortingOrder: ["desc", "asc"],
        //  cellRenderer: (p) => {
        //    return dateFormatted(p.data.date)
        //  },
        //  comparator: tournamentComparator},
        //{ headerName: 'Tournament', field: 'name', flex: 2,
        //    cellRenderer: (p) => {
        //    return tournamentLink(p.value, p.data.shortName);
        //    },
        //},
        //{ headerName: 'Races', valueGetter: 'data._count.results', flex: 0.5},
        //{ headerName: 'Persons', valueGetter: 'data._count.standings', flex: 0.5},
        //{ headerName: 'Champion', flex: 0.5,
        //    cellRenderer: (p) => {
        //        if (p.data.standings.length == 1) {
        //            const v = p.data.standings[0].person
        //            return personLink(v.crgaid, v.alias);
        //        } else {
        //            return ""
        //        }
        //    }
        //},
    ]

    return (
        <>
            <article className="prose p-4">
                <h2> Event Leaderboard </h2>
            </article>
            <div className="ag-theme-quartz-auto-dark" style={{ width:"100%" }} >
                <AgGridReact
                    rowData={event.personalBests}
                    columnDefs={colDefs}
                    domLayout='autoHeight'
                />
            </div>
        </>
    )
}
export default EventPersonalBests;



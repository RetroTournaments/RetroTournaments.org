import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { extractPersonTournaments } from '../util/person.tsx';
import { tournamentComparator } from '../util/tournament.tsx';

function PersonTournaments({ person }) {
    const rowData = extractPersonTournaments(person);

    const colDefs = [
        { headerName: 'Date', field: 'date_fmt', flex: 1, sortable: true, 
          sort: 'desc', sortingOrder: ["desc", "asc"],
          comparator: tournamentComparator},
        { headerName: 'Tournament', field: 'tournament', flex: 2 },
        { headerName: 'Event', field: 'event', flex: 1 },
        { headerName: 'Standing', field: 'standing', flex: 0.5 },
    ]

    return (
        <>
            <article className="prose p-4">
                <h2> Tournament Performance </h2>
            </article>
            <div className="ag-theme-quartz-auto-dark" style={{ width:"100%" }} >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    domLayout='autoHeight'
                />
            </div>
        </>
    )
}
export default PersonTournaments;

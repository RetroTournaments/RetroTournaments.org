import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { extractPersonSummary } from '../util/person.tsx';

function PersonSummary({ person }) {
    const rowData = extractPersonSummary(person);

    const colDefs = [
        { headerName: 'Date Joined', field: 'member_since', flex: 1},
        { headerName: 'Tournaments Completed', field: 'num_tournaments', flex: 2 },
        { headerName: 'Races Finished', field: 'num_races', flex: 1 },
        { headerName: 'Events', field: 'num_events', flex: 1 },
        { headerName: 'Podiums', field: 'podiums', flex: 1 },
    ]

    return (
        <>
            <div className="ag-theme-quartz-auto-dark" style={{ height: 100, width:"100%"}} >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                />
            </div>
        </>
    )
}
export default PersonSummary;


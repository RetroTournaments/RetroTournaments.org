import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { extractPersonSummary } from '../util/person.tsx';

function PersonSummary({ person }) {
    const rowData = extractPersonSummary(person);

    const colDefs = [
        { headerName: 'Date Joined', field: 'member_since', width: 140 },
        { headerName: 'Tournaments Completed', field: 'num_tournaments', width: 210 },
        { headerName: 'Races Finished', field: 'num_races', width: 130 },
        { headerName: 'Events', field: 'num_events', width: 130 },
        { headerName: 'Podiums', field: 'podiums', width: 130 },
    ]

    return (
        <>
            <div className="ag-theme-quartz-auto-dark" style={{ height: 100,  width:800}} >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                />
            </div>
        </>
    )
}
export default PersonSummary;


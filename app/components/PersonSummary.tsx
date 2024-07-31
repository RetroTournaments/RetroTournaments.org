import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { extractPersonSummary } from '../util/person.tsx';

function PersonSummary({ person }) {
    const rowData = extractPersonSummary(person);

    const colDefs = [
        { headerName: 'Joined', field: 'member_since', width: 160 },
        { headerName: 'Tournaments', field: 'num_tournaments', width: 140 },
        { headerName: 'Races', field: 'num_races', width: 100 },
        { headerName: 'Events', field: 'num_events', width: 100 },
        { headerName: 'Podiums', field: 'podiums', width: 100 },
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


import { AgGridReact } from 'ag-grid-react';
import { extractPersonSummary } from '../util/person';
import { getTheme } from '../util/aggridtheme';

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
            <div style={{ height: 100, width:"100%"}} >
                <AgGridReact
                    theme={getTheme()}
                    rowData={rowData}
                    columnDefs={colDefs}
                />
            </div>
        </>
    )
}
export default PersonSummary;


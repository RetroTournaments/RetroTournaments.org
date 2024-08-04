import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { getPersonRecords } from '../util/person.tsx';

function PersonRecords({ person }) {
    const rowData = getPersonRecords(person);

    const colDefs = [
        { headerName: 'Event', field: 'event', width: 190 },
        { headerName: 'Personal Best', field: 'personal_best', width: 170 },
        { headerName: 'PB Standing', field: 'pb_standing', width: 130 },
    ]

    return (
        <>
            <h2> Personal Records </h2>

            <div className="ag-theme-quartz-auto-dark" style={{ height: 100,  width:800}} >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
            />
            </div>
        </>
    )
}
export default PersonRecords;


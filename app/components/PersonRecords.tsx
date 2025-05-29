import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { getPersonRecords } from '../util/person.tsx';

function PersonRecords({ person }) {
    const rowData = getPersonRecords(person);

    const colDefs = [
        { headerName: 'Event', field: 'event', width: 250 },
        { headerName: 'Personal Best', field: 'personal_best', width: 170 },
    ]

    return (
        <>
            <h2> Personal Records </h2>

            <div className="ag-theme-quartz-auto-dark" style={{ width:800}} >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                domLayout='autoHeight'
            />
            </div>
        </>
    )
}
export default PersonRecords;


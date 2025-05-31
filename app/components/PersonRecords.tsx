import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { getPersonRecords } from '../util/person.tsx';

function PersonRecords({ person }) {
    const rowData = getPersonRecords(person);

    const colDefs = [
        { headerName: 'Event', field: 'event', flex: 2 },
        { headerName: 'Personal Best', field: 'personal_best', flex: 1 },
    ]

    return (
        <>
            <article className="prose p-4">
                <h2> Personal Records </h2>
            </article>

            <div className="ag-theme-quartz-auto-dark" style={{ width:"100%"}} >
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


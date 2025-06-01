import { AgGridReact } from 'ag-grid-react';
import { getPersonRecords } from '../util/person.tsx';
import { eventLink } from '../util/event.tsx';
import { getTheme } from '../util/aggridtheme';

function PersonRecords({ person }) {
    const rowData = getPersonRecords(person);

    const colDefs = [
        { headerName: 'Event', field: 'event', flex: 2,
        cellRenderer: (p) => {
            return eventLink(p.value, p.data.uriName);
        }},
        { headerName: 'Personal Best', field: 'personal_best', flex: 1 },
    ]

    return (
        <>
            <article className="prose p-4">
                <h2> Personal Records </h2>
            </article>

            <div className="ag-theme-quartz-auto-dark" style={{ width:"100%"}} >
            <AgGridReact
                theme={getTheme()}
                rowData={rowData}
                columnDefs={colDefs}
                domLayout='autoHeight'
            />
            </div>
        </>
    )
}
export default PersonRecords;


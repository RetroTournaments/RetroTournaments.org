import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { extractPersonTournaments } from '../util/person.tsx';

function PersonTournaments({ person }) {
    const rowData = extractPersonTournaments(person);

    const colDefs = [
        { headerName: 'Date', field: 'date', width: 140, sortable: true, 
          sort: 'desc', sortingOrder: ["desc", "asc"],
          comparator: (valueA, valueB, nodeA, nodeB, isInverted) => {
              console.log(nodeA, nodeB)
              console.log(valueA, valueB)
              const dateA = new Date(nodeA.data.isodate).getTime();
              const dateB = new Date(nodeB.data.isodate).getTime();
              console.log(dateA, dateB)
              if (dateA == dateB) {
                if (nodeA.data.event_order < nodeB.data.event_order) {
                    return -1;
                } else {
                    return 1;
                }
              }
              if (dateA < dateB) {
                  return -1;
              } else {
                  return 1;
              }
          }},
        { headerName: 'Tournament', field: 'tournament', width: 390 },
        { headerName: 'Event', field: 'event', width: 140 },
        { headerName: 'Standing', field: 'standing', width: 100 },
    ]

    return (
        <>
            <h2> Tournament Performance </h2>
            <div className="ag-theme-quartz-auto-dark" style={{ width:800 }} >
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

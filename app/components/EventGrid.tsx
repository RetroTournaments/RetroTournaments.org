import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Link } from '@remix-run/react';

function EventGrid({ rowData }) {
    const colDefs = [
    { headerName: 'Name', field: "name", flex: 2,
    cellRenderer: (p) => {
        return (<>
            <Link to={p.data.uriName}> <span className="underline"> {p.value} </span> </Link>
            
        </>)
    }

    },
    { headerName: 'Tournaments', valueGetter: "data._count.tournaments", flex: 1 },
    { headerName: 'Rounds', valueGetter: "data._count.tournamentRoundResults", flex: 1 },
    { headerName: 'Competitors', valueGetter: "data._count.personalBests", flex: 1 },
//        { headerName: 'Date', valueGetter: "data.date", flex: 1.3,
//          suppressMovable: true,
//          sortable: true, sort: 'asc', sortingOrder: ['desc', 'asc'],
//          cellRenderer: dateCellRenderer,
//          comparator: tournamentComparator,
//        },
//        { headerName: 'Tournament', field: "name", flex: 3,
//          suppressMovable: true,
//          cellRenderer: (p) => {
//            return (
//            <>
//                <Link to={p.data.shortName}> <span className="underline"> {p.value} </span> </Link>
//            </>
//            )
//          },
//        },
//        { headerName: 'Event', field: "event", flex: 1,
//          suppressMovable: true,
//          cellRenderer: (p) => {
//              return (
//              <>
//                  <span> {p.data.event.shortName} </span>
//              </>
//              )
//          },
//          comparator: (va, vb, na, nb, invert) => {
//              if (na.data.event.shortName < nb.data.event.shortName) {
//                  return -1;
//              } else if (na.data.event.shortName == nb.data.event.shortName) {
//                  return 0;
//              }
//              return 1;
//          }},
//        { headerName: 'Competitors', valueGetter: "data._count.standings", flex:1,
//          suppressMovable: true,
//        },
    ];
    return (
        <>
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
export default EventGrid;


import { AgGridReact } from 'ag-grid-react';
import { Link } from '@remix-run/react';
import moment from 'moment'
import { tournamentComparator } from '../util/tournament.tsx';
import { eventLink } from '../util/event.tsx';
import { dateCellRenderer } from '../util/datefmt.tsx';
import { getTheme } from '../util/aggridtheme';

function TournamentGrid({ rowData }) {
    const colDefs = [
        { headerName: 'Date', valueGetter: "data.date", flex: 1.3,
          suppressMovable: true,
          sortable: true, sort: 'asc', sortingOrder: ['desc', 'asc'],
          cellRenderer: dateCellRenderer,
          comparator: tournamentComparator,
        },
        { headerName: 'Tournament', field: "name", flex: 3,
          suppressMovable: true,
          cellRenderer: (p) => {
            return (
            <>
                <Link to={p.data.shortName}> <span className="underline"> {p.value} </span> </Link>
            </>
            )
          },
        },
        { headerName: 'Event', field: "event", flex: 1,
          suppressMovable: true,
          cellRenderer: (p) => {
              return eventLink(p.data.event.shortName, p.data.event.uriName);
          },
          comparator: (va, vb, na, nb, invert) => {
              if (na.data.event.shortName < nb.data.event.shortName) {
                  return -1;
              } else if (na.data.event.shortName == nb.data.event.shortName) {
                  return 0;
              }
              return 1;
          }},
        { headerName: 'Competitors', valueGetter: "data._count.standings", flex:1,
          suppressMovable: true,
        },
    ];
    return (
        <>
            <div className="ag-theme-quartz-auto-dark" style={{ height: 700,  width:"100%"}} >
                <AgGridReact
                    theme={getTheme()}
                    rowData={rowData}
                    columnDefs={colDefs}
                    pagination={true}
                    paginationAutoPageSize={true}
                />
            </div>
        </>
    )
}
export default TournamentGrid;

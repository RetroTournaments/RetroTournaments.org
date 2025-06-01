import { AgGridReact } from 'ag-grid-react';
import { tournamentComparator, tournamentLink } from '../util/tournament';
import { personLink } from '../util/person';
import { dateFormatted } from '../util/datefmt';
import { getTheme } from '../util/aggridtheme';

function EventTournaments({ event }) {
    const colDefs = [
        { headerName: 'Date', flex: 0.8, sortable: true, 
          sort: 'desc', sortingOrder: ["desc", "asc"],
          cellRenderer: (p) => {
            return dateFormatted(p.data.date)
          },
          comparator: tournamentComparator},
        { headerName: 'Tournament', field: 'name', flex: 2,
            cellRenderer: (p) => {
            return tournamentLink(p.value, p.data.shortName);
            },
        },
        { headerName: 'Races', valueGetter: 'data._count.results', flex: 0.5},
        { headerName: 'Persons', valueGetter: 'data._count.standings', flex: 0.5},
        { headerName: 'Champion', flex: 0.5,
            cellRenderer: (p) => {
                if (p.data.standings.length == 1) {
                    const v = p.data.standings[0].person
                    return personLink(v.crgaid, v.alias);
                } else {
                    return ""
                }
            }
        },
    ]

    return (
        <>
            <article className="prose p-4">
                <h2> Tournaments </h2>
            </article>
            <div className="ag-theme-quartz-auto-dark" style={{ width:"100%" }} >
                <AgGridReact
                    theme={getTheme()}
                    rowData={event.tournaments}
                    columnDefs={colDefs}
                    domLayout='autoHeight'
                />
            </div>
        </>
    )
}
export default EventTournaments;


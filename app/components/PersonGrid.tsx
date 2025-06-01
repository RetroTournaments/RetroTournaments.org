import { AgGridReact } from 'ag-grid-react';
import { Link } from '@remix-run/react';
import { getTheme } from '../util/aggridtheme';

function cellrender(p) {
    return (
        <>
            <Link to={p.data.crgaid}> <span className="underline"> {p.value} </span> </Link>
        </>
    )
}

function aliascomparator(v1, v2) {
    return v1.toLowerCase().localeCompare(v2.toLowerCase());
}

function PersonGrid({ rowData }) {
    const colDefs = [
      { field: "alias", flex: 3, cellRenderer: cellrender, comparator: aliascomparator, filter: "agTextColumnFilter", floatingFilter: true},
      { headerName: 'ID', field: "crgaid", flex: 1.2, cellRenderer: cellrender, floatingFilter: true, filter: "agTextColumnFilter"},
      { headerName: 'Tournaments', valueGetter: "data._count.standings", flex: 1},
      { headerName: 'Races', valueGetter: "data._count.results", flex: 1},
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
export default PersonGrid;


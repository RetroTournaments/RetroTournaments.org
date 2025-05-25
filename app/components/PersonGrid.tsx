import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Link } from '@remix-run/react';

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
    // Column Definitions: Defines the columns to be displayed.
    const colDefs = [
    
      { field: "alias", width: 250, cellRenderer: cellrender, comparator: aliascomparator},
      { headerName: 'ID', field: "crgaid", width: 140, cellRenderer: cellrender},
      { headerName: 'Tournaments', valueGetter: "data._count.standings", width: 140},
      { headerName: 'Races', valueGetter: "data._count.results", width: 140},
    ];

    return (
        <>
            <div className="ag-theme-quartz-auto-dark" style={{ height: 550,  width:800}} >
                <AgGridReact
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


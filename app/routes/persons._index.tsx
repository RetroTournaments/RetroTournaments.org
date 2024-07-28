import { useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { getPersonsTable } from '../util/person.tsx';
import { useLoaderData } from 'react-router-dom';
import { Link } from '@remix-run/react';

export async function loader({ request }) {
    return await getPersonsTable();
}

function cellrender( p ) {
    return (
        <>
            <Link to={p.data.crgaid}> <span className="underline"> {p.value} </span> </Link>
        </>
    )
}
    //return '<Link to="/persons/' + p.data.crgaid + '/><span className="text-red">' + p.value + '</span></Link>';

export default function PersonsIndex() {
    const rowData = useLoaderData();
 
    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
      { field: "alias", width: 250, cellRenderer: cellrender },
      { headerName: 'ID', field: "crgaid", width: 140, cellRenderer: cellrender},
      { headerName: 'Tournaments', valueGetter: "data._count.standings", width: 140},
      { headerName: 'Races', valueGetter: "data._count.results", width: 140},
    ]);

    return (
      <>
        <div className="flex flex-col items-center justify-center mx-auto p-4 w-full">
          <div className="w-[800px]">
            <article className="prose p-4">
              <h1> Persons </h1>
            </article>
          </div>
          <div className="ag-theme-quartz-auto-dark" style={{ height: 550,  width:800}} >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                pagination={true}
                paginationAutoPageSize={true}
            />
          </div>
        </div>
      </>
    )
}

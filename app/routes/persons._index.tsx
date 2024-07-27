import { useState } from "react";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { getPersonsTable } from '../util/person.tsx'

const GridExample = () => {

}

export async function loader({ request }) {
    return await getPersonsTable();
}

export default function PersonsIndex() {
 // Row Data: The data to be displayed.
 const [rowData, setRowData] = useState([
   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
   { make: "Ford", model: "F-Series", price: 33850, electric: false },
   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
 ]);
 
 // Column Definitions: Defines the columns to be displayed.
 const [colDefs, setColDefs] = useState([
   { field: "alias", width: 300 },
   { field: "id", width: 120 },
   { field: "joinDate", width:140 },
   { field: "tournaments", width: 140},
   { field: "races", width: 100 }
 ]);

 // ...

  return (
    <>
      <div className="flex flex-row items-center justify-center mx-auto p-4">
     <div className="ag-theme-quartz-auto-dark"
  style={{ height: 500,  width:900}}
 >
   <AgGridReact
       rowData={rowData}
       columnDefs={colDefs}
   />
 </div>
      </div>
    </>
  )
}

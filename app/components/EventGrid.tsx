import { AgGridReact } from "ag-grid-react";
import { Link } from "@remix-run/react";
import { getTheme } from "../util/aggridtheme";

function EventGrid({ rowData }) {
  const colDefs = [
    {
      headerName: "Name",
      field: "name",
      flex: 2,
      cellRenderer: (p) => {
        return (
          <>
            <Link to={p.data.uriName}>
              {" "}
              <span className="underline"> {p.value} </span>{" "}
            </Link>
          </>
        );
      },
    },
    {
      headerName: "Tournaments",
      valueGetter: "data._count.tournaments",
      flex: 1,
    },
    {
      headerName: "Rounds",
      valueGetter: "data._count.tournamentRoundResults",
      flex: 1,
    },
    {
      headerName: "Competitors",
      valueGetter: "data._count.personalBests",
      flex: 1,
    },
  ];
  return (
    <>
      <div className="ag-theme-quartz-auto-dark" style={{ width: "100%" }}>
        <AgGridReact
          theme={getTheme()}
          rowData={rowData}
          columnDefs={colDefs}
          domLayout="autoHeight"
        />
      </div>
    </>
  );
}
export default EventGrid;

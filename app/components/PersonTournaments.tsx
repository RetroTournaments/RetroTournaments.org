import { AgGridReact } from "ag-grid-react";
import { extractPersonTournaments } from "../util/person.tsx";
import { tournamentComparator, tournamentLink } from "../util/tournament.tsx";
import { eventLink } from "../util/event.tsx";
import { getTheme } from "../util/aggridtheme";

function PersonTournaments({ person }) {
  const rowData = extractPersonTournaments(person);

  const colDefs = [
    {
      headerName: "Date",
      field: "date_fmt",
      flex: 1,
      sortable: true,
      sort: "desc",
      sortingOrder: ["desc", "asc"],
      comparator: tournamentComparator,
    },
    {
      headerName: "Tournament",
      field: "tournament",
      flex: 2,
      cellRenderer: (p) => {
        return tournamentLink(p.value, p.data.tournament_shortname);
      },
    },
    {
      headerName: "Event",
      field: "event",
      flex: 1,
      cellRenderer: (p) => {
        return eventLink(p.value, p.data.uriName);
      },
    },
    { headerName: "Standing", field: "standing", flex: 0.5 },
  ];

  return (
    <>
      <article className="prose p-4">
        <h2> Tournament Performance </h2>
      </article>
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
export default PersonTournaments;

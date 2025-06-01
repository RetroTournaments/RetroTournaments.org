import { AgGridReact } from 'ag-grid-react';
import { personLink } from '../util/person'
import { smb_result_code_str, smb_time_format } from '../util/smb'
import { getTheme } from '../util/aggridtheme';

function TournamentRoundResults({ tournament }) {
    const rowData = tournament.results;
    const colDefs = [
    { headerName: 'Round', field: 'roundNumber', flex: 0.5,
        comparator: (v0, v1, n0, n1, is_descending) => {
            if (n0.data.roundNumber < n1.data.roundNumber) {
                return 1;
            } else if (n0.data.roundNumber == n1.data.roundNumber) {
                if (n0.data.resultCode != n1.data.resultCode) {
                    if (n0.data.resultCode < n1.data.resultCode) {
                        return 1;
                    } else {
                        return -1;
                    }
                } else {
                    if (n0.data.accruedPoints < n1.data.accruedPoints) {
                        return -1;
                    } else {
                        return 1;
                    }
                }
            }
            return -1;
        },
        sort: 'desc'
    },
    { headerName: 'Person', valueGetter: 'data.person.alias', flex: 2.0,
        cellRenderer: (p) => {
            return personLink(p.data.person.crgaid, p.value);
        },
    },
    { headerName: 'Result', field: 'resultCode', flex: 1.0,
        cellRenderer: (p) => {
            if (p.value == 0) {
                return smb_time_format(p.data.elapsedMilliseconds);
            } else {
                return smb_result_code_str(p.value);
            }
        }
    },
    { headerName: 'Points', field: 'accruedPoints', flex: 1.0 },
    ]
    return (
    <>
        <article className="prose p-4 max-w-4xl">
            <h2>
                Tournament Round Results
            </h2>
        </article>
        <div className="ag-theme-quartz-auto-dark" style={{ width:"100%"}} >
            <AgGridReact
                theme={getTheme()}
                rowData={tournament.results}
                columnDefs={colDefs}
                domLayout='autoHeight'
            />
        </div>
    </>
    );
}
export default TournamentRoundResults;


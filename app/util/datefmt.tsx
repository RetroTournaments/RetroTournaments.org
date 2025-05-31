import moment from 'moment'

export function dateFormatted(date_iso: string): string {
    return moment(date_iso).format('MMMM Do, YYYY');
}

export function dateCellRenderer(obj): string {
    const fmted = dateFormatted(obj.value);
    return (
    <>
        <span> {fmted} </span>
    </>
    )
}

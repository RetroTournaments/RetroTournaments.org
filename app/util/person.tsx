import { Link } from '@remix-run/react';
import { prisma } from './prisma'
import moment from 'moment'
import { smb_time_format } from './smb'
import { ordinal } from './ordinal'

export const getPersonsTable = async () => {
    return prisma.person.findMany({
        orderBy: [
            {
                alias: 'asc',
            },
        ],
        select: {
            alias: true,
            crgaid: true,
            _count: {
                select: {
                    standings: true,
                    results: true,
                }
            },
        },
        where: {
            active: true,
            crgaid: { not: null }
        },
    })
}

export const getPerson = async(crgaid) => {
    return prisma.person.findUnique({
        select: {
            crgaid: true,
            alias: true,
            active: true,
            topContributor: true,
            standings: {
                select: {
                    standing: true,
                    tournament: {
                        select: {
                            eventId: true,
                            event: true,
                            name: true,
                            shortName: true,
                            date: true,
                            event_order: true,
                        }
                    }
                }
            },
            personalBests: {
                select: {
                    event: true,
                    standing: true,
                    result: {
                        select: {
                            elapsedMilliseconds: true,
                        }
                    }
                }
            },
            results: true,
        },
        where: {
            crgaid: crgaid
        },
    })
}

export function extractPersonSummary(person) {
    let member_since = null;
    let podiums = 0;
    let events = new Set()
    for (const stnd of person.standings) {
        if (member_since == null || stnd.tournament.date < member_since) {
            member_since = stnd.tournament.date;
        }
        if (stnd.standing <= 3) {
            podiums++;
        }
        events.add(stnd.tournament.eventId)
    }
    member_since = moment(member_since).format('MMMM Do, YYYY')
    let num_events = events.size;
    let num_tournaments = person.standings.length;
    let num_completed = 0;
    for (const race of person.results) {
        if (race.resultCode == 0 || race.resultCode == 3) {
            num_completed++;
        }
    }
    let num_attempted = person.results.length;

    const rowData = [{
        member_since: member_since,
        num_tournaments: num_tournaments,
        num_races: num_completed + " / " + num_attempted,
        num_events: num_events,
        podiums: podiums,
    }];
    return rowData;
}

export function getPersonRecords(person) {
    const rowData = [];
    for (const v of person.personalBests) {
        rowData.push({
            "event": v.event.name,
            "uriName": v.event.uriName,
            "personal_best": 
                smb_time_format(v.result.elapsedMilliseconds) + " [" + ordinal(v.standing) + "]",
        })
    }
    return rowData;
}

export const randomPersonCRGAId = async() => {
    // TODO!!!
    const persons = await prisma.person.findMany({
        select: {
            crgaid: true
            }
        })
    if (persons.length == 0) {
        return ""
    }
    return persons[Math.floor(Math.random() * persons.length)].crgaid;
}


export function extractPersonTournaments(person) {
    let event_short_name = {}
    for (const pb of person.personalBests) {
        event_short_name[pb.event.id] = pb.event.shortName;
    }
    const rowData = [];
    for (const stnd of person.standings) {
        const date = moment(stnd.tournament.date).format('MMMM Do, YYYY')
        rowData.push({
            "date": stnd.tournament.date,
            "date_fmt": date,
            "tournament": stnd.tournament.name,
            "tournament_shortname": stnd.tournament.shortName,
            "event": event_short_name[stnd.tournament.eventId],
            "uriName": stnd.tournament.event.uriName,
            "standing": ordinal(stnd.standing),
            "event_order": stnd.tournament.event_order
        })
    }
    return rowData;
}

export function personLink(crgaid: string, alias: string) {
    return (
        <>
            <Link to={`/persons/${crgaid}`}> <span className="underline"> {alias} </span> </Link>
        </>
    )
}

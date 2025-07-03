/*
Script to seed the results from socal 2025

Uses hard coded results in this file until I get the integration with static sorted out.

    npx tsx scripts/seed_socal.ts
*/

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const RESULTS = `anydiv1 1 0 niftski 4:58.6 298574 1 8
anydiv1 1 1 gtace 4:58.3 298326 1 10
anydiv1 1 2 sullyrox 6:40.5 400488 1 2
anydiv1 1 3 jeremy 5:53.4 353370 1 3
anydiv1 1 4 mars02 5:05.0 305030 1 6
anydiv1 1 5 maximum 5:09.6 309627 1 5
anydiv1 1 6 nebula 5:23.9 323868 1 4
anydiv1 2 0 niftski 4:58.6 298611 1 10
anydiv1 2 1 gtace 4:58.6 298641 1 8
anydiv1 2 2 sullyrox 5:06.5 306511 1 4
anydiv1 2 3 jeremy 6:18.5 378493 1 2
anydiv1 2 4 mars02 5:05.6 305649 1 5
anydiv1 2 5 maximum 5:16.9 316894 1 3
anydiv1 2 6 nebula 5:03.3 303253 1 6
anydiv1 3 0 niftski 4:59.3 299308 1 8
anydiv1 3 1 gtace 4:58.7 298672 1 10
anydiv1 3 2 sullyrox 5:05.4 305447 1 5
anydiv1 3 3 jeremy 4:59.3 299322 1 6
anydiv1 3 4 mars02 5:06.1 306110 1 4
anydiv1 3 5 maximum 5:08.5 308490 1 3
anydiv1 3 6 nebula 5:20.3 320271 1 2
anydiv1 4 0 niftski 5:14.7 314696 1 4
anydiv1 4 1 gtace 5:21.3 321321 1 3
anydiv1 4 2 sullyrox 5:07.2 307198 1 6
anydiv1 4 3 jeremy 4:59.4 299358 1 10
anydiv1 4 4 mars02 5:06.0 306046 1 8
anydiv1 4 5 maximum 5:09.8 309790 1 5
anydiv1 4 6 nebula 5:49.8 349757 1 2
anydiv1 5 0 niftski 5:02.0 301987 1 6
anydiv1 5 1 gtace 5:00.4 300355 1 8
anydiv1 5 2 sullyrox 5:05.1 305095 1 5
anydiv1 5 3 jeremy 5:39.3 339293 1 2
anydiv1 5 4 mars02 5:05.3 305297 1 4
anydiv1 5 5 maximum 5:12.1 312081 1 3
anydiv1 5 6 nebula 4:58.6 298639 1 10
anydiv1 6 0 niftski 4:58.6 298558 1 10
anydiv1 6 1 gtace 5:53.8 353831 1 2
anydiv1 6 2 sullyrox 5:06.1 306113 1 4
anydiv1 6 3 jeremy 5:01.3 301288 1 6
anydiv1 6 4 mars02 5:05.3 305281 1 5
anydiv1 6 5 maximum 5:07.4 307425 1 3
anydiv1 6 6 nebula 4:59.0 299006 1 8
anydiv1 7 0 niftski 5:17.1 317144 1 6
anydiv1 7 1 gtace 4:58.9 298923 1 10
anydiv1 7 2 sullyrox --:--.-- 0 0 0
anydiv1 7 3 jeremy 5:26.5 326548 1 5
anydiv1 7 4 mars02 5:06.4 306376 1 8
anydiv1 7 5 maximum --:--.-- 0 0 0
anydiv1 7 6 nebula 6:03.9 363902 1 4
anydiv1 8 0 niftski 6:28.1 388078 1 3
anydiv1 8 1 gtace 4:59.8 299804 1 6
anydiv1 8 2 sullyrox 5:27.0 327015 1 4
anydiv1 8 3 jeremy 4:59.3 299322 1 8
anydiv1 8 4 mars02 5:04.9 304945 1 5
anydiv1 8 5 maximum --:--.-- 0 0 0
anydiv1 8 6 nebula 4:58.3 298340 1 10
anydiv1 9 0 niftski 4:58.6 298595 1 8
anydiv1 9 1 gtace 6:03.4 363383 1 2
anydiv1 9 2 sullyrox 5:02.1 302081 1 6
anydiv1 9 3 jeremy 5:42.2 342234 1 3
anydiv1 9 4 mars02 5:05.1 305081 1 5
anydiv1 9 5 maximum 5:09.5 309522 1 4
anydiv1 9 6 nebula 4:58.6 298576 1 10
anydiv1 10 0 niftski 5:02.1 302102 1 8
anydiv1 10 1 gtace --:--.-- 0 0 0
anydiv1 10 2 sullyrox 5:49.5 349459 1 4
anydiv1 10 3 jeremy 6:47.1 407130 1 3
anydiv1 10 4 mars02 5:05.0 304997 1 6
anydiv1 10 5 maximum 5:06.3 306282 1 5
anydiv1 10 6 nebula 5:00.8 300805 1 10
anydiv2 1 0 8bitlord --:--.-- 0 0 0
anydiv2 1 1 vinz 5:11.4 311385 1 8
anydiv2 1 2 tmgd 5:04.8 304781 1 10
anydiv2 1 3 sprsonic --:--.-- 0 0 0
anydiv2 1 4 nebula 5:27.2 327211 1 5
anydiv2 1 5 kosmic 5:23.1 323118 1 6
anydiv2 1 6 stewie 5:28.7 328655 1 4
anydiv2 2 0 8bitlord 5:08.7 308724 1 4
anydiv2 2 1 vinz 5:07.1 307144 1 5
anydiv2 2 2 tmgd 5:01.5 301468 1 8
anydiv2 2 3 sprsonic 5:04.6 304601 1 6
anydiv2 2 4 nebula 4:58.6 298606 1 10
anydiv2 2 5 kosmic 5:23.1 323117 1 3
anydiv2 2 6 stewie 6:42.3 402290 1 2
anydiv2 3 0 8bitlord --:--.-- 0 0 0
anydiv2 3 1 vinz 5:08.7 308675 1 5
anydiv2 3 2 tmgd --:--.-- 0 0 0
anydiv2 3 3 sprsonic 5:04.0 303951 1 6
anydiv2 3 4 nebula 4:59.3 299288 1 10
anydiv2 3 5 kosmic 4:59.4 299373 1 8
anydiv2 3 6 stewie 5:09.6 309639 1 4
anydiv2 4 0 8bitlord 5:14.4 314365 1 5
anydiv2 4 1 vinz --:--.-- 0 0 0
anydiv2 4 2 tmgd 5:29.6 329574 1 4
anydiv2 4 3 sprsonic 5:08.8 308837 1 8
anydiv2 4 4 nebula 5:01.1 301086 1 10
anydiv2 4 5 kosmic 5:49.9 349877 1 3
anydiv2 4 6 stewie 5:10.6 310635 1 6
anydiv2 5 0 8bitlord 5:09.7 309710 1 5
anydiv2 5 1 vinz 5:12.5 312533 1 4
anydiv2 5 2 tmgd 5:01.5 301488 1 10
anydiv2 5 3 sprsonic 5:07.4 307396 1 6
anydiv2 5 4 nebula 5:06.5 306460 1 8
anydiv2 5 5 kosmic 5:34.2 334164 1 3
anydiv2 5 6 stewie 5:42.0 341955 1 2
anydiv2 6 0 8bitlord 5:30.0 330041 1 5
anydiv2 6 1 vinz 5:08.7 308711 1 8
anydiv2 6 2 tmgd 5:01.5 301520 1 10
anydiv2 6 3 sprsonic 6:45.9 405861 1 3
anydiv2 6 4 nebula 5:19.4 319441 1 6
anydiv2 6 5 kosmic 5:56.8 356765 1 4
anydiv2 6 6 stewie --:--.-- 0 0 0
anydiv3 1 0 spiker 5:27.3 327294 1 8
anydiv3 1 1 stewie 6:05.7 365716 1 6
anydiv3 1 2 scrim 6:26.2 386232 1 5
anydiv3 1 3 dj_aj 5:15.2 315213 1 10
anydiv3 1 4 leendore --:--.-- 0 0 0
anydiv3 2 0 spiker 6:48.0 408011 1 5
anydiv3 2 1 stewie 5:23.3 323318 1 8
anydiv3 2 2 scrim 5:06.5 306543 1 10
anydiv3 2 3 dj_aj 6:46.6 406631 1 6
anydiv3 2 4 leendore --:--.-- 0 0 0
anydiv3 3 0 spiker 5:29.7 329658 1 8
anydiv3 3 1 stewie 5:17.6 317608 1 10
anydiv3 3 2 scrim --:--.-- 0 0 0
anydiv3 3 3 dj_aj --:--.-- 0 0 0
anydiv3 3 4 leendore --:--.-- 0 0 0
anydiv3 4 0 spiker 5:05.4 305363 1 10
anydiv3 4 1 stewie 5:13.4 313383 1 8
anydiv3 4 2 scrim --:--.-- 0 0 0
anydiv3 4 3 dj_aj --:--.-- 0 0 0
anydiv3 4 4 leendore --:--.-- 0 0 0
anyqual 1 0 mars02 5:07.2 307162 1 6
anyqual 1 1 jeremy 5:41.9 341919 1 2
anyqual 1 2 sprsonic 5:23.7 323681 1 3
anyqual 1 3 gtace 5:18.8 318809 1 4
anyqual 1 4 maximum 5:07.1 307126 1 8
anyqual 1 5 vinz 5:14.9 314881 1 5
anyqual 1 6 niftski 4:59.0 298975 1 10
anyqual 2 0 scrim --:--.-- 0 0 0
anyqual 2 1 vinz 5:20.4 320392 1 5
anyqual 2 2 gtace 4:58.9 298925 1 10
anyqual 2 3 spiker 5:54.6 354586 1 4
anyqual 2 4 sullyrox 5:05.4 305401 1 8
anyqual 2 5 mars02 6:01.2 361222 1 3
anyqual 2 6 8bitlord 5:08.9 308889 1 6
anyqual 3 0 spiker 6:10.9 370924 1 3
anyqual 3 1 8bitlord 6:23.9 383935 1 2
anyqual 3 2 stewie 5:42.3 342288 1 5
anyqual 3 3 vinz 5:07.1 307092 1 6
anyqual 3 4 tmgd 5:46.3 346316 1 4
anyqual 3 5 kosmic 5:01.0 300987 1 8
anyqual 3 6 niftski 4:59.3 299321 1 10
anyqual 4 0 nebula 5:25.0 324997 1 6
anyqual 4 1 sprsonic 5:30.3 330322 1 5
anyqual 4 2 jeremy 5:04.7 304713 1 10
anyqual 4 3 scrim 5:37.1 337128 1 4
anyqual 4 5 tmgd 5:08.4 308359 1 8
anyqual 4 6 spiker --:--.-- 0 0 0
anyqual 5 0 scrim --:--.-- 0 0 0
anyqual 5 1 sullyrox 5:04.2 304197 1 10
anyqual 5 3 maximum 5:08.9 308890 1 5
anyqual 5 4 8bitlord 5:13.6 313585 1 4
anyqual 5 5 jeremy 5:05.0 304982 1 8
anyqual 5 6 mars02 5:06.0 306011 1 6
anyqual 6 0 gtace 4:59.0 298957 1 10
anyqual 6 1 8bitlord 5:06.9 306860 1 6
anyqual 6 2 kosmic 5:37.3 337328 1 5
anyqual 6 3 nebula 4:59.0 299039 1 8
anyqual 6 5 stewie --:--.-- 0 0 0
anyqual 6 6 leendore --:--.-- 0 0 0
anyqual 7 0 scrim --:--.-- 0 0 0
anyqual 7 1 sprsonic 5:58.6 358591 1 5
anyqual 7 2 sullyrox 5:31.4 331440 1 8
anyqual 7 3 tmgd 5:55.2 355200 1 6
anyqual 7 4 leendore 6:17.6 377646 1 4
anyqual 7 5 niftski 4:58.3 298261 1 10
anyqual 7 6 stewie --:--.-- 0 0 0
anyqual 8 0 stewie 5:15.5 315461 1 4
anyqual 8 1 jeremy 5:09.7 309707 1 5
anyqual 8 2 spiker 5:05.8 305782 1 10
anyqual 8 3 mars02 5:07.1 307092 1 8
anyqual 8 4 maximum 5:07.3 307294 1 6
anyqual 8 5 leendore --:--.-- 0 0 0
anyqual 8 6 kosmic 5:35.4 335360 1 3
anyqual 9 0 kosmic 5:35.5 335509 1 4
anyqual 9 1 gtace 5:04.4 304417 1 8
anyqual 9 2 iball 6:36.7 396728 1 3
anyqual 9 4 mars02 5:05.4 305411 1 6
anyqual 9 5 sprsonic 5:07.8 307761 1 5
anyqual 9 6 tmgd 5:01.5 301486 1 10
anyqual 10 0 sullyrox 5:05.7 305694 1 8
anyqual 10 1 spiker 5:19.0 318956 1 6
anyqual 10 2 kosmic 5:31.1 331089 1 5
anyqual 10 3 iball --:--.-- 0 0 0
anyqual 10 4 nebula 5:55.2 355197 1 3
anyqual 10 5 niftski 5:02.5 302471 1 10
anyqual 10 6 scrim 5:42.1 342065 1 4
anyqual 11 0 iball 6:57.9 417914 1 4
anyqual 11 1 mars02 5:04.6 304617 1 10
anyqual 11 2 vinz 5:08.6 308571 1 8
anyqual 11 3 niftski 5:28.7 328708 1 6
anyqual 11 4 nebula 5:52.4 352386 1 5
anyqual 11 5 leendore --:--.-- 0 0 0
anyqual 12 0 tmgd 5:01.5 301484 1 10
anyqual 12 1 leendore --:--.-- 0 0 0
anyqual 12 2 jeremy 5:03.4 303433 1 6
anyqual 12 3 sullyrox 5:05.3 305330 1 5
anyqual 12 4 iball 6:37.9 397894 1 3
anyqual 12 5 maximum 5:06.3 306293 1 4
anyqual 12 6 gtace 5:02.5 302451 1 8
anyqual 13 0 stewie 6:51.2 411188 1 2
anyqual 13 1 iball 5:51.7 351671 1 3
anyqual 13 2 sprsonic 5:12.7 312734 1 4
anyqual 13 3 maximum 5:07.0 306992 1 8
anyqual 13 4 vinz 5:08.5 308510 1 6
anyqual 13 5 nebula 5:01.6 301585 1 10
anyqual 13 6 8bitlord 5:08.5 308527 1 5
warpdiv1 1 0 niftski 19:04 1143715 1 10
warpdiv1 1 1 gtace 19:14 1154464 1 8
warpdiv1 1 2 mars02 19:17 1157497 1 6
warpdiv1 1 3 kosmic 19:34 1173947 1 5
warpdiv1 1 4 jeremy 19:36 1175516 1 4
warpdiv1 1 5 sprsonic 20:16 1216198 1 2
warpdiv1 1 6 spiker 19:54 1194282 1 3
warpdiv1 2 0 niftski 19:04 1143668 1 10
warpdiv1 2 1 gtace 19:08 1147506 1 6
warpdiv1 2 2 mars02 19:12 1151588 1 4
warpdiv1 2 3 kosmic 19:06 1146396 1 8
warpdiv1 2 4 jeremy 19:13 1152715 1 3
warpdiv1 2 5 sprsonic 19:11 1151407 1 5
warpdiv1 2 6 spiker 19:28 1168230 1 2
warpdiv1 3 0 niftski 19:18 1158211 1 6
warpdiv1 3 1 gtace 19:09 1149456 1 10
warpdiv1 3 2 mars02 19:16 1156332 1 8
warpdiv1 3 3 kosmic 19:27 1166812 1 4
warpdiv1 3 4 jeremy 19:21 1160574 1 5
warpdiv1 3 5 sprsonic 19:29 1169322 1 3
warpdiv1 3 6 spiker 19:49 1189374 1 2
warpdiv2 1 0 nebula --:--.-- 0 0 0
warpdiv2 1 1 spiker 19:34 1173863 1 10
warpdiv2 1 2 vinz 19:54 1193950 1 6
warpdiv2 1 3 stewie 19:43 1182550 1 8
warpdiv2 1 4 scrim --:--.-- 0 0 0
warpdiv2 1 5 drubzyy --:--.-- 0 0 0
warpdiv2 2 0 nebula --:--.-- 0 0 0
warpdiv2 2 1 spiker 20:20 1220041 1 6
warpdiv2 2 2 vinz 20:06 1205845 1 10
warpdiv2 2 3 stewie 20:17 1217095 1 8
warpdiv2 2 4 scrim --:--.-- 0 0 0
warpdiv2 2 5 drubzyy --:--.-- 0 0 0
warpqual 1 0 mars02 19:25 1164730 1 10
warpqual 1 1 nebula 20:13 1213217 1 3
warpqual 1 2 sprsonic 19:36 1175629 1 6
warpqual 1 3 gtace 19:26 1165915 1 8
warpqual 1 4 jeremy 19:57 1197361 1 4
warpqual 1 5 kosmic 19:36 1176297 1 5
warpqual 2 0 scrim --:--.-- 0 0 0
warpqual 2 1 spiker 20:08 1208277 1 6
warpqual 2 2 vinz 19:57 1196844 1 8
warpqual 2 3 kosmic 19:26 1165915 1 10
warpqual 2 4 sprsonic 20:15 1214650 1 5
warpqual 2 5 drubzyy --:--.-- 0 0 0
warpqual 3 0 nebula 20:22 1222399 1 6
warpqual 3 1 stewie 21:48 1308126 1 5
warpqual 3 2 niftski 19:12 1152370 1 10
warpqual 3 3 jeremy 19:21 1160940 1 8
warpqual 3 4 scrim --:--.-- 0 0 0
warpqual 3 5 drubzyy --:--.-- 0 0 0
warpqual 4 0 spiker 21:15 1274548 1 5
warpqual 4 1 vinz 21:42 1301770 1 3
warpqual 4 2 mars02 19:26 1165633 1 6
warpqual 4 3 gtace 19:22 1161585 1 8
warpqual 4 4 stewie 21:26 1286280 1 4
warpqual 4 5 niftski 19:10 1150076 1 10`

const TOURNAMENTS = {
    'anyqual': {
        name: "Warpzone Invitational 2025 - SMB1 Any% Qualifiers",
        shortName: "Warpzone2025AnyQual",
        date: "2025-06-06T11:00:00Z",
        event_order: 1,
        event_uriname: "SMB1Any"
    },
    'warpqual': {
        name: "Warpzone Invitational 2025 - SMB1 Warpless Qualifiers",
        shortName: "Warpzone2025WarplessQual",
        date: "2025-06-06T16:00:00Z",
        event_order: 2,
        event_uriname: "SMB1Warpless"
    },
    'anydiv3': {
        name: "Warpzone Invitational 2025 - SMB1 Any% Division 3",
        shortName: "Warpzone2025AnyDiv3",
        date: "2025-06-07T11:00:00Z",
        event_order: 1,
        event_uriname: "SMB1Any"
    },
    'anydiv2': {
        name: "Warpzone Invitational 2025 - SMB1 Any% Division 2",
        shortName: "Warpzone2025AnyDiv2",
        date: "2025-06-07T12:00:00Z",
        event_order: 2,
        event_uriname: "SMB1Any"
    },
    'anydiv1': {
        name: "Warpzone Invitational 2025 - SMB1 Any% Division 1",
        shortName: "Warpzone2025AnyDiv1",
        date: "2025-06-07T14:00:00Z",
        event_order: 3,
        event_uriname: "SMB1Any"
    },
    'warpdiv2': {
        name: "Warpzone Invitational 2025 - SMB1 Warpless Division 2",
        shortName: "Warpzone2025WarplessDiv2",
        date: "2025-06-07T16:00:00Z",
        event_order: 4,
        event_uriname: "SMB1Warpless"
    },
    'warpdiv1': {
        name: "Warpzone Invitational 2025 - SMB1 Warpless Division 1",
        shortName: "Warpzone2025WarplessDiv1",
        date: "2025-06-07T17:00:00Z",
        event_order: 5,
        event_uriname: "SMB1Warpless"
    },
};

const CRGAIDs = {
    'mars02': 'MARS02025',
    'jeremy': 'JEREM2022',
    'sprsonic': 'SUPER2022',
    'gtace': 'GTACE2023',
    'maximum': 'MAXIM2024',
    'vinz': 'VINZC2025',
    'niftski': 'NIFTS2022',
    'scrim': 'SCRIM2023',
    'spiker': 'SPIKE2023',
    'sullyrox': 'SULLY2024',
    'stewie': 'STEWI2022',
    'tmgd': 'THEMI2023',
    'kosmic': 'KOSMI2022',
    'nebula': 'NEBUL2023',
    'leendore': 'LEEND2025',
    'iball': 'IBALL2025',
    'dj_aj': 'DJ_AJ2024',
    '8bitlord': '8BITL2024',
    'drubzyy': 'DRUBZ2025',
    'scalpel': 'SCALP2022',
};

const NEW_ALIASES = {
    'mars02': 'Mars02',
    'vinz': 'vinzchillin',
    'leendore': 'Leendore',
    'iball': 'iBall',
    'drubzyy': 'drubzyy',
};

async function main() {
    const person_id = {}
    for (const [short, crgaid] of Object.entries(CRGAIDs)) {
        let v = await prisma.person.findUnique({
            where: {
                crgaid: crgaid
            }
        });
        if (v === null) {
            v = await prisma.person.create({
                data: {
                    alias: NEW_ALIASES[short],
                    crgaid: crgaid
                },
            });
            console.log("Add Person: ",  NEW_ALIASES[short], crgaid)
        }
        person_id[short] = v.id;
    }

    const event_id = {}
    for (const [short, dat] of Object.entries(TOURNAMENTS)) {
        let v = await prisma.event.findUnique({
            where: {
                uriName: dat["event_uriname"],
            },
        });
        event_id[dat["event_uriname"]] = v.id;
    }

    const tournament_id = {};
    const tournament_event = {};
    for (const [short, dat] of Object.entries(TOURNAMENTS)) {
        let v = await prisma.tournament.findUnique({
            where: {
                shortName: dat["shortName"]
            }
        });
        if (v === null) {
            v = await prisma.tournament.create({
                data: {
                    name: dat["name"],
                    shortName: dat["shortName"],
                    date: dat["date"],
                    event_order: dat["event_order"],
                    event: {
                        connect: {
                            id: event_id[dat["event_uriname"]]
                        },
                    },
                },
            });
            console.log("Add Tournament: ", v.name);
        }
        tournament_event[short] = event_id[dat["event_uriname"]]
        tournament_id[short] = v.id;
    }

    const lines = RESULTS.split('\n')
    for (const line of lines) {
        const trimmed = line.trim();
        const parts = trimmed.split(/\s+/);

        const [tourney_short, rnd, seat, nm, _, elapsed_ms, fin, pts] = parts;
        let resultcode = 0;
        if (fin == '0') {
            resultcode = 2;
        }
        let mypts = Number(pts)
        if (tourney_short.includes('qual')) {
            mypts = 0
        }

        const rond = await prisma.tournamentRoundResult.create({
            data: {
                tournament: {
                    connect: {
                        id: tournament_id[tourney_short],
                    },
                },
                person: {
                    connect: {
                        id: person_id[nm],
                    },
                },
                event: {
                    connect: {
                        id: tournament_event[tourney_short],
                    },
                },
                roundNumber: Number(rnd),
                resultCode: resultcode,
                elapsedMilliseconds: Number(elapsed_ms),
                accruedPoints: mypts,
            },
        });
    }

    let standings = {}
    for (const line of lines) {
        const trimmed = line.trim();
        const parts = trimmed.split(/\s+/);

        const [tourney_short, rnd, seat, nm, _, elapsed_ms, fin, pts] = parts;
        if (!(tourney_short in standings)) {
            standings[tourney_short] = {}
        }
        if (tourney_short.includes('qual')) {
            if (!(nm in standings[tourney_short])) {
                standings[tourney_short][nm] = []
            }
            let el = Number(elapsed_ms);
            if (fin == '0') {
                el = 999999999;
            }
            standings[tourney_short][nm].push(el)
        } else {
            if (!(nm in standings[tourney_short])) {
                standings[tourney_short][nm] = {}
                standings[tourney_short][nm]["pts"] = 0
                standings[tourney_short][nm]["best"] = Number(elapsed_ms)
            }
            standings[tourney_short][nm]["pts"] += Number(pts)
            if (standings[tourney_short][nm]["best"] == 0 || 
                (Number(elapsed_ms) < standings[tourney_short][nm]["best"] && Number(elapsed_ms) != 0)) {
                standings[tourney_short][nm]["best"] = Number(elapsed_ms)
            }
        }
    }
    for (const [tourney_short, res] of Object.entries(standings)) {
        if (tourney_short.includes('qual')) {
            for (const [player, times] of Object.entries(res)) {
                times.sort()
                if (tourney_short.includes('any')) {
                    times.shift()
                    times.pop()
                    if (player == 'mars02') {
                        times.shift();
                    }
                }
                let sm = times.reduce((acc, v) => acc + v, 0)
                sm /= times.length
                standings[tourney_short][player] = sm
            }
        } else {
            for (const [player, rec] of Object.entries(res)) {
                if (rec.best == 0) {
                    rec.best = 999999999;
                }
            }
        }
    }
    for (const [tourney_short, res] of Object.entries(standings)) {
        let ml = []
        if (tourney_short.includes('qual')) {
            for (const [player, avg] of Object.entries(res)) {
                ml.push([player, avg])
            }
            ml.sort(function(a,b) {
                return a[1]-b[1]
            })

        } else {
            for (const [player, rec] of Object.entries(res)) {
                ml.push([player, rec.pts, rec.best])
            }
            ml.sort(function(a,b) {
                if (a[1] == b[1]) {
                    return a[2] - b[2];
                } else {
                    return b[1] - a[1];
                }
            })
        }

        for (let i = 0; i < ml.length; i++) {
            const pid = person_id[ml[i][0]];
            const tid = tournament_id[tourney_short];
            const stnding = await prisma.tournamentFinalStanding.create({
                data: {
                    standing: i + 1,
                    person: {
                        connect: {
                            id: pid,
                        },
                    },
                    tournament: {
                        connect: {
                            id: tid,
                        },
                    },
                },
            });
        }
    }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

# Data

The purpose of this database is to accurately document the results at all CRGA tournaments.
In the future the main database will not live here, but the static website is generated based on the information contained herein.

The sqlite database contains the following tables:

```
Table                       |   Description
---------------------------------------------------------------------------------
person                      |   Every person that has competed in an tournament
event                       |   The different events
tournament                  |   The tournaments
tournament_final_standing   |   The final rankings for each tournament
tournament_round_result     |   The results for each round
```

Most columns should be self explanatory.
Each round result contains a `result_code` which has the following interpretation:

```
result_code |   Meaning
---------------------------------------------------------------------------------
0           |   SUCCESS. The person successfully started and completed the 
            |   speedrun within the time limit.
1           |   DNF. The person did not finish the speedrun.
2           |   DNS. The person did not start the speedrun.
3           |   WLK. This person got a 'walkover' and won because every other 
            |   scheduled person did not start or otherwise forfeited.
```

## Tracking notes

Tracked as dumped human readable sql commands for some reason.
Here are some snippets.

To create the binary database:

```
cat schema.sql data.sql | sqlite3 crgadb.db
```

To dump the schema and data (roughly):

```
sqlite3 crgadb.db ".schema --indent" > schema.sql
sqlite3 crgadb.db .dump | grep "^INSERT" > data.sql
```


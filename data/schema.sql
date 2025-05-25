CREATE TABLE person(
  id                    INTEGER PRIMARY KEY,
  rgmid                 TEXT UNIQUE NOT NULL,
  alias                 TEXT NOT NULL,
  join_date             TEXT NOT NULL DEFAULT "yyyy-mm-dd"
);
CREATE TABLE event(
  id                    INTEGER PRIMARY KEY,
  rgmid                 TEXT UNIQUE NOT NULL,
  full_name             TEXT,
  short_name            TEXT
);
CREATE TABLE tournament(
  id                    INTEGER PRIMARY KEY,
  event_id              INTEGER REFERENCES event(id) ON DELETE CASCADE NOT NULL,
  rgmid                 TEXT UNIQUE NOT NULL,
  name                  TEXT NOT NULL,
  date                  TEXT NOT NULL DEFAULT "yyyy-mm-dd",
  event_order           INTEGER NOT NULL DEFAULT 1
);
CREATE TABLE tournament_final_standing(
  id                    INTEGER PRIMARY KEY,
  tournament_id         INTEGER REFERENCES tournament(id) ON DELETE CASCADE NOT NULL,
  person_id             INTEGER REFERENCES person(id) ON DELETE CASCADE NOT NULL,
  standing              INTEGER NOT NULL
);
CREATE TABLE tournament_round_result(
  id                    INTEGER PRIMARY KEY,
  tournament_id         INTEGER REFERENCES tournament(id) ON DELETE CASCADE NOT NULL,
  person_id             INTEGER REFERENCES person(id) ON DELETE CASCADE NOT NULL,
  round                 INTEGER NOT NULL,
  result_code           INTEGER NOT NULL,
  elapsed_milliseconds  INTEGER NOT NULL,
  accrued_points        INTEGER NOT NULL
);

CREATE TABLE person(
  id            INTEGER     PRIMARY KEY,
  crgaid        TEXT        UNIQUE NOT NULL,
  alias         TEXT        NOT NULL,
  join_date     TEXT        NOT NULL DEFAULT "yyyy-mm-dd"
);
CREATE TABLE event(
  id            INTEGER PRIMARY KEY,
  crgaid        TEXT UNIQUE NOT NULL,
  full_name     TEXT,
  short_name    TEXT
);
CREATE TABLE tournament(
  id            INTEGER PRIMARY KEY,
  event_id      INTEGER REFERENCES event(id) ON DELETE CASCADE NOT NULL,
  crgaid        TEXT UNIQUE NOT NULL,
  name          TEXT,
  date          TEXT NOT NULL DEFAULT "yyyy-mm-dd",
  event_order   INTEGER NOT NULL DEFAULT 1
);
CREATE TABLE tournament_final_standing(
  id            INTEGER PRIMARY KEY,
  tournament_id INTEGER REFERENCES tournament(id) ON DELETE CASCADE NOT NULL,
  person_id     INTEGER REFERENCES person(id) ON DELETE CASCADE NOT NULL,
  standing      INTEGER NOT NULL
);
CREATE TABLE tournament_round_result(
  id                        INTEGER PRIMARY KEY,
  tournament_id             INTEGER REFERENCES tournament(id) ON DELETE CASCADE NOT NULL,
  person_id                 INTEGER REFERENCES person(id) ON DELETE CASCADE NOT NULL,
  round                     INTEGER NOT NULL,
  result_code               INTEGER NOT NULL,
  elapsed_milliseconds      INTEGER NOT NULL,
  accrued_points            INTEGER NOT NULL
);
CREATE INDEX tournament_round_result_result_code_idx ON tournament_round_result(result_code);
CREATE INDEX tournament_round_result_person_idx ON tournament_round_result(person_id);
CREATE INDEX tournament_date_event_order_idx ON tournament(date, event_order);
CREATE INDEX tournament_round_result_person_id_tournament_id_idx ON tournament_round_result(person_id, tournament_id);

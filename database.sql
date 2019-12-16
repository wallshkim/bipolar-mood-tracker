-- CREATE DATABASE NAMED: bipolar_tracker

-- CREATE TABLES
CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR (100) UNIQUE NOT NULL,
  "email" VARCHAR (200) NOT NULL,
  "first_name" VARCHAR(120) NOT NULL,
  "last_name" VARCHAR(120) NOT NULL,
  "password" VARCHAR (1000) NOT NULL,
  "track_elevated" BOOL DEFAULT true,
  "track_depressed" BOOL DEFAULT true,
  "track_sleep" BOOL DEFAULT true,
  "track_irritability" BOOL DEFAULT true,
  "track_anxiety" BOOL DEFAULT true,
  "track_psychotic" BOOL DEFAULT true,
  "track_therapy" BOOL DEFAULT true,
  "track_notes" BOOL DEFAULT true,
  "track_exercise" BOOL DEFAULT false,
  "track_alcohol" BOOL DEFAULT false,
  "track_substance_use" BOOL DEFAULT false,
  "track_weight" BOOL DEFAULT false
);

CREATE TABLE "medications" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "name" VARCHAR (200) NOT NULL,
  "dosage" INT DEFAULT 0,
  "units" VARCHAR(100) DEFAULT 'mg' NOT NULL,
  "frequency" VARCHAR (1000) DEFAULT 'asNeeded' NOT NULL,
  "time" VARCHAR(100) DEFAULT 'any' NOT NULL,
  "disabled" BOOL DEFAULT false NOT NULL
);


CREATE TABLE "medications_per_day" (
  "id" SERIAL PRIMARY KEY,
  "date" DATE,
  "user_id" INT REFERENCES "user",
  "medication_id" INT REFERENCES "medications",
  "taken" BOOL DEFAULT false 
);


CREATE TABLE "moods_per_day" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "date"  DATE,
  "elevated" INT DEFAULT 0,
  "depressed" INT DEFAULT 0,
  "sleep" INT,
  "irritability" INT DEFAULT 0,
  "anxiety" INT DEFAULT 0,
  "psychotic_symptoms" BOOL DEFAULT false,
  "therapy" BOOL DEFAULT false,
  "notes" TEXT DEFAULT ' ',
  "exercise" BOOL DEFAULT false,
  "alcohol" INT DEFAULT 0,
  "substance_use" BOOL DEFAULT false,
  "weight" INT DEFAULT 0
);

-- ADD A USER
INSERT INTO "user" 
("username", "email", "first_name", "last_name", "password") 
VALUES ('NinaSimone', 'nina@nina.simone', 'Nina', 'Simone', 'ninasimone');

-- ADD MEDICATIONS
INSERT INTO "medications" 
("user_id", "name", "dosage", "units", "frequency", "time") 
VALUES (1, 'Propranolol', 120, 'mg', 'daily' , 'AM');

INSERT INTO "medications" 
("user_id", "name", "dosage", "units", "frequency", "time") 
VALUES (1, 'Latuda', 60, 'mg', 'daily' , 'PM');


-- ADD DATA TO MOODS_PER_DAY
INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-01-2019', 1, 2, 6, 0, 0 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-02-2019', 0, 2, 6, 1, 2 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-03-2019', 2, 1, 7, 2, 1 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-04-2019', 1, 2, 8, 1, 2 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-05-2019', 1, 2, 8, 1, 2 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-06-2019', 2, 1, 5, 1, 0);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-07-2019', 2, 2, 7, 2, 1 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-08-2019', 1, 1, 5, 0, 1 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-09-2019', 3, 0, 6, 2, 2 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety")  
VALUES (1, '11-10-2019', 3, 2, 9, 3, 2 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-11-2019', 2, 2, 11, 1, 1 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-12-2019', 1, 2, 7, 0, 2 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-13-2019', 0, 0, 8, 0, 0 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-14-2019', 0, 2, 10, 1, 0 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-15-2019', 1, 2, 8, 1, 0 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-16-2019', 2, 0, 9, 1, 1 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety") 
VALUES (1, '11-17-2019', 1, 0, 9, 0, 0 );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11-18-2019', 0, 1, 10, 0, 0, false, true);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11-19-2019', 0, 1, 11, 1, 0, false, false );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11-20-2019', 2, 1, 9, 1, 0, false, false );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11-21-2019', 3, 1, 5, 2, 1, false, false );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11-22-2019', 2, 2, 6, 1, 2, false, false );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11-23-2019', 1, 2, 7, 1, 0, false, false );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11-24-2019', 2, 1, 5, 2, 1, false, false );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11-25-2019', 1, 2, 6, 0, 0, false, true);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11/26/2019', 0, 2, 7, 1, 0, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11/27/2019', 0, 1, 9, 0, 0, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11/28/2019', 1, 1, 10, 1, 0, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11/29/2019', 1, 1, 8, 2, 0, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '11/30/2019', 0, 1, 11, 0, 0, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12/01/2019', 0, 1, 9, 0, 1, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12/02/2019', 1, 0, 6, 1, 1, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12/03/2019', 1, 1, 7, 0, 0, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12-04-2019', 2, 2, 6, 1, 2, false, false );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12-05-2019', 1, 2, 7, 1, 0, false, false );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12-06-2019', 2, 1, 5, 2, 1, false, false );

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12-07-2019', 1, 2, 6, 0, 0, false, true);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12/08/2019', 0, 2, 7, 1, 0, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12/09/2019', 0, 1, 9, 0, 0, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12/10/2019', 1, 1, 10, 1, 0, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12/11/2019', 1, 1, 8, 2, 0, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12/12/2019', 0, 1, 11, 0, 0, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12/13/2019', 0, 1, 9, 0, 1, false, false);

INSERT INTO "moods_per_day" 
("user_id", "date", "elevated", "depressed", "sleep", "irritability", "anxiety", "psychotic_symptoms", "therapy") 
VALUES (1, '12/14/2019', 0, 1, 9, 0, 1, false, false);

--END INSERTS TO MOODS_PER_DAY


-- ADD DATA TO MEDICATIONS_PER_DAY
INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/01/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/01/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/02/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/02/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/03/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/03/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/04/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/04/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/05/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/05/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/06/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/06/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/07/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/07/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/08/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/08/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/09/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/09/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/10/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/10/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/11/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/11/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/12/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/12/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/13/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/13/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/14/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/14/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/15/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/15/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/16/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/16/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/17/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/17/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/18/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/18/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/19/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/19/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/20/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/20/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/21/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/21/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/22/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/22/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/23/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/23/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/24/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/24/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/25/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/25/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/26/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/26/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/27/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/27/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/28/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/28/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/29/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/29/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/30/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('11/30/2019', 1, 2);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id")
VALUES ('12/01/2019', 1, 1);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/02/2019', 1, 2, true);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/02/2019', 1, 1, true);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/03/2019', 1, 1, true);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/04/2019', 1, 1, true);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/05/2019', 1, 1, true);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/06/2019', 1, 1, false);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/07/2019', 1, 1, true);


INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/08/2019', 1, 1, true);


INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/09/2019', 1, 1, true);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/10/2019', 1, 1, true);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/11/2019', 1, 1, true);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/12/2019', 1, 1, false);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/13/2019', 1, 1, true);

INSERT INTO "medications_per_day" 
("date", "user_id", "medication_id", "taken")
VALUES ('12/14/2019', 1, 1, true);


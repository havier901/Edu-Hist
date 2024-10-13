-- Keep a log of any SQL queries you execute as you solve the mystery.
.schema;
--VIEW crime_scene_reports
SELECT * FROM crime_scene_reports
--All you know is that the theft took place on
--July 28, 2021 and thatit took place on Humphrey Street.
SELECT * FROM crime_scene_reports
WHERE street LIKE 'Humphrey%';
--3 interviews, all mention bakery
SELECT * FROM interviews
WHERE transcript LIKE '%bakery%'
AND month = 7;
--Ruth suggest camera footage time within 10 mins of theft
--Eugene suggest check ATM transactions for earlier that day, Leggett Street
--Raymond earliest flight out of fiftyville, accomplice purchased tickets
--REVIEW TIME OF CRIME
SELECT * FROM crime_scene_reports
WHERE street = 'Humphrey Street';
--Theft took place at 10:15am
SELECT * FROM bakery_security_logs
WHERE (day, month, year) = (28, 7, 2021);
-- 8 LICENSE PLATES DURING TIME:
--5P2BI95
--94KL13X
--6P58WS2
--4328GD8
--G412CB7
--L93JTIZ
--322W7JE
--0NTHK55
SELECT * FROM atm_transactions
WHERE (day, month, year) = (28, 7, 2021)
AND atm_location LIKE 'Leggett%';

--+-----+----------------+------+-------+-----+----------------+------------------+--------+
--| id  | account_number | year | month | day |  atm_location  | transaction_type | amount |
--+-----+----------------+------+-------+-----+----------------+------------------+--------+
--| 246 | 28500762       | 2021 | 7     | 28  | Leggett Street | withdraw         | 48     |
--| 264 | 28296815       | 2021 | 7     | 28  | Leggett Street | withdraw         | 20     |
--| 266 | 76054385       | 2021 | 7     | 28  | Leggett Street | withdraw         | 60     |
--| 267 | 49610011       | 2021 | 7     | 28  | Leggett Street | withdraw         | 50     |
--| 269 | 16153065       | 2021 | 7     | 28  | Leggett Street | withdraw         | 80     |
--| 275 | 86363979       | 2021 | 7     | 28  | Leggett Street | deposit          | 10     |
--| 288 | 25506511       | 2021 | 7     | 28  | Leggett Street | withdraw         | 20     |
--| 313 | 81061156       | 2021 | 7     | 28  | Leggett Street | withdraw         | 30     |
--| 336 | 26013199       | 2021 | 7     | 28  | Leggett Street | withdraw         | 35     |
--+-----+----------------+------+-------+-----+----------------+------------------+--------+

--Look up Fiftyville Airport
SELECT * FROM airports
WHERE city LIKE 'Fifty%';

--+----+--------------+-----------------------------+------------+
--| id | abbreviation |          full_name          |    city    |
--+----+--------------+-----------------------------+------------+
--| 8  | CSF          | Fiftyville Regional Airport | Fiftyville |
--+----+--------------+-----------------------------+------------+

SELECT * FROM flights
WHERE origin_airport_id = 8
AND month = 7
AND year = 2021
ORDER BY day DESC;

-- EARLIEST FLIGHT @ 8:20, ID= 36, DESTINATION ID = 4,

SELECT * FROM flights
WHERE id = 36;

--+----+--------------+-------------------+---------------+
--| id | abbreviation |     full_name     |     city      |
--+----+--------------+-------------------+---------------+
--| 4  | LGA          | LaGuardia Airport | New York City |
--+----+--------------+-------------------+---------------+


-- Search license plates
SELECT * FROM people
WHERE license_plate = '5P2BI95'
OR license_plate = '94KL13X'
OR license_plate = '6PB58WS2'
OR license_plate = '4328GD8'
OR license_plate = 'G412CB7'
OR license_plate = 'L93JTIZ'
OR license_plate = '322W7JE'
OR license_plate = '0NTHK55';

--+--------+---------+----------------+-----------------+---------------+
--|   id   |  name   |  phone_number  | passport_number | license_plate |
--+--------+---------+----------------+-----------------+---------------+
--| 221103 | Vanessa | (725) 555-4692 | 2963008352      | 5P2BI95       |
--| 396669 | Iman   x | (829) 555-5269 | 7049073643      | L93JTIZ       |
--| 398010 | Sofia   | (130) 555-0289 | 1695452385      | G412CB7       |
--| 467400 | Luca x   | (389) 555-5198 | 8496433585      | 4328GD8       |
--| 514354 | Diana   x | (770) 555-1861 | 3592750733      | 322W7JE       |
--| 560886 | Kelsey  | (499) 555-9472 | 8294398571      | 0NTHK55       |
--| 686048 | Bruce  x | (367) 555-5533 | 5773159633      | 94KL13X       |
--+--------+---------+----------------+-----------------+---------------+

--Use ATM transactions to look up bank_accounts
SELECT * FROM bank_accounts
WHERE account_number = 28500762
OR account_number = 28296815
OR account_number = 76054385
OR account_number = 49610011
OR account_number = 16153065
OR account_number = 86363979
OR account_number = 25506511
OR account_number = 81031156
OR account_number = 26013199;

--+----------------+-----------+---------------+
--| account_number | person_id | creation_year |
--+----------------+-----------+---------------+
--| 49610011       | 686048    | 2010          |
--| 86363979       | 948985    | 2010          |
--| 26013199       | 514354    | 2012          |
--| 16153065       | 458378    | 2012          |
--| 28296815       | 395717    | 2014          |
--| 25506511       | 396669    | 2014          |
--| 28500762       | 467400    | 2014          |
--| 76054385       | 449774    | 2015          |
--| 81061156       | 438727    | 2018          |
--+----------------+-----------+---------------+

--Iman, Luca, Diana, Bruce all show up in parking log and ATM transactions
--Search passenger list for Flight 36

SELECT * FROM passengers
WHERE flight_id = 36;

--+-----------+-----------------+------+
--| flight_id | passport_number | seat |
--+-----------+-----------------+------+
--| 36        | 7214083635      | 2A   |
--| 36        | 1695452385      | 3B   |
--| 36        | 5773159633      | 4A   |
--| 36        | 1540955065      | 5C   |
--| 36        | 8294398571      | 6C   |
--| 36        | 1988161715      | 6D   |
--| 36        | 9878712108      | 7A   |
--| 36        | 8496433585      | 7B   |
--+-----------+-----------------+------+

--Compare passport numbers with info
--LUCA ID 467400 ACCT 28500762 PHONE (389) 555-5198
--BRUCE ID 686048, ACCT 49610011 PHONE (367) 555-5533 **

--Look up phone_calls

SELECT * FROM phone_calls
WHERE (day, month, year) = (28, 7, 2021)
OR caller = '(389) 555-5198'
OR caller = '(367) 555-5533';

--Look up receiver phone number via people table
SELECT * FROM people
WHERE phone_number = '(375) 555-8161';
-- Robin ID 864400 ACCT 94751264

--Look up bank account for Robin
SELECT * FROM bank_accounts
WHERE person_id = 864400;

SELECT * FROM atm_transactions
WHERE account_number = 94751264;


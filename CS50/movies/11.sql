--write a SQL query to list the titles ofthe five highest
-- rated movies (in order) that Chadwick Boseman starred in,
--starting with the highest rated.

SELECT title FROM movies
JOIN stars ON stars.movie_id = movies.id
JOIN ratings ON ratings.movie_id = movies.id
JOIN people ON people.id = stars.person_id
WHERE name = 'Chadwick Boseman'
ORDER BY rating DESC
LIMIT 5;

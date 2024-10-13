--write a SQL query to list the titles of all movies
-- in which both Bradley Cooper and Jennifer Lawrence starred.

SELECT title FROM movies
JOIN stars ON stars.movie_id = movies.id
JOIN people ON people.id = stars.person_id
WHERE name IN ('Bradley Cooper', 'Jennifer Lawrence')
GROUP BY title
HAVING COUNT(*) = 2;

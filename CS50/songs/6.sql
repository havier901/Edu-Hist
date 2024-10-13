--write a SQL query that lists the names of songs that are by Post Malone
SELECT s.name FROM songs AS s
JOIN artists AS a ON s.artist_id = a.id
WHERE a.name = 'Post Malone';


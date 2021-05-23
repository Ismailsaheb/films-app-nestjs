DROP TABLE IF EXISTS film;
CREATE TABLE IF NOT EXISTS film (
    id integer NOT NULL,
    film_name varchar(450) ,
    description varchar(450),
    release_date date DEFAULT CURRENT_DATE,
    rating varchar(450),
    ticket_price varchar(450),
    country varchar(450),
    genre varchar(450),
    photo varchar(450),
    PRIMARY KEY (id)
);
INSERT INTO film (id, film_name, description,rating, ticket_price, country, genre, photo) VALUES
    ('101', 'Avathar-2', 'camron', '4', '100', 'USA', 'Adventer', 'Dragon'),
    ('201','Titanic', 'camron',  '5', '40', 'USA', 'LOVE', 'Dragonx'),
    ('301','MASK', 'Animation',  '4', '80', 'KSA', 'Comedy', 'Dragoxn'),
    ('401','TINTIN-2', 'Animation',  '4', '100', 'USA', 'Adventer', 'Dragoxn'),
    ('501','3-Idots', 'AMIR',  '4', '100', 'INDIA', 'FRIENDSHIP', 'Dragonx'),
    ('601','POKIRI', 'MAHESH', '4', '100', 'INDIA', 'MASS', 'Dragonx');

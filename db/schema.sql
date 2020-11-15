--
DROP DATABASE [IF EXISTS] burgers_db;
-- 
CREATE DATABASE burgers_db;
--
use burgers_db;
--

-- create burgers table
CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN dEFAULT false,
    PRIMARY KEY (id)
);
